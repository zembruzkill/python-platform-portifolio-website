---
title: "Qt Designer"
subtitle: "Conheça essa ferramenta de criação de interfaces Python"
image: "https://res.cloudinary.com/doorwkexf/image/upload/v1697339184/QtDesigner_baupld.png"
category: "ferramentas"
date: "30/10/2023"
author: "Luciano Zembruzki"
---

## **Construa suas interfaces e componentes gráficos mais rápido**

Para criar suas interfaces no [PySide/PyQt](https://pythonsimplificado.com.br/2022/03/28/pyqt6-vs-pyside6/), você pode seguir dois caminhos principais: (_i_) você pode codificar manualmente a Interface em código Python ou (_ii_) usar o [Qt Designer](https://doc.qt.io/qt-6/qtdesigner-manual.html). O segundo caminho pode melhorar drasticamente sua produtividade, enquanto o primeiro caminho coloca você no controle total do código da sua aplicação.

Então, se você deseja criar interfaces e componentes gráficos de maneira eficiente e amigável, o Qt Designer é a ferramenta para você.

## **Começando com o Qt Designer**

O Qt Designer é uma [Qt](https://www.qt.io/) que fornece uma interface de usuário [WYSIWYG](https://en.wikipedia.org/wiki/WYSIWYG). Com esta ferramenta, você cria componentes gráficos arrastando e soltando [widgets](https://doc.qt.io/qt-5/qtwidgets-index.html) em um formulário vazio. Depois disso, você pode organizá-los em uma interface coerente usando diferentes gerenciadores de layout.

O Qt Designer também permite que você visualize suas interfaces e componentes usando diferentes estilos e resoluções, conecte sinais e slots, crie menus e barras de ferramentas e muito mais. O Qt Designer é independente de plataforma e linguagem de programação. Ele não produz código em nenhuma linguagem de programação específica, mas cria [arquivos (_.ui_)](https://doc.qt.io/qt-6/designer-ui-file-format.html).

Você pode traduzir o conteúdo de um arquivo _.ui_ em código Python com **pyuic6** para PyQt6 ou **pyside6-uic** para o PySide6, que é uma ferramenta de linha de comando que vem com o [PyQt6/PySide6](https://pythonsimplificado.com.br/2022/03/28/pyqt6-vs-pyside6/). Então você pode usar este código Python para construir suas aplicações com interface. Você também pode ler _.ui_ diretamente e carregar seu conteúdo para gerar a interface associada.

## **Instalando e executando o Qt Designer**

Existem várias maneiras de obter e instalar o Qt Designer dependendo da sua plataforma atual. Com o Python e o PIP instalados em seu computador você pode executar os seguintes comandos em seu terminal ou linha de comando:

para o PyQt6

```bash
pip install pyqt6 pyqt6-tools
```

para o PySide6:

```bash
pip install pyside6
```

[![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/banner-conheca-1024x576.png)](https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/)

Aqui, você instala o PyQt6 ou o PySide6 que juntamente com a biblioteca instala um conjunto de ferramentas Qt que inclui o Qt Designer.

A instalação colocará o executável do Qt Designer no mesmo diretório de instalacão da biblioteca, usualmente em:

- _.../python3.x/site-packages/PySide6/_

Outra opção é você baixar o instalador do Qt para sua plataforma atual no [site oficial de download](https://www.qt.io/download-qt-installer) e seguir as instruções na tela. Nesse caso, para concluir o processo de instalação, você precisa [registrar uma conta Qt](https://login.qt.io/register).

Se você já instalou o Qt Designer usando uma das opções discutidas até agora, vá em frente e inicie o aplicativo. Você deve obter as duas janelas a seguir em sua tela:

![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/qtdesigner-_-1024x640.png)

A janela em primeiro plano é a caixa de diálogo _New Form_ (Novo Formulário). A janela em segundo plano é a janela principal do Qt Designer.

Por padrão, quando você executa o Qt Designer, a caixa _Novo formulário_ aparece em primeiro plano. Caso contrário, você pode clicar em _Novo_ na barra de ferramentas do Qt Designer. Você também pode clicar em _Arquivo → Novo_ no menu principal ou pressionar Ctrl+N no teclado. Em _Novo formulário_ , você pode selecionar o modelo de formulário com o qual deseja iniciar e clicar em _Criar_ para gerar um novo formulário:

![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/create.gif)

Após criar o seu formulário você estará apto a construir sua interface ou componente arrastando e soltando os widgets disponíneis.

![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/widgets.gif)

Para aprender mais sobre QtDesigner e desenvolvimento de interfaces Python com PyQt6/PySide6 clique em saiba mais no card abaixo.

[![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/banner-conheca-1024x576.png)](https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/)
