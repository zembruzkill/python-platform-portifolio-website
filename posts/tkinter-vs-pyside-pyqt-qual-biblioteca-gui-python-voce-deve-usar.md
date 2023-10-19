---
title: 'Tkinter vs PySide/PyQt'
subtitle: 'Qual biblioteca GUI Python você deve usar?'
category: 'duvidas'
image: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697339708/tkinter-vs-pyside_uuveiq.png'
date: '04/11/2023'
author: 'Luciano Zembruzki'
---

## Comparando as bibliotecas de GUI do Python disponíveis em 2023

Python é uma linguagem de programação popular usada para tudo, desde tarefas de rotina de script até a construção de sites e a realização de análises complexas de dados. Embora você possa realizar muito com ferramentas de linha de comando, algumas tarefas são mais adequadas para interfaces gráficas. Você também pode querer construir um front-end de desktop para uma ferramenta existente para melhorar a usabilidade para usuários não técnicos.

Para criar interfaces gráficas de usuário com Python, você precisa de uma biblioteca GUI. Infelizmente, neste ponto as coisas ficam bem confusas pois existem muitas bibliotecas GUI diferentes disponíveis para Python, todas com diferentes capacidades e licenciamento. Qual biblioteca GUI Python você deve usar para o seu projeto?

Neste artigo, veremos uma seleção das estruturas de GUI Python mais populares atualmente disponíveis e por que você deve considerar usá-las em seus próprios projetos.

[![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/banner-conheca-1024x576.png)](https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/)

### PySide ou PyQt

**_Melhor para aplicações modernas desktop, multimídia, software científico e de engenharia_**

[PyQt e PySide](https://pythonsimplificado.com.br/2022/03/28/pyqt6-vs-pyside6/) são wrappers em torno do framework Qt. Eles permitem que você crie facilmente interfaces modernas que parecem em casa em qualquer plataforma, incluindo Windows, macOS, Linux e até Android. Eles também possuem ferramentas sólidas, sendo o mais notável o [Qt Designer](https://pythonsimplificado.com.br/2022/03/31/qt-designer/), que inclui um editor WYSIWYG para projetar interfaces GUI de maneira rápida e fácil. Ser apoiado por um projeto comercial significa que você encontrará muito suporte e recursos de aprendizado on-line para ajudá-lo a desenvolver seu aplicativo.

Qt (e por extensão PyQt & PySide) não é apenas uma biblioteca GUI, mas uma estrutura completa de desenvolvimento de aplicativos. Além dos elementos padrão da interface do usuário, como widgets e layouts, o Qt fornece visualizações orientadas a dados do tipo MVC (planilhas, tabelas), interfaces e modelos de banco de dados, plotagem de gráficos, visualização de gráficos vetoriais, reprodução de multimídia, efeitos sonoros e listas de reprodução e em interfaces para hardware, como impressão. Os modelos de sinais e slots Qt permitem que grandes aplicações sejam construídas a partir de componentes reutilizáveis ​​e isolados.

Enquanto outros kits de ferramentas podem funcionar muito bem ao construir ferramentas pequenas e simples, o Qt realmente se destaca na construção de aplicativos reais de qualidade comercial, onde você se beneficiará dos componentes pré-construídos. Isso vem à custa de uma ligeira curva de aprendizado. No entanto, para projetos menores, o Qt não é realmente mais complexo do que outras bibliotecas. Os aplicativos baseados em Qt Widgets usam widgets nativos da plataforma para garantir que pareçam e se sintam em casa em desktops Windows, macOS e Linux baseados em Qt.

![](https://pythonsimplificado.com.br/wp-content/uploads/2022/04/screen.png)

### Tkinter

**_Melhor para interfaces de ferramentas simples_**

Tkinter é a biblioteca GUI já incorporada no Python por padrão. Ele vem junto com o Python no Windows e no macOS. (No Linux, pode ser necessário baixar um pacote adicional do repositório de sua distribuição.) Tkinter é um wrapper escrito em torno do kit de ferramentas Tk GUI. Seu nome é uma amálgama das palavras _Tk_ e _Interface_.

Tkinter é uma biblioteca simples com suporte para layouts e widgets padrão, bem como widgets mais complexos, como visualizações com guias e barras de progresso. Tkinter é uma biblioteca GUI pura, não um framework. Não há suporte integrado para GUIs a partir de fontes de dados, bancos de dados ou para exibir ou manipular multimídia ou hardware. O Tkinter é multiplataforma, mas os widgets podem parecer desatualizados, principalmente no Windows.

![](https://pythonsimplificado.com.br/wp-content/uploads/2022/09/Python-tkinter-registration-multi.png)

### Resumo

#### Porque não usar o Tkinter

-   Tkinter não inclui widgets avançados.

-   Não possui ferramenta semelhante ao Qt Designer para Tkinter.

-   Não tem uma aparência nativa

-   Aparência ultrapassada

#### Porque usar o PySide/PyQt

-   Flexibilidade de codificação – a programação GUI com Qt é projetada em torno do conceito de sinais e slots para estabelecer comunicação entre objetos. Isso permite flexibilidade ao lidar com eventos de GUI e resulta em uma base de código mais suave.

-   Mais do que uma estrutura – o Qt usa uma ampla variedade de APIs de plataforma nativa para fins de rede, criação de banco de dados e muito mais. Ele oferece acesso primário a eles por meio de uma API exclusiva.

-   Vários componentes de interface do usuário – o Qt oferece vários widgets, como botões ou menus, todos projetados com uma aparência básica em todas as plataformas suportadas.  
     Vários recursos de aprendizado – como o PyQt é uma das estruturas de interface do usuário mais usadas para Python, você pode obter acesso fácil a uma ampla variedade de documentação.

[![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/banner-conheca-1024x576.png)](https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/)
