import React, { useEffect, useState } from "react"
import { useRouter } from "next/router";
import { productsService } from "../../services/products-service";
import { AdministrationSideBar } from "../components/SideBars";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Modal as ModalRegister } from 'react-responsive-modal';
import { Modal as ModalEdit } from 'react-responsive-modal';
import { Modal as ModalDelete } from 'react-responsive-modal';
import { priceItemService } from "../../services/price-item-service";

import DataTable from 'react-data-table-component';
import { FaBars } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { MdOutlineModeEditOutline, MdDeleteOutline } from "react-icons/md";

import styles from "../styles/AdminPriceTable.module.scss"
import customStyles from '../styles/customStyles';

export default function PriceTable() {
    const { query: { companyQuery } } = useRouter()
    const { query: { tableId } } = useRouter()
    const router = useRouter()
    const [reloadData, setReloadData] = useState(0);
    const [selectedProductPrice, setSelectedProductPrice] = useState(null);
    //get e datatable 
    const [product, setProduct] = useState([]);
    const [tablePerItem, setTablePerItem] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    //modal e swich
    const [openModal, setOpenModal] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)
    const [isToggled, setIsToggled] = useState(false)
    //data
    const [produto_id, setProdutoId] = useState('')
    const [valor, setValor] = useState(0)
    const [valor_promocao, setValorPromocao] = useState(0)

    async function fetchPriceTablePerItems(page: any) {
        if (companyQuery) {
            setLoading(true);
            await priceItemService.getAll(
                companyQuery as string,
                tableId as string,
                {
                    page: page,
                    limit: perPage,
                }
            )
                .then(data => {
                    setTablePerItem(data.paginated_data)
                    setTotalRows(data.total_count);
                })
                .catch(() => alert('Houve algum erro'))
            setLoading(false);
        } else {
            alert('Houve algum erro')
            router.push({ pathname: "admin-price-table", query: { companyQuery } })
        }
    };

    function handlePageChange(page: any) {
        fetchPriceTablePerItems(page);
    };

    async function handlePerRowsChange(newPerPage: any, page: any) {
        setLoading(true);
        await priceItemService.getAll(companyQuery as string,
            tableId as string,
            {
                page: page,
                limit: newPerPage,
            })
            .then((data) => {
                setTablePerItem(data.paginated_data);
                setPerPage(newPerPage);
            })
            .catch(() => alert('Houve um erro'))
        setLoading(false);
    };

    async function handleAddItemToTable() {
        const produtos = [
            {
                produto_id,
                valor,
                valor_promocao
            }
        ]

        await priceItemService.create(
            companyQuery as string,
            tableId as string,
            produtos)
            .then(() => {
                setReloadData(Math.random())
                setIsOpen(false)
            })
            .catch(() => alert("Erro ao cadastrar produto"));
    }

    async function handleUpdateTableItem(itemId: string) {

        const produtos = {
            valor,
            valor_promocao
        }

        await priceItemService.update(
            companyQuery as string,
            tableId as string,
            produtos,
            itemId
        )
            .then(() => {
                setReloadData(Math.random())
                setOpen(false)
            })
            .catch(() => alert("Erro ao alterar"));
    }

    async function handleDeleteTableItem(itemId: string) {
        await priceItemService.delete(
            companyQuery as string,
            tableId as string,
            itemId
        )
            .then(() => {
                setReloadData(Math.random())
                setOpenModal(false)
            })
    }

    useEffect(() => {
        fetchPriceTablePerItems(1); // fetch page 1 of users

        if (companyQuery) {
            productsService.getAll(
                companyQuery as string,
                {}
            )
                .then((data) => {
                    setProduct(data.paginated_data);
                })
                .catch(() => alert('Houve um erro'))
        } else { }
    }, [companyQuery, reloadData]);

    const columns = [
        {
            name: 'produto',
            selector: row => row.produto,
            sortable: true,
        },
        {
            name: 'valor',
            selector: row => row.valor,
            sortable: true,
        },
        {
            name: 'valor promocional',
            selector: row => row.valor_promocao,
        },
        {
            name: 'Outros',
            selector: row => row.excluir_alterar,
        },
    ];

    const data = tablePerItem.map((item) => {
        return (
            {
                id: item.id,
                produto: item.produto.titulo.toUpperCase(),
                valor: item.valor.toFixed(2),
                valor_promocao: item.valor_promocao.toFixed(2),
                excluir_alterar:
                    <div className={styles.options}>
                        <button
                            onClick={() => {
                                setSelectedProductPrice(item)
                                setOpen(true)
                            }}>
                            <MdOutlineModeEditOutline />
                        </button>
                        <button
                            onClick={() => {
                                setSelectedProductPrice(item.id)
                                setOpenModal(true)
                            }}
                            className={styles.buttonDelete}>
                            <MdDeleteOutline />
                        </button>
                    </div>
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
                            onClick={() => router.push({ pathname: "admin-price-table", query: { companyQuery } })}>
                            <FiArrowLeft />
                        </button>
                        <h1 className={styles.section__h1}>Tipos de Ingressos </h1>
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
                            className={styles.dashboard__register_button}>
                            Adicionar novo Produto
                        </button>
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
                <div
                    className={styles.createPrice}>
                    <h3>Cadastrar nova novo produto</h3>
                    <p>Produtos:</p>
                    <select onChange={e => setProdutoId(e.target.value)}>
                        <option>Nenhum</option>
                        {product.map((produto) => {
                            return (
                                <option key={produto?.id} value={produto?.id}>{produto?.titulo}</option>
                            )
                        })}
                    </select>
                    <p>Valor:</p>
                    <input type="number" onChange={e => setValor(Number(e.target.value))} />
                    <p>Valor Promocional:</p>
                    <input type="number" onChange={e => setValorPromocao(Number(e.target.value))} />

                    <button
                        onClick={() => handleAddItemToTable()}>
                        Cadastrar
                    </button>
                </div>
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
                    className={styles.editPrice}>
                    <h3>Alterar preço</h3>
                    <p>Valor:</p>
                    <input type="number" defaultValue={selectedProductPrice?.valor} onChange={e => setValor(Number(e.target.value))} />
                    <p>Valor Promocional:</p>
                    <input type="number" defaultValue={selectedProductPrice?.valor_promocao} onChange={e => setValorPromocao(Number(e.target.value))} />

                    <button
                        onClick={() => handleUpdateTableItem(selectedProductPrice?.id)}>
                        Alterar
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
                    className={styles.excludeProduct}>
                    <p>Excluir?</p>
                    <div>
                        <button
                            onClick={() => {
                                handleDeleteTableItem(selectedProductPrice)
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