export type CartItemType = {
    id: number;
    sku: string,
    titulo: string,
    subtitulo: string,
    descricao: string,
    tipo_produto: string,
    ordem_menu: number,
    promocao: boolean,
    combo: boolean,
    faixa_etaria: string,
    qtde_max_total_diario: number,
    url_capa: string,
    valor: number,
    valor_promocao: number,
    valor_venda: number,
    qtde_venda_diaria: number,
    qtde_acessos: number,
    amount?: number;
}

