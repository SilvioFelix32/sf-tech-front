import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  //--- empresa
  const company = await prisma.empresa.upsert({
    where: { realm: 'aguas_correntes' },
    update: {},
    create: {
      realm: 'aguas_correntes',
      cnpj: '24673980000151',
      client_key: 'vaEv0QXrbCOPDqPetto88kqRmwHlC9oD',
      public_key:
        'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAmXZN2VYN8LvXQSm2+xys01jNehhV6UPs1LxHSNqMxw57dFW8S5JHNvL1boArIcea48WNuXk328woljIB13SlzMGcYpgxOnqWfQvuAOd/mIQlfx8xH0YE6tKVCDOK11GbtkVvPyBSs75aVATUkWcxLYLkPGYlXnYXUx2zbhtsRiWYfsOJoI1xzPL4cvcFzI87rGoaAzofV97qFxzYflDDLarCeqtX6Stmlj6OqJgmdNRnjR2fbSN9Qlzjno9+0t4+bgBN1oVFDpTWR0IgRPs0oSnNyADLQMSDBUKe4HkFhQZqBeYfd5+XN6OFApodHzm4wSRO5JjWvmbKDTcqHWKAcQIDAQAB',
      nome: 'AGUAS CORRENTES',
      nome_fantasia: 'AGUAS CORRENTES',
      telefone1: '1640420027',
      telefone2: '1640420022',
      email: 'comercial@unisystemtec.com.br',
      cep: '13560648',
      estado: 'SP',
      cidade: 'São Carlos',
      endereco: 'Rua Conde do Pinhal',
      endereco_numero: '899',
      endereco_complemento: 'Prox. SESC',
      ativo: true,
      url_capa: '',

      params: {
        create: {
          ambiente: 'HOMOLOGACAO',
          integracao_cartao_credito: 'CIELO',
        },
      },

      config_tipo_ingresso: {
        create: {
          id: 'abd85f78-60ae-47f1-bcd4-225919968353',
          modo_definicao_tempo_validade: 'SOMENTE_DIA_VENDA',
          descricao: 'INGRESSO VÁLIDO SOMENTE DIA VENDA ',
          qtde_pessoas: 1,
        },
      },

      categoria_produto: {
        create: {
          id: '42110607-cbae-4884-9f1a-5345b5faa8d8',
          config_tipo_id: 'abd85f78-60ae-47f1-bcd4-225919968353',
          tipo_produto: 'INGRESSO',
          titulo: 'INGRESSO DAY USE',
          descricao: 'INGRESSOS para serem utilizados apenas no dia da venda',
          url_capa: null,
          ativo: true,
        },
      },

      produtos: {
        createMany: {
          data: [
            {
              id: '571c125b-d665-49c3-826c-b9117614a47a',
              categoria_produto_id: '42110607-cbae-4884-9f1a-5345b5faa8d8',
              tipo_produto: 'INGRESSO',
              sku: '1',
              titulo: 'Ingresso Adulto',
              subtitulo: 'Valido as sextas, sábados, domingos e feriados',
              descricao: 'Valido as sextas, sábados, domingos e feriados',
              url_capa: null,
              ativo: true,
              combo: false,
              qtde_min_venda: 1,
              qtde_max_venda: 5,
              qtde_max_total_diario: 50,
              disponibilidade_dias_semana: [0, 1, 6, 7],
              venda_individual: false,
              em_destaque: true,
              ordem_menu: 0,
              a_venda: true,
              faixa_etaria: 'LIVRE',
              promocao: false,
            },

            {
              id: '46329ab9-63ee-4edd-a73f-e00821f8f4c3',
              categoria_produto_id: '42110607-cbae-4884-9f1a-5345b5faa8d8',
              tipo_produto: 'INGRESSO',
              sku: '2',
              titulo: 'Ingresso Infantil - Day Use',
              subtitulo: 'Valido as sextas, sábados, domingos e feriados',
              descricao: 'Valido as sextas, sábados, domingos e feriados',
              url_capa: null,
              ativo: true,
              combo: false,
              qtde_min_venda: 1,
              qtde_max_venda: 5,
              qtde_max_total_diario: 50,
              disponibilidade_dias_semana: [0, 1, 6, 7],
              venda_individual: false,
              em_destaque: true,
              ordem_menu: 0,
              a_venda: true,
              faixa_etaria: 'LIVRE',
              promocao: false,
            },

            {
              id: 'ea8f897e-2ab2-4189-899a-13dde57bd5fb',
              categoria_produto_id: '42110607-cbae-4884-9f1a-5345b5faa8d8',
              tipo_produto: 'INGRESSO',
              sku: '3',
              titulo: 'Ingresso Melhor Idade - Day Use',
              subtitulo: 'Valido as sextas, sábados, domingos e feriados',
              descricao: 'Valido as sextas, sábados, domingos e feriados',
              url_capa: null,
              ativo: true,
              combo: false,
              qtde_min_venda: 1,
              qtde_max_venda: 5,
              qtde_max_total_diario: 50,
              disponibilidade_dias_semana: [0, 1, 6, 7],
              venda_individual: false,
              em_destaque: true,
              ordem_menu: 0,
              a_venda: true,
              faixa_etaria: 'LIVRE',
              promocao: false,
            },

            {
              id: '582713a3-9c18-4626-84bd-abbf8644308c',
              categoria_produto_id: '42110607-cbae-4884-9f1a-5345b5faa8d8',
              tipo_produto: 'INGRESSO',
              sku: '5',
              titulo: 'Combo - Day Use',
              subtitulo: 'Valido as sextas, sábados, domingos e feriados',
              descricao: 'Valido as sextas, sábados, domingos e feriados',

              ativo: true,
              combo: false,
              qtde_min_venda: 1,
              qtde_max_venda: 5,
              qtde_max_total_diario: 50,
              disponibilidade_dias_semana: [0, 1, 6, 7],
              venda_individual: false,
              em_destaque: true,
              ordem_menu: 0,
              a_venda: true,
              faixa_etaria: 'LIVRE',
              promocao: false,
            },
          ],
        },
      },

      usuarios: {
        create: {
          id: '0b6f4401-5ae4-4611-a116-12e3d28ca853',
          documento: '159753',
          nome: 'user01',
          sobrenome: '01',
          email: 'user@user.com.br',
          ativo: true,
          email_confirmado: true,
        },
      },
    },
  });

  const prices = await prisma.tabelaPreco.create({
    data: {
      empresa_id: company.id,
      descricao: 'Tabela ano 2022',
      data_inicial: new Date(),
      data_final: new Date(2022, 11, 31),
      produtos: {
        createMany: {
          data: [
            {
              produto_id: '582713a3-9c18-4626-84bd-abbf8644308c',
              valor: 100.98,
              valor_promocao: 92.25,
            },

            {
              produto_id: '571c125b-d665-49c3-826c-b9117614a47a',
              valor: 45.95,
              valor_promocao: 30,
            },

            {
              produto_id: '46329ab9-63ee-4edd-a73f-e00821f8f4c3',
              valor: 25.63,
              valor_promocao: 22.65,
            },

            {
              produto_id: 'ea8f897e-2ab2-4189-899a-13dde57bd5fb',
              valor: 30.22,
              valor_promocao: 27.65,
            },
          ],
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
