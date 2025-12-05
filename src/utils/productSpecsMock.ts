interface ProductSpec {
  label: string;
  value: string;
}

interface ProductDescription {
  main: string;
  features: string[];
}

interface CategorySpecs {
  specs: ProductSpec[];
  description: ProductDescription;
}

export const productSpecsByCategory: Record<string, CategorySpecs> = {
  COMPUTADORES: {
    specs: [
      { label: "Processador", value: "Intel Core i3-10300H" },
      { label: "Memória RAM", value: "8GB DDR4" },
      { label: "Armazenamento", value: "SSD 120GB PCIe" },
      { label: "Placa de Vídeo", value: "NVIDIA GeForce GTX 650 2GB" },
      { label: "Gabinete", value: "Gamer RGB com ventilação" },
      { label: "Fonte", value: "Certificada 500W" },
      { label: "Sistema Operacional", value: "Windows 11" },
      { label: "Garantia", value: "12 meses" },
    ],
    description: {
      main: "Computador Gamer Completo E Montado, Pronto Para Uso Imediato. Equipado Com Processador Intel Core I3-10300H, 8GB De Memória RAM DDR4, Armazenamento SSD PCIe De 120GB E Placa De Vídeo Dedicada NVIDIA GeForce GTX 650 Com 2GB. Gabinete Gamer Com Iluminação RGB, Fonte Certificada E Sistema De Refrigeração Otimizado. Perfeito Para Iniciantes No Mundo Gamer.",
      features: [
        "Processador Intel Core i3-10300H de alta performance",
        "8GB de memória RAM DDR4 para multitarefa eficiente",
        "SSD PCIe de 120GB para inicialização rápida",
        "Placa de vídeo NVIDIA GeForce GTX 650 com 2GB dedicados",
        "Gabinete gamer com iluminação RGB personalizável",
        "Sistema de refrigeração otimizado para máxima performance",
      ],
    },
  },
  NOTEBOOK: {
    specs: [
      { label: "Processador", value: "Intel Core i3-10300H" },
      { label: "Memória RAM", value: "8GB DDR4" },
      { label: "Armazenamento", value: "SSD 120GB PCIe" },
      { label: "Placa de Vídeo", value: "NVIDIA GeForce GTX 650 2GB" },
      { label: "Tela", value: "15.6 polegadas Full HD" },
      { label: "Bateria", value: "Li-Ion de longa duração" },
      { label: "Sistema Operacional", value: "Windows 11" },
      { label: "Garantia", value: "12 meses" },
    ],
    description: {
      main: "Notebook gamer ideal para iniciantes com processador Intel Core i3-10300H, 8GB de memória RAM, armazenamento SSD PCIe de 120GB e placa de vídeo NVIDIA GeForce GTX 650 com 2GB. Perfeito para jogos casuais, trabalho e estudos. Design moderno, teclado retroiluminado e sistema de refrigeração otimizado para longas sessões de uso.",
      features: [
        "Processador Intel Core i3-10300H de 10ª geração",
        "8GB de memória RAM DDR4 para desempenho fluido",
        "SSD PCIe de 120GB para armazenamento rápido",
        "Tela Full HD de 15.6 polegadas com excelente qualidade",
        "Placa de vídeo dedicada para jogos",
        "Design moderno e portátil para máxima mobilidade",
      ],
    },
  },
  MONITORES: {
    specs: [
      { label: "Tamanho", value: "21.5 polegadas" },
      { label: "Resolução", value: "HD 1366x768" },
      { label: "Taxa de Atualização", value: "60Hz" },
      { label: "Tempo de Resposta", value: "5ms" },
      { label: "Tipo de Painel", value: "TN" },
      { label: "Conexões", value: "VGA e HDMI" },
      { label: "Proteção", value: "Anti-luz azul" },
      { label: "Garantia", value: "12 meses" },
    ],
    description: {
      main: "Monitor perfeito para uso diário com tela HD de 21.5 polegadas e taxa de atualização de 60Hz. Ideal para trabalhos, estudos e navegação. Design moderno e slim, conexões VGA e HDMI inclusas. Economia de energia e proteção contra luz azul para maior conforto visual.",
      features: [
        "Tela HD de 21.5 polegadas com excelente qualidade",
        "Resolução HD para imagens nítidas",
        "Taxa de atualização de 60Hz para uso geral",
        "Conexões VGA e HDMI para máxima compatibilidade",
        "Proteção contra luz azul para conforto visual",
        "Design slim e moderno para qualquer ambiente",
      ],
    },
  },
  CADEIRAS: {
    specs: [
      { label: "Tipo", value: "Gamer Ergonômica" },
      { label: "Material", value: "Tecido Respirável" },
      { label: "Ajustes", value: "Altura, inclinação e braços" },
      { label: "Suporte Lombar", value: "Integrado" },
      { label: "Peso Suportado", value: "Até 120kg" },
      { label: "Rodízios", value: "5 rodízios 360°" },
      { label: "Reclinável", value: "Até 180 graus" },
      { label: "Garantia", value: "12 meses" },
    ],
    description: {
      main: "Cadeira gamer ergonômica revestida em tecido respirável de alta qualidade, projetada para oferecer máximo conforto durante longas sessões de jogos ou trabalho. Design moderno com ajuste de altura, encosto reclinável até 180°, apoio de braços fixos e rodízios de 360° para mobilidade total. Suporte lombar integrado e estrutura robusta que suporta até 120kg. Perfeita para quem busca conforto e estilo acessível.",
      features: [
        "Design ergonômico para máximo conforto",
        "Tecido respirável de alta qualidade",
        "Suporte lombar integrado para postura correta",
        "Múltiplos ajustes: altura, inclinação e braços",
        "Reclinável até 180 graus para descanso",
        "Rodízios 360° para mobilidade total",
      ],
    },
  },
  MOUSES: {
    specs: [
      { label: "Tipo", value: "Óptico com Fio" },
      { label: "DPI", value: "Até 16000 DPI ajustável" },
      { label: "Botões", value: "12 botões programáveis" },
      { label: "Iluminação", value: "RGB personalizável" },
      { label: "Taxa de Resposta", value: "1000Hz (1ms)" },
      { label: "Velocidade", value: "400 IPS" },
      { label: "Aceleração", value: "50G" },
      { label: "Garantia", value: "12 meses" },
    ],
    description: {
      main: "Mouse óptico com sensor de alta precisão ajustável até 16000 DPI, velocidade de rastreamento de 400 IPS e aceleração de 50G. Controle de 12 botões programáveis para macros e atalhos personalizados. Iluminação RGB com múltiplos modos de efeito, ajuste de peso personalizável, e design ambidestro para uso com mão esquerda ou direita. Superfície de contato PTFE para deslizamento suave. Ideal para jogos casuais e trabalho diário.",
      features: [
        "Sensor óptico de alta precisão até 16000 DPI",
        "12 botões programáveis para personalização",
        "Iluminação RGB com múltiplos efeitos",
        "Taxa de resposta de 1ms para jogos",
        "Design ambidestro para uso versátil",
        "Superfície PTFE para deslizamento suave",
      ],
    },
  },
  TECLADOS: {
    specs: [
      { label: "Tipo", value: "Mecânico" },
      { label: "Switch", value: "Blue (Clicky)" },
      { label: "Layout", value: "Full Size ABNT2" },
      { label: "Iluminação", value: "RGB 19 modos" },
      { label: "Anti-ghosting", value: "Full N-Key Rollover" },
      { label: "Teclas Multimídia", value: "12 teclas dedicadas" },
      { label: "Conexão", value: "USB" },
      { label: "Garantia", value: "12 meses" },
    ],
    description: {
      main: "Teclado mecânico gamer completo com switches mecânicos Blue (clicky) que oferecem feedback tátil e sonoro satisfatório. Layout full size com teclado numérico, 19 modos de iluminação RGB incluindo modo de personalização individual de teclas com 16.8 milhões de cores, e 12 teclas dedicadas para controle multimídia. Construção robusta em alumínio, teclas com keycaps ABS de alta qualidade, anti-ghosting N-key rollover, e design ergonômico com apoio de pulso removível. Perfeito para gamers e profissionais que buscam precisão e estilo.",
      features: [
        "Switches mecânicos Blue com feedback tátil e sonoro",
        "Layout Full Size ABNT2 brasileiro completo",
        "19 modos de iluminação RGB personalizáveis",
        "Anti-ghosting Full N-Key Rollover",
        "12 teclas multimídia dedicadas",
        "Construção robusta e durável",
      ],
    },
  },
  PROCESSADORES: {
    specs: [
      { label: "Modelo", value: "Intel Core i3-10300H" },
      { label: "Socket", value: "LGA 1200" },
      { label: "Núcleos", value: "4 núcleos" },
      { label: "Threads", value: "8 threads" },
      { label: "Frequência Base", value: "2.5 GHz" },
      { label: "Frequência Turbo", value: "Até 4.5 GHz" },
      { label: "Cache", value: "8MB L3" },
      { label: "Garantia", value: "36 meses" },
    ],
    description: {
      main: "Processador Intel Core i3-10300H de 10ª geração com arquitetura Comet Lake. Possui 4 núcleos físicos, 8 threads, frequência base de 2.5GHz que pode chegar até 4.5GHz em modo turbo, e cache L3 de 8MB. Socket LGA 1200, TDP de 45W e suporte a memória DDR4. Ideal para computadores de entrada, uso geral, multitarefa básica e jogos casuais. Performance confiável para trabalho e entretenimento.",
      features: [
        "4 núcleos e 8 threads para multitarefa",
        "Frequência turbo de até 4.5 GHz",
        "Arquitetura Comet Lake de 10ª geração",
        "Cache L3 de 8MB para desempenho otimizado",
        "TDP de 45W para eficiência energética",
        "Compatível com placas-mãe LGA 1200",
      ],
    },
  },
  "PLACAS-MÃE": {
    specs: [
      { label: "Socket", value: "AM4" },
      { label: "Chipset", value: "AMD A320" },
      { label: "Formato", value: "Micro-ATX" },
      { label: "Memória", value: "2x DDR4 até 3200MHz" },
      { label: "PCIe", value: "PCIe 3.0 x16" },
      { label: "SATA", value: "4 portas SATA 6Gb/s" },
      { label: "M.2", value: "Slot M.2 para SSD" },
      { label: "Garantia", value: "36 meses" },
    ],
    description: {
      main: "Placa-mãe Asus Prime A320M-A com chipset AMD A320 e socket AM4. Suporta processadores AMD Ryzen de 1ª, 2ª e 3ª geração. Formato micro-ATX compacto, 2 slots de memória DDR4 com suporte até 3200MHz, 4 portas SATA 6Gb/s, 1 slot PCIe 3.0 x16 para placa de vídeo, e conectores M.2 para SSD ultra-rápido. Áudio HD Realtek, rede Gigabit e USB 3.1. Ideal para montagens econômicas e eficientes.",
      features: [
        "Chipset AMD A320 com socket AM4",
        "Suporte a processadores AMD Ryzen",
        "2 slots DDR4 suportando até 3200MHz",
        "Slot M.2 para SSD ultra-rápido",
        "4 portas SATA 6Gb/s para armazenamento",
        "Formato Micro-ATX compacto",
      ],
    },
  },
  MEMÓRIAS: {
    specs: [
      { label: "Tipo", value: "DDR4" },
      { label: "Capacidade", value: "8GB (1x8GB)" },
      { label: "Frequência", value: "3200MHz" },
      { label: "Latência", value: "CL16" },
      { label: "Voltagem", value: "1.35V" },
      { label: "Formato", value: "DIMM 288-pin" },
      { label: "Dissipador", value: "Heat Spreader incluído" },
      { label: "Garantia", value: "Vitalícia" },
    ],
    description: {
      main: "Kit de memória DDR4 Kingston Fury Beast com 8GB de capacidade (1 módulo de 8GB), frequência de 3200MHz e latência CL16. Perfil XMP 2.0 para overclock automático, dissipador de calor preto com design agressivo, e compatibilidade garantida com as principais placas-mãe. Aumente o desempenho do seu computador com esta memória de alta performance, ideal para jogos, multitarefa e aplicações intensas. Garantia vitalícia Kingston.",
      features: [
        "8GB de capacidade DDR4",
        "Frequência de 3200MHz para alto desempenho",
        "Latência CL16 otimizada",
        "Perfil XMP 2.0 para overclock automático",
        "Heat spreader para melhor refrigeração",
        "Garantia vitalícia do fabricante",
      ],
    },
  },
};

export const getProductSpecsByCategory = (categoryName?: string): CategorySpecs => {
  if (!categoryName) {
    return productSpecsByCategory.COMPUTADORES;
  }

  const normalizedCategory = categoryName.trim().toUpperCase();
  return productSpecsByCategory[normalizedCategory] || productSpecsByCategory.COMPUTADORES;
};
