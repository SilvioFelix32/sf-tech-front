import React, { FormEvent, useEffect, useState } from "react"
import { AdministrationSideBar } from "../components/SideBars";
import { productsPricesService } from "../../services/price-table-service";
import { useRouter } from "next/router";
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Modal as ModalRegister } from 'react-responsive-modal';
import { Modal as ModalEdit } from 'react-responsive-modal';
import { Modal as ModalDelete } from 'react-responsive-modal';
import { MdDeleteOutline, MdEditNote } from "react-icons/md";
import { FaBars } from "react-icons/fa";
import { FiArrowLeft } from "react-icons/fi";
import { format } from "date-fns";

import styles from "../styles/AdminPriceTable.module.scss"

export default function PriceTable() {
    const { query: { companyQuery } } = useRouter()
    const router = useRouter()
    const [reloadData, setReloadData] = useState(0);
    const [selectedTable, setSelectedTable] = useState(null);
    //get e datatable
    const [tableItem, setTableItem] = useState([]);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    //modal e swich
    const [openModalDelete, setOpenModalDelete] = useState(false)
    const [openModalRegister, setOpenModalRegister] = useState(false)
    const [openModalEdit, setOpenModalEdit] = useState(false)
    const [isToggled, setIsToggled] = useState(false)
    //dados
    const [descricao, setDescricao] = useState('')
    const [data_inicial, setDataInicial] = useState('')
    const [data_final, setDataFinal] = useState('')

    useEffect(() => {
        if (companyQuery) {
            productsPricesService.getAll(companyQuery as string, {
                page: 1,
                limit: perPage,
            })
                .then((data) => {
                    setTableItem(data.paginated_data);
                    setTotalRows(data.total_count);
                })
        } else () => router.push('dashboard')
    }, [reloadData, companyQuery]);

    async function handleSubmitNewTable(event: FormEvent) {
        event.preventDefault();

        const data = {
            descricao,
            data_inicial,
            data_final,
        }

        await productsPricesService.create(companyQuery as string, data)
            .then(() => {
                setReloadData(Math.random())
                setOpenModalRegister(false)
            })
            .catch((err) => alert("Erro ao cadastrar Data"));
    }

    async function handleUpdateTable(productId: string) {
        const data = {
            descricao: descricao || selectedTable?.descricao,
            data_inicial: data_inicial || selectedTable?.data_inicial,
            data_final: data_final || selectedTable?.data_final,
        }

        await productsPricesService.update(companyQuery as string, productId, data)
            .then(() => {
                setReloadData(Math.random())
                setOpenModalEdit(false)
            })
            .catch(() => alert("Erro ao cadastrar Data"));
    }

    async function handleDeleteTableId(TableId: string) {
        await productsPricesService.delete(companyQuery as string, TableId)
            .then(() => {
                setReloadData(Math.random())
                setOpenModalDelete(false)
            })
    }

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
                            onClick={() => setOpenModalRegister(true)}
                            className={styles.dashboard__register_button}>
                            Cadastrar nova tabela de preços
                        </button>
                    </div>

                    <div className={styles.tableContent}>
                        {tableItem.map((tablePrice) => {
                            return (
                                <div key={tablePrice.id} className={styles.container}>
                                    <div className={styles.card__container}>
                                        <div className={styles.card}>
                                            <div className={styles.card__content}>
                                                <div className={styles.section}>
                                                    <h3 className={styles.card__header}>{tablePrice.descricao}</h3>
                                                    <button
                                                        className={styles.card__buttonEdit}
                                                        onClick={() => {
                                                            setSelectedTable(tablePrice)
                                                            setOpenModalEdit(true)
                                                        }}>
                                                        <MdEditNote />
                                                    </button>
                                                </div>
                                                <p className={styles.card__info}>
                                                    {format(new Date(tablePrice.data_inicial), 'dd/MM/yyyy') || ''}
                                                    -
                                                    {format(new Date(tablePrice.data_final), 'dd/MM/yyyy') || ''}
                                                </p>
                                                <div className={styles.section}>
                                                    <button
                                                        onClick={() => {
                                                            router.push({ pathname: 'admin-price-item', query: { companyQuery: companyQuery, tableId: tablePrice.id } })
                                                        }}
                                                        className={styles.card__button}
                                                    >Alterar itens da tabela
                                                    </button>
                                                    <button
                                                        className={styles.card__buttonDelete}
                                                        onClick={() => {
                                                            setSelectedTable(tablePrice.id)
                                                            setOpenModalDelete(true)
                                                        }}>
                                                        <MdDeleteOutline />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <Footer />
            <ModalRegister
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModal
                }}
                open={openModalRegister}
                onClose={() => {
                    setOpenModalRegister(false)
                }}
                center>
                <form
                    onSubmit={handleSubmitNewTable}
                    className={styles.createPrice}>
                    <h3>Cadastrar nova tabela de preço</h3>
                    <p>Descrição:</p>
                    <input type="text" onChange={e => setDescricao(e.target.value)} />
                    <p>Disponibilidade venda data inicial:</p>
                    <input type="date" onChange={e => setDataInicial(e.target.value)} />
                    <p>Disponibilidade venda data final:</p>
                    <input type="date" onChange={e => setDataFinal(e.target.value)} />
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </ModalRegister>
            <ModalEdit
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModal
                }}
                open={openModalEdit}
                onClose={() => {
                    setOpenModalEdit(false)
                }}
                center>
                <div
                    className={styles.createPrice}>
                    <h3>Alterar tabela de preços</h3>
                    <p>Descrição:</p>
                    <input type="text" defaultValue={selectedTable?.descricao} onChange={e => setDescricao(e.target.value)} />
                    <p>Disponibilidade venda data inicial:</p>
                    <input type="date" defaultValue={selectedTable?.data_inicial} onChange={e => setDataInicial(e.target.value)} />
                    <p>Disponibilidade venda data final:</p>
                    <input type="date" defaultValue={selectedTable?.data_final} onChange={e => setDataFinal(e.target.value)} />
                    <button
                        onClick={() => handleUpdateTable(selectedTable?.id)}>
                        Alterar
                    </button>
                </div>
            </ModalEdit>
            <ModalDelete
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModalDelete
                }}
                open={openModalDelete}
                onClose={() => setOpenModalDelete(false)}
                center>
                <div
                    className={styles.customModalDelete__div}>
                    <p>Excluir?</p>
                    <div className={styles.customModalDelete__div_options}>
                        <button
                            onClick={() => {
                                handleDeleteTableId(selectedTable)
                            }}>
                            Confirmar
                        </button>
                        <button
                            onClick={() => setOpenModalDelete(false)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </ModalDelete>
        </div >
    )
}