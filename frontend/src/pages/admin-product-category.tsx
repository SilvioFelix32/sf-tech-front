import React, { FormEvent, useEffect, useState } from "react"
import { useRouter } from "next/router";
import { productTypeService } from "../../services/product-type-service";
import { productCategoryService } from "../../services/products-category-service";
import { AdministrationSideBar } from "../components/SideBars";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Switch } from "@mui/material";
import { Modal as ModalRegister } from 'react-responsive-modal';
import { Modal as ModalEdit } from 'react-responsive-modal';
import { Modal as ModalDelete } from 'react-responsive-modal';
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import DataTable from "react-data-table-component";

import styles from "../styles/AdminProductsCategory.module.scss"
import customStyles from "../styles/customStyles";

export default function ProductCategoryAdmin() {
    const router = useRouter()
    const { query: { companyQuery } } = useRouter()
    const [productCategory, setProductCategory] = useState([]);
    const [ticketTypes, setTicketTypes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [reloadData, setReloadData] = useState(0);
    const [isToggled, setIsToggled] = useState(false) //switch
    const [checked, setChecked] = React.useState(false); //switch
    const [openModal, setOpenModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null);
    //dados
    const [tipo_produto, setTipoProduto] = useState(selectedProduct?.tipo_produto || 'INGRESSO')
    const [config_tipo_id, setConfigTipoId] = useState(null)
    const [titulo, setTitulo] = useState(selectedProduct?.titulo || '')
    const [descricao, setDescricao] = useState(selectedProduct?.descricao || '')
    const [ativo, setAtivo] = useState(selectedProduct?.ativo || true)
    const [avaliable, setAvaliable] = useState(selectedProduct?.avaliable || false);

    async function fetchProductsCategory(page: any) {
        if (companyQuery) {
            setLoading(true);

            await productCategoryService.getAll(companyQuery as string, {
                page: page,
                limit: perPage,
            })
                .then((data) => {
                    setProductCategory(data.paginated_data);
                    setTotalRows(data.total_count);
                })
                .catch(() => alert('Nenhuma categoria de produto encontrada'))
            setLoading(false);
        }
    };

    async function handlePageChange(page: any) {
        fetchProductsCategory(page);
    };

    async function handlePerRowsChange(newPerPage: any, page: any) {
        setLoading(true);
        productCategoryService.getAll(companyQuery as string, {
            page: page,
            limit: newPerPage,
        })
            .then((data) => {
                setProductCategory(data.paginated_data);
                setPerPage(newPerPage);
            })

        setLoading(false);
    };

    useEffect(() => {
        fetchProductsCategory(1); // fetch page 1 of users

    }, [reloadData]);

    useEffect(() => {
        productTypeService.getAll(companyQuery as string, {})
            .then((data) => {
                const ticketType = data.paginated_data.map((product: any) => {
                    return (
                        {
                            id: product.id,
                            descricao: product.descricao
                        }
                    )
                })
                setTicketTypes(ticketType)
            })
            .catch((err) => alert('nenhum produto encontrado'))
    }, [companyQuery]);

    async function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const data = {
            tipo_produto, /* [INGRESSO, ALIMENTACAO, PASSEIO, LOCACAO] */
            config_tipo_id: config_tipo_id || null,
            titulo,
            descricao,
            ativo,
        }

        await productCategoryService.create(companyQuery as string, data)
            .then(() => setReloadData(Math.random()))
            .catch((rr) => alert("Erro ao alterar"));
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAvaliable(event.target.checked);
    };

    async function handleChangeAvaliabilty(event: React.ChangeEvent<HTMLInputElement>, ProductId: string) {
        setChecked(event.target.checked);
        setAtivo(oldValue => !oldValue)
        setSelectedProduct((oldValue) => ({ ...oldValue, ativo: event.target.checked }))

        const newValue = {
            ativo
        }

        await productCategoryService.update(companyQuery as string, ProductId, newValue)
            .then(() => setReloadData(Math.random()))
            .catch(() => alert("Houve um problema"))
    };

    async function handleConfirmUpdate(ProductId: string) {
        const data = {
            tipo_produto,
            config_tipo_id,
            titulo,
            descricao,
            ativo,
        }

        await productCategoryService.update(companyQuery as string, ProductId, data)
            .then(() => {
                setOpen(false)
                setReloadData(Math.random())
            })
            .catch(() => alert("Erro ao alterar"));
    }

    async function handleDeleteCategory(ProductId: string) {
        await productCategoryService.delete(companyQuery as string, ProductId)
            .then(() => {
                setReloadData(Math.random())
                setOpenModal(false)
            })
    }
    //Dados da tabela
    const columns = [
        {
            name: 'tipo produto',
            selector: row => row.tipo,
            sortable: true,
        },
        {
            name: 'titulo',
            selector: row => row.titulo,
            sortable: true,
        },
        {
            name: 'descrição',
            selector: row => row.descricao,
        },
        {
            name: 'ativo',
            selector: row => row.ativo,
            sortable: true,
        },
        {
            name: 'outros',
            selector: row => row.excluir_alterar,
        },
    ];

    const data = productCategory.map((produto) => {
        return (
            {
                id: produto.id,
                tipo: produto.tipo_produto,
                titulo: produto.titulo,
                descricao: produto.descricao,
                ativo:
                    <Switch
                        checked={produto?.ativo}
                        onChange={(event) => handleChangeAvaliabilty(event, produto?.id)}
                        inputProps={{ 'aria-label': 'controlled' }} />,

                excluir_alterar:
                    <div className={styles.options}>
                        <button onClick={() => {
                            setTipoProduto(produto.tipo_produto)
                            setConfigTipoId(produto.config_tipo_id)
                            setTitulo(produto.titulo)
                            setDescricao(produto.descricao)
                            setAtivo(produto.ativo)
                            setAvaliable(produto.avaliable)
                            setSelectedProduct(produto)
                            setOpen(true)
                        }}>
                            <MdOutlineModeEditOutline />
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setSelectedProduct(produto.id)
                                setOpenModal(true)
                            }}
                            className={styles.buttonDelete}>
                            <MdDeleteOutline />
                        </button>
                    </div >
            }
        )
    })

    const paginationComponentOptions = {
        rowsPerPageText: 'Linhas por página',
        rangeSeparatorText: 'de',
        selectAllRowsItem: false,
    };

    return (
        <div>
            <AdministrationSideBar isToggled={isToggled} />
            <Header />
            <div className={styles.content}>
                <div className={styles.dashboard}>
                    <div className={styles.section}>
                        <button
                            className={styles.section__btn}
                            onClick={() => router.push({ pathname: "admin-products", query: { companyQuery } })}>
                            <FiArrowLeft />
                        </button>
                        <h1 className={styles.section__h1}>Administrar Categoria Produtos </h1>
                        <button
                            className={styles.section__btn}
                            onClick={() => setIsToggled(antigoValor => !antigoValor)}
                        >
                            <FaBars />
                        </button>
                    </div>
                    <div className={styles.dashboard__register}>
                        <button
                            onClick={() => setIsOpen(true)}
                            className={styles.dashboard__register_button}
                        >Cadastrar nova Categoria</button>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data}
                        progressPending={loading}
                        pagination
                        paginationServer
                        onChangeRowsPerPage={handlePerRowsChange}
                        onChangePage={handlePageChange}
                        paginationComponentOptions={paginationComponentOptions}
                        paginationRowsPerPageOptions={[5, 10, 20]}
                        paginationTotalRows={totalRows}
                        customStyles={customStyles}
                    />
                </div>
            </div>
            <Footer />
            <ModalRegister
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModal
                }}
                open={isOpen}
                onClose={() => {
                    setIsOpen(false)
                }}
                center>
                <form
                    onSubmit={handleSubmit}
                    className={styles.adminCategory}>
                    <p>Tipo de Produto:</p>
                    <select defaultValue={tipo_produto} onChange={e => { setTipoProduto(e.target.value) }}>
                        <option value='INGRESSO'>Ingresso</option>
                        <option value='ALIMENTACAO'>Alimentação</option>
                        <option value='PASSEIO'>Passeio</option>
                        <option value='LOCACAO'>Locação</option>
                    </select>
                    <p>Tipo de Ingresso (Opcional):</p>
                    <select onChange={e => setConfigTipoId(e.target.value)}>
                        <option></option>
                        {ticketTypes.map((ticketType) => {
                            return (
                                <option key={ticketType?.id} value={ticketType?.id}>{ticketType?.descricao}</option>
                            )
                        })}
                    </select>
                    <p>Titulo:</p>
                    <input type="text" defaultValue={titulo} onChange={e => setTitulo(e.target.value)} />
                    <p>Descrição:</p>
                    <input type="text" defaultValue={descricao} onChange={e => setDescricao(e.target.value)} />
                    <div className={styles.adminCategory__switch}>
                        <p>Ativo:</p>
                        <Switch
                            checked={avaliable}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </div>
                    <button
                        type="submit"
                        onClick={() => setIsOpen(false)}>
                        Cadastrar
                    </button>
                </form>
            </ModalRegister>
            <ModalEdit
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModal
                }}
                open={open}
                onClose={() => {
                    setOpen(false)
                }}
                center>
                <div
                    className={styles.adminCategory}>
                    <p>Tipo de Produto:</p>
                    <select defaultValue={selectedProduct?.tipo_produto} onChange={e => { setTipoProduto(e.target.value) }}>
                        <option value='INGRESSO'>Ingresso</option>
                        <option value='ALIMENTACAO'>Alimentação</option>
                        <option value='PASSEIO'>Passeio</option>
                        <option value='LOCACAO'>Locação</option>
                    </select>
                    <p>Tipo de Ingresso (Opcional):</p>
                    <select defaultValue={selectedProduct?.config_tipo_id} onChange={e => setConfigTipoId(e.target.value)}>
                        <option>Nenhum</option>
                        {ticketTypes.map((ticketType) => {
                            return (
                                <option key={ticketType?.id} value={ticketType?.id}>{ticketType?.descricao}</option>
                            )
                        })}
                    </select>
                    <p>Titulo:</p>
                    <input type="text" defaultValue={selectedProduct?.titulo} onChange={e => setTitulo(e.target.value)} />
                    <p>Descrição:</p>
                    <input type="text" defaultValue={selectedProduct?.descricao} onChange={e => setDescricao(e.target.value)} />
                    <p>Ativo:
                        <Switch
                            checked={selectedProduct?.avaliable}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                    </p>
                    <button
                        onClick={() => handleConfirmUpdate(selectedProduct?.id)}>
                        Cadastrar
                    </button>
                </div>
            </ModalEdit>
            <ModalDelete
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModalDelete
                }}
                open={openModal}
                onClose={() => setOpenModal(false)}
                center>
                <div
                    className={styles.customModalDelete__exclude}>
                    <p>Excluir tipo de Produto?:</p>
                    <div className={styles.customModalDelete__exclude_div}>
                        <button
                            onClick={() => {
                                handleDeleteCategory(selectedProduct)
                            }}>
                            Confirmar
                        </button>
                        <button
                            onClick={() => setOpenModal(false)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </ModalDelete>
        </div >
    )
}