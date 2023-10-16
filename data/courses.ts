const courses = [
  {
    id: 1,
    name: 'Python para Iniciantes',
    imageSrc: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697163143/Python_para_Iniciantes_pflrov.png',
    imageAlt: 'Python para Iniciantes.',
    href: '/courses/python-beginners',
    popularity: 5,
    level: 'Básico',
    categories: ['iniciantes', 'programação em Python'],
    description: 'Quer ver se programar é para você? Esta é a mini faixa perfeita! Aprenda o básico do Python conosco.',
    lectures: {
      modules: [
        {
          module_id: '2z7ramxejw',
          name: 'Bem-vindo ao curso',
          is_public: true,
          total_duration: '00:15:00',
          classes: [
            {
              class_id: '2z7ramxej3st76dd',
              is_public: true,
              liberation_days: 0,
              liberation_type: 'by_days',
              name: 'Introdução ao curso',
              page_order: 1,
              duration: '00:05:00',
              href: 'https://player.vimeo.com/video/873550054?autoplay=1',
              type: 'video'
            },
            {
              class_id: '5z7ramxqj3st76dd',
              is_public: true,
              liberation_days: 0,
              liberation_type: 'by_days',
              name: 'Instalação do Python',
              page_order: 2,
              duration: '00:05:00',
              href: 'https://player.vimeo.com/video/76979871?autoplay=1',
              type: 'video'
            },
            {
              class_id: '2z7ram6ej4sa76dd',
              is_public: true,
              liberation_days: 0,
              liberation_type: 'by_days',
              name: 'Instalação do VSCode',
              page_order: 3,
              duration: '00:05:00',
              href: 'https://player.vimeo.com/video/76979871?autoplay=1',
              type: 'video'
            },
          ],
        },
        {
          module_id: '2z7ramxejq',
          is_public: false,
          name: 'Python básico',
          total_duration: '00:15:00',
          classes: [
            {
              class_id: '2z7ram6ej4ds6ed',
              is_public: false,
              liberation_days: 0,
              liberation_type: 'by_days',
              name: 'Hello World',
              page_order: 1,
              duration: '00:05:00',
              href: 'https://player.vimeo.com/video/76979871?autoplay=1',
              type: 'video',
            },
          ],
        },
        {
          module_id: "3z7ramxejq",
          name: "Estruturas de Controle",
          is_public: true,
          total_duration: "00:20:00",
          classes: [
              {
                  class_id: "7z7ram6ej4ds6ed",
                  is_public: true,
                  liberation_days: 0,
                  liberation_type: "by_days",
                  name: "Estruturas Condicionais",
                  page_order: 1,
                  duration: "00:10:00",
                  href: "https://player.vimeo.com/video/23456789?autoplay=1",
                  type: "video"
              },
              {
                  class_id: "8z7ram6ej4ds6ed",
                  is_public: true,
                  liberation_days: 0,
                  liberation_type: "by_days",
                  name: "Estruturas de Repetição",
                  page_order: 2,
                  duration: "00:10:00",
                  href: "https://player.vimeo.com/video/34567890?autoplay=1",
                  type: "video"
              }
          ]
      }
      ],
    },
  },
  {
    id: 2,
    name: 'Python para Ciência de Dados',
    imageSrc: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697160269/Python_para_Ciencia_de_Dados_r7fooq.png',
    imageAlt: 'Frente da camiseta básica masculina em preto.',
    href: '/courses/python-data-science',
    popularity: 4,
    level: 'Avançado',
    categories: ['ciência de dados', 'programação em Python'],
    description: 'Já se perguntou o que você precisa fazer para começar a analisar dados em Python? Então, esta mini faixa é a resposta...',
  },
  {
    id: 3,
    name: 'Python com Interface Gráfica - QtDesigner e Qt6/PySide6',
    imageSrc: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697173347/Design_Python_bl1xow.png',
    imageAlt: 'Banner do Curso Criando Aplicações Python com Interface Gráfica utilizando o QtDesigner e Qt6/PySide6.',
    href: 'https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/',
    popularity: 3,
    level: 'Avançado',
    categories: ['ciência de dados', 'programação em Python'],
    description: 'Pare de procurar como criar aplicações Python com interface — está tudo aqui...',
  },
];

export default courses;
