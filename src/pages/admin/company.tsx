import { memo, useState, useMemo, useEffect } from "react";
import { useQuery, useQueryClient } from "react-query";
import { BiSearch, BiBuilding, BiPlus } from "react-icons/bi";
import { FiMoreVertical } from "react-icons/fi";
import { MdModeEditOutline, MdDeleteOutline } from "react-icons/md";
import {
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import { companiesService } from "../../services/companies-service";
import { ICompany } from "../../interfaces/ICompany";
import {
  ModalCreateCompany,
  ModalUpdateCompany,
  ModalDeleteCompany,
} from "../../components/Modals";
import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
  AdminTableEmpty,
  AdminTablePagination,
} from "../../components/AdminTable";
import {
  AdminWrapper,
  AdminContent,
  AdminTitle,
  AdminSubtitle,
  AdminCard,
  AdminCardHeader,
  AdminCardHeaderLeft,
  AdminCardHeaderRight,
  AdminCardTitleRow,
  AdminCardTitle,
  AdminCardCount,
  AdminSearchWrap,
  AdminSearchInput,
  AdminButton,
  StatusPill,
} from "../../styles/pages/admin";

function formatCnpj(value?: string) {
  if (!value) return "-";
  const digits = value.replace(/\D/g, "");
  if (digits.length !== 14) return value;
  return `${digits.slice(0, 2)}.${digits.slice(2, 5)}.${digits.slice(5, 8)}/${digits.slice(8, 12)}-${digits.slice(12)}`;
}

function AdminCompany() {
  const queryClient = useQueryClient();
  const [searchTerm, setSearchTerm] = useState("");
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data: companies = [] } = useQuery<ICompany[]>(
    "companies",
    companiesService.getAll,
    {
      keepPreviousData: true,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      staleTime: 5 * 60 * 1000,
      cacheTime: 30 * 60 * 1000,
    }
  );

  const filteredCompanies = useMemo(() => {
    if (!searchTerm.trim()) return companies;
    const term = searchTerm.toLowerCase();
    return companies.filter(
      (c) =>
        c.name?.toLowerCase().includes(term) ||
        c.fantasyName?.toLowerCase().includes(term) ||
        c.email?.toLowerCase().includes(term) ||
        c.cnpj?.replace(/\D/g, "").includes(term.replace(/\D/g, ""))
    );
  }, [companies, searchTerm]);

  const totalItems = filteredCompanies.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage || 1));

  useEffect(() => {
    if (currentPage > totalPages) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, totalPages]);

  const paginatedCompanies = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return filteredCompanies.slice(startIndex, endIndex);
  }, [filteredCompanies, currentPage, itemsPerPage]);

  const handleReloadCompanies = () => {
    queryClient.invalidateQueries("companies");
  };

  const handleOpenEdit = (companyId: string | undefined) => {
    setSelectedCompanyId(companyId);
    setIsEditOpen(true);
  };

  const handleOpenDelete = (companyId: string | undefined) => {
    setSelectedCompanyId(companyId);
    setIsDeleteOpen(true);
  };

  return (
    <AdminWrapper>
      <AdminTitle>Administrar Empresas</AdminTitle>
      <AdminSubtitle>Gerencie as empresas cadastradas na plataforma</AdminSubtitle>
      <AdminContent fullWidth>
        <AdminCard>
          <AdminCardHeader>
            <AdminCardHeaderLeft>
              <AdminCardTitleRow>
                <BiBuilding />
                <AdminCardTitle>Lista de Empresas</AdminCardTitle>
              </AdminCardTitleRow>
              <AdminCardCount>
                {filteredCompanies.length} empresa(s) cadastrada(s)
              </AdminCardCount>
            </AdminCardHeaderLeft>
            <AdminCardHeaderRight>
              <AdminSearchWrap>
                <BiSearch />
                <AdminSearchInput
                  type="text"
                  placeholder="Buscar empresa..."
                  value={searchTerm}
                  onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                  }}
                />
              </AdminSearchWrap>
              <AdminButton onClick={() => setIsCreateOpen(true)}>
                <BiPlus size={18} style={{ marginRight: 8 }} />
                Nova Empresa
              </AdminButton>
            </AdminCardHeaderRight>
          </AdminCardHeader>

          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nome</TableHead>
                <TableHead>Nome Fantasia</TableHead>
                <TableHead>CNPJ</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead alignRight>Ações</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCompanies.length > 0 ? (
                paginatedCompanies.map((company) => (
                  <TableRow key={company.id ?? company.email}>
                    <TableCell fontMedium>{company.name}</TableCell>
                    <TableCell>{company.fantasyName ?? "-"}</TableCell>
                    <TableCell mono muted>
                      {formatCnpj(company.cnpj)}
                    </TableCell>
                    <TableCell muted>{company.email}</TableCell>
                    <TableCell>
                      <StatusPill $active={company.status !== "INACTIVE"}>
                        {company.status === "INACTIVE" ? "Inativo" : "Ativo"}
                      </StatusPill>
                    </TableCell>
                    <TableCell alignRight>
                      <CDropdown>
                        <CDropdownToggle caret={false} className="p-0 btn-link">
                          <FiMoreVertical size={20} style={{ cursor: "pointer" }} />
                        </CDropdownToggle>
                        <CDropdownMenu>
                          <CDropdownItem onClick={() => handleOpenEdit(company.id)}>
                            <MdModeEditOutline size={16} style={{ marginRight: 8 }} />
                            Editar
                          </CDropdownItem>
                          <CDropdownItem
                            onClick={() => handleOpenDelete(company.id)}
                            className="text-danger"
                          >
                            <MdDeleteOutline size={16} style={{ marginRight: 8 }} />
                            Excluir
                          </CDropdownItem>
                        </CDropdownMenu>
                      </CDropdown>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <AdminTableEmpty colSpan={6} message="Nenhuma empresa encontrada" />
              )}
            </TableBody>
          </Table>

          {totalItems > 0 && (
            <AdminTablePagination
              currentPage={currentPage}
              totalItems={totalItems}
              itemsPerPage={itemsPerPage}
              itemsPerPageOptions={[5, 10, 15, 20]}
              label="empresas"
              onPageChange={setCurrentPage}
              onItemsPerPageChange={(value) => {
                setItemsPerPage(value);
                setCurrentPage(1);
              }}
            />
          )}
        </AdminCard>
      </AdminContent>

      <ModalCreateCompany
        isOpen={isCreateOpen}
        setIsOpen={setIsCreateOpen}
        onSuccess={handleReloadCompanies}
      />
      <ModalUpdateCompany
        isOpen={isEditOpen}
        setIsOpen={setIsEditOpen}
        companyId={selectedCompanyId}
        onSuccess={handleReloadCompanies}
      />
      <ModalDeleteCompany
        companyId={selectedCompanyId}
        isOpen={isDeleteOpen}
        setIsOpen={setIsDeleteOpen}
        onSuccess={handleReloadCompanies}
      />
    </AdminWrapper>
  );
}

export default memo(AdminCompany);
