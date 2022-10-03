import React, { useEffect, useState } from "react"
import { useRouter } from "next/router";
import Image from 'next/image'
//services
import { productsService } from "../../services/products-service";
//components
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { AdministrationSideBar } from "../components/SideBars";
import { Modal as ModalDelete } from 'react-responsive-modal';
import { Modal as ModalOptions } from 'react-responsive-modal';
import { ModalRegistration } from "../components/ModalAdminProducts/modalRegister";
import { ModalCombos } from "../components/ModalAdminProducts/modalCombo";
import { ModalEdition } from "../components/ModalAdminProducts/modalEdit";
import { ModalImgUpload } from "../components/ModalAdminProducts/modalUpload";
//imported libs
import { MdDeleteOutline, MdImageSearch, MdOutlineModeEditOutline } from "react-icons/md";
import { Switch } from "@mui/material";
import { FaBars } from "react-icons/fa";
import DataTable from "react-data-table-component";
//styles
import styles from "../styles/AdminProducts.module.scss"
import customStyles from "../styles/customStyles";

export default function Administration() {
    const { query: { companyQuery } } = useRouter()
    const router = useRouter()
    const [reloadData, setReloadData] = useState(0);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [productSelectedById, setProductSelectedById] = useState(null);
    //Data table states and paginator
    const [products, setProducts] = useState([]);
    const [carregando, setLoading] = useState(false);
    const [totalRows, setTotalRows] = useState(0);
    const [perPage, setPerPage] = useState(10);
    const [isToggled, setIsToggled] = useState(false) //SideBar
    const [checked, setChecked] = React.useState(false); //switch
    //Modals
    const [openModal, setOpenModal] = useState(false)
    const [onOpenModal, setOnOpenModal] = useState(false)
    const [openUploadModal, setOpenUploadModal] = useState(false)
    const [openModalCombo, setOpenModalCombo] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [open, setOpen] = useState(false)
    //Products - data
    const [ativo, setAtivo] = useState(true);

    async function fetchProducts(page: any) {
        if (companyQuery) {
            setLoading(true);

            await productsService.getAll(companyQuery as string, {
                page: page,
                limit: perPage,
            })
                .then((data) => {
                    setProducts(data.paginated_data);
                    setTotalRows(data.total_count);
                })
                .catch(() => alert('Algo deu errado'))
            setLoading(false);
        } else {
            alert('Houve algum erro')
            router.push('/')
        }
    };

    async function fetchOneProduct(productId: string) {
        if (companyQuery) {
            await productsService.getById(companyQuery as string, productId)
                .then((data) => setProductSelectedById(data))
                .catch(() => alert('Houve algum erro 2'))
        } else {
            alert('Houve algum erro 3')
            router.push('/')
        }
    };

    function handlePageChange(page: any) {
        fetchProducts(page);
    };

    async function handlePerRowsChange(newPerPage: any, page: any) {
        setLoading(true);

        await productsService.getAll(companyQuery as string, {
            page: page,
            limit: newPerPage,
        })
            .then((data) => {
                setProducts(data.paginated_data);
                setTotalRows(data.total_count);
            })
            .catch(() => alert('houve um erro 222'))
        setLoading(false);
    };

    useEffect(() => {
        fetchProducts(1); // fetch page 1 of users
    }, [reloadData]);

    async function handleChangeAvaliabilty(event: React.ChangeEvent<HTMLInputElement>, ProductId: string) {
        setChecked(event.target.checked);
        setAtivo(oldValue => !oldValue)
        setSelectedProduct((oldValue) => ({ ...oldValue, ativo: event.target.checked }))

        const newValue = {
            ativo
        }
        await productsService.update(companyQuery as string, ProductId, newValue)
            .then(() => setReloadData(Math.random()))
            .catch(() => alert("Houve um problema"))
    };

    async function handleDeleteProduct(ProductId: string) {
        productsService.delete(companyQuery as string, ProductId)
            .then(() => {
                setReloadData(Math.random())
                setOpenModal(false)
            })
    }

    //Dados da tabela
    const columns = [
        {
            name: 'sku',
            selector: row => row.sku,
            sortable: true,
        },
        {
            name: 'titulo',
            selector: row => row.titulo,
            sortable: true,
        },
        {
            name: ' url de capa',
            selector: row => row.url,
        },
        {
            name: 'combo',
            selector: row => row.combo,
            sortable: true,
        },
        {
            name: 'em destaque',
            selector: row => row.destaque,
            sortable: true,
        },
        {
            name: 'a venda',
            selector: row => row.venda,
            sortable: true,
        },
        {
            name: 'ativa',
            selector: row => row.ativo,
        },
        {
            name: 'adicionar imagem',
            selector: row => row.imagem,
        },
        {
            name: 'outros',
            selector: row => row.excluir_alterar,
        },
    ];

    const data = products.map((produto) => {
        return (
            {
                id: produto.id,
                sku: produto.sku,
                titulo: produto.titulo,
                url: <Image
                    className={styles.image}
                    src={`/api/imageproxy?url=${encodeURIComponent(produto?.url_capa)}`}
                    alt={produto?.titulo} width="120" height="80" layout='fixed' />,
                combo: produto.combo ? 'Sim' : 'Não',
                destaque: produto.em_destaque ? 'Sim' : 'Não',
                venda: produto.a_venda ? 'Sim' : 'Não',
                ativo:
                    <Switch
                        checked={produto?.ativo}
                        onChange={(event) => handleChangeAvaliabilty(event, produto?.id)}
                        inputProps={{ 'aria-label': 'controlled' }} />,

                imagem:
                    <div className={styles.options}>
                        <button type="button"
                            onClick={() => {
                                setSelectedProduct(produto.id)
                                setOpenUploadModal(true)
                            }}
                            className={styles.buttonDelete}>
                            <MdImageSearch />
                        </button>
                    </div>,
                excluir_alterar:
                    <div className={styles.options}>
                        <button type="button"
                            onClick={() => {
                                setOnOpenModal(true)
                                fetchOneProduct(produto.id)
                            }}
                            className={styles.buttonDelete}>
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
                        <h1 className={styles.section__h1}>Administração</h1>
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
                            className={styles.dashboard__register_buttons}>Cadastrar novo Produto
                        </button>
                        <button
                            onClick={() => setOpenModalCombo(true)}
                            className={styles.dashboard__register_buttons}>Criar um combo
                        </button>
                    </div>
                    <DataTable
                        columns={columns}
                        data={data}
                        progressPending={carregando}
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
            <ModalRegistration isOpen={isOpen} setIsOpen={setIsOpen} setReloadData={setReloadData} />
            <ModalCombos openModalCombo={openModalCombo} setOpenModalCombo={setOpenModalCombo} setReloadData={setReloadData} />
            <ModalEdition open={open} setOpen={setOpen} selectedProduct={selectedProduct} setReloadData={setReloadData} />
            <ModalImgUpload openUploadModal={openUploadModal} setOpenUploadModal={setOpenUploadModal} />
            <ModalDelete
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModal
                }}
                open={openModal}
                onClose={() => setOpenModal(false)}
                center>
                <div
                    className={styles.customModal__Wrapper}>
                    <p>Excluir tipo de Produto?:</p>
                    <div className={styles.customModal__Wrapper_div}>
                        <button
                            onClick={() => {
                                handleDeleteProduct(selectedProduct)
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
            <ModalOptions
                classNames={{
                    overlay: styles.customOverlay,
                    modal: styles.customModal
                }}
                open={onOpenModal}
                onClose={() => setOnOpenModal(false)}
                center>
                <div
                    className={styles.customModal__Wrapper}>
                    <p>Alterar esse Produto?:</p>
                    <div className={styles.customModal__Wrapper_div}>
                        <button
                            onClick={() => {
                                setOpen(true)
                                setSelectedProduct(productSelectedById)
                                setOnOpenModal(false)
                            }}>
                            Confirmar
                        </button>
                        <button
                            onClick={() => setOnOpenModal(false)}>
                            Cancelar
                        </button>
                    </div>
                </div>
            </ModalOptions>
        </div >
    )
}