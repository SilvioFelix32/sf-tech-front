/* eslint-disable prettier/prettier */
import { QueryProductAvailabilityDto } from 'src/modules/products/dto/query-product-availability.dto';

export function queryFindProductAvailability(
  tenant: string,
  query: QueryProductAvailabilityDto,
): string {
  const { sku, title, subtitle, description, product_type, promotion } = query;

  const whereSku = sku ? ` AND p.sku = '${sku}' ` : '';
  const whereTitle = title ? ` AND p.titulo ILIKE '%${title}%' ` : '';
  const whereSubtitle = subtitle
    ? ` AND p.subtitle ILIKE '%${subtitle}%' `
    : '';
  const whereDescription = description
    ? ` AND p.description ILIKE '%${description}%' `
    : '';
  const whereProductType = product_type
    ? ` AND p.product_type = '${product_type}' `
    : '';
  const whereProotion = promotion ? ` AND p.promotion ` : '';

  const querySQL = `WITH 
            company AS (
            SELECT 
                e.id,
            FROM 
                companies e 
                INNER JOIN company_params pe ON pe.company_id = e.id     
            WHERE
                e.tenant = '${tenant}'
            ),
            
            products_exceptions AS (
            SELECT 
            cpe.product_id,
            cpe.action 
            FROM
                config_product_exeption cpe 
                INNER JOIN products p ON cpe.product_id = p.id 
                INNER JOIN company c ON p.company_id = c.id
            WHERE
                to_char( cpe.data , 'YYYY-MM-DD') = to_char( cl.data , 'YYYY-MM-DD')
            ),
            
            
            products AS (
            SELECT 
            p.id,
            p.company_id,
            p.sku,
            p.title,
            p.descrption,
            p.product_type,
            p.order_menu,
            p.promotion,
            p.combo,
            p.age_group,
            p.amount_max_total_diary,
            p.url_banner,
            tpp.value,
            tpp.value_promotion, 
            
            CASE 
                WHEN p.promotion THEN tpp.value_promotion 
                ELSE tpp.value 
            END value,
            
            FROM     
                produtos p     
                INNER JOIN company c ON p.empresa_id = c.id
                INNER JOIN calendar cl ON c.id = cl.empresa_id 
                INNER JOIN categorias_produtos cp ON p.categoria_produto_id = cp.id
                LEFT JOIN config_tipos_ingressos cti ON cp.config_tipo_id  = cti.id 
                INNER JOIN tabelas_precos_produtos tpp ON p.id = tpp.produto_id
                INNER JOIN tabelas_precos tp ON tpp.tabela_preco_id = tp.id 
                
                LEFT JOIN totais_produtos_vendidos tpv ON p.id = tpv.produto_id AND to_char( tpv.data , 'YYYY-MM-DD') = to_char(cl.data , 'YYYY-MM-DD') 
                LEFT JOIN products_exceptions pex ON pex.produto_id = p.id
        
                ${whereSku}
                ${whereTitle}
                ${whereSubtitle}
                ${whereDescription}
                ${whereProductType}
                ${whereProotion}

            )`;

  return querySQL;
}
