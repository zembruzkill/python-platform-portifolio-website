---
title: 'PyQt6 vs PySide6'
subtitle: 'Descubra de uma vez por todas qual a diferênça entre essas bibliotecas'
image: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697338989/Pyside6_refslr.png'
category: 'duvidas,dicas'
date: '15/10/2023'
author: 'Luciano Zembruzki'
---

## Qual é a diferença entre as duas bibliotecas Python Qt?

Neste post, explicarei exatamente as diferenças entre o PyQt e o Pyside que você precisa se importar (você realmente não precisa). No final, você deve se sentir confortável em reutilizar exemplos de código dos tutoriais PyQt5 e PySide2 e também PyQt6 e PySide6 para criar suas aplicações, independentemente de qual pacote você está usando.

Primeiramente, vamos separar algumas coisas pra se entender melhor. O Qt é um framework multiplataforma pra desenvolvimento de interfaces gráficas que foi criado em C++. Como ele foi criado utilizando a liguagem "C" precisamos de bibliotecas que permitam que a gente utilize o Qt no Python (que é o caso do PyQt e do Pyside).

O PyQt e o PySide são ambas bibliotecas que "fazem a ligação", e que permitem a criação de interfaces gráficas do Qt utilizando a linguagem Python.

### Mas porque tem duas bibliotecas?

PyQt foi desenvolvido por Phil Thompson da Riverbank Computing Ltd. e existe há muito tempo. Em 2009, a Nokia, que era dona do kit de ferramentas Qt na época, queria disponibilizar as "ligações" Python para Qt em uma licença LGPL mais permissiva. Incapaz de chegar a um acordo com Riverbank, eles lançaram suas própria "ligação" chamada _PySide_.

As duas interfaces eram comparáveis ​​no início, mas o desenvolvimento do PySide ficou para trás do PyQt. Isso foi particularmente perceptível após o lançamento do Qt 5 — a versão Qt5 do PyQt (PyQt5) estava disponível a partir de meados de 2016, enquanto a primeira versão estável do PySide2 foi 2 anos depois. É esse atraso que explica por que muitos exemplos do Qt 5 em Python usam PyQt5 em vez de PySide2 - não é necessariamente melhor, mas existia. **No entanto, o projeto Qt adotou recentemente o PySide como o lançamento oficial do Qt para Python, o que deve garantir sua viabilidade e aumentar sua popularidade daqui para frente.**

|                       | **PyQt**                 | **PySide** |
| --------------------- | ------------------------ | ---------- |
| **Desenvolvido por**  | Riverbank Computing Ltd. | Qt         |
| **Licença**           | GPL ou commercial        | LGPL       |
| **Versões do Python** | Python 3                 | Python 3   |

Qual você deve usar? Bem, honestamente, **isso realmente não importa**.

Ambos os pacotes estão envolvendo a mesma biblioteca Qt6 e, portanto, têm funcionalidades 99,9% idênticas. Qualquer coisa que você aprender com uma biblioteca será facilmente aplicada a um projeto usando a outra. Além disso, não importa qual você escolha usar, vale a pena se familiarizar com o outro para que você possa fazer o melhor uso de todos os recursos online disponíveis, usando tutoriais do PyQt6 para construir seus aplicativos PySide6, por exemplo, e vice-versa.

### Diferenças

Abaixo veremos algumas diferenças entre as bibliotecas.

#### Licença

##### A licença do **PyQ*t*** *é uma licença GPL ou comercial:* 

-   A GNU General Public License (GPL) é uma licença de software livre que garante aos usuários finais a liberdade de executar, estudar, compartilhar e modificar seu software. O principal mecanismo pelo qual isso é feito é garantindo que os usuários finais tenham acesso ao código-fonte dos aplicativos que recebem (como binários).
-   Se você está planejando lançar seu próprio software sob a GPL, ou está desenvolvendo software que não será distribuído , é improvável que o requisito GPL de PyQt6 seja um problema. No entanto, se você planeja distribuir seu software sem distribuir a fonte, você precisará comprar uma licença comercial da Riverbank para PyQt6 ou usar PySide6.
-   Resumindo, se você desenvolveu usando o PyQt6 e for vender o sistema que você desenvolveu: ou você deixa o código aberto (público) ou você compra a licença com a Riverbank.

##### _A licença do **PySide** é LGPL:_

-   A GNU Lesser General Public License (LGPL) é outra licença de software livre publicada pela Free Software Foundation (FSF). Esta licença é modelada na GPL, mas permite que os desenvolvedores usem componentes de software lançados sob a LGPL em seu próprio software, sem a necessidade de liberar seu código-fonte.
    A licença LGPL não exige que você compartilhe o código-fonte de seus próprios aplicativos, mesmo se eles estiverem incluídos no PySide6.
-   Resumindo, se você desenvolveu seu software com o PySide6, você pode vender o software sem precisar deixar seu código aberto e nem comprar licença.

Posso usar o PyQt para aplicações comerciais? Sim. A GPL não o impede de vender seu pacote de software, apenas exige que você compartilhe seu código-fonte com as pessoas que o compram (caso a pessoa solicite).

[![Banner do Curso PyQt6 e PySide6](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/banner-conheca-1024x576.png)](https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/)

### **Arquivos UI**

Outra grande diferença entre as duas bibliotecas está no manuseio de arquivos .ui exportados do Qt Creator/Designer. O PyQt6 fornece o submódulo _uic_ que pode ser usado para carregar arquivos de interface do usuário diretamente, para produzir um objeto.

```python
import sys
import sys
from PyQt6 import QtWidgets, uic

app = QtWidgets.QApplication(sys.argv)

w = uic.loadUi("mainwindow.ui")
w.show()

app.exec()
```

O equivalente com PySide6 é uma linha a mais, pois você precisa primeiro criar um objeto QUILoader. Infelizmente a API dessas duas interfaces também é diferente (.load vs .loadUI).

```python
import sys
from PySide6 import QtCore, QtGui, QtWidgets
from PySide6.QtUiTools import QUiLoader

loader = QUiLoader()

app = QtWidgets.QApplication(sys.argv)
window = loader.load("mainwindow.ui", None)
window.show()

app.exec()
```

### Convertendo aquivos UI para Python

Ambas as bibliotecas fornecem scripts idênticos para gerar módulos importáveis em _Python_ a partir de arquivos **QtDesigner** .ui. Para _PyQt6_, o script é denominado **"pyuic6**".

```bash
pyuic6 mainwindow.ui -o MainWindow.py
```

Para o PySide6 o script é chamado de "**pyside6-uic**".

```bash
pyside6-uic mainwindow.ui -o MainWindow.py
```

### Slots e Signals

A definição de slots e sinais personalizados usa uma sintaxe ligeiramente diferente entre as duas bibliotecas. O PySide6 fornece essa interface sob os nomes Signal e Slot, enquanto o PyQt6 os fornece como pyqtSignal e pyqtSlot, respectivamente. O comportamento de ambos é idêntico para definição e slots e sinais.

```python
my_custom_signal = pyqtSignal()  # PyQt6
my_custom_signal = Signal()  # PySide6

my_other_signal = pyqtSignal(int)  # PyQt6
my_other_signal = Signal(int)  # PySide6
```

Ou um slot

```python
@pyqtslot
def my_custom_slot():
    pass

@Slot
def my_custom_slot():
    pass
```

### QMouseEvent

No PyQt6, os objetos QMouseEvent não possuem mais os métodos de propriedade abreviada .pos(), .x() ou .y() para acessar a posição do evento. Você deve usar a propriedade .position() para obter um objeto QPoint e acessar os métodos .x() ou .y() nele. O método .position() também está disponível no PySide6.

### Resumo

Não há muito mais a dizer - as duas bibliotecas são realmente semelhantes. No entanto, se você se deparar com outros exemplos ou recursos do PyQt6/PySide6 que você não pode converter facilmente.

-   O que é exatamente igual? A maior parte
-   Qual você deve usar? Bem, honestamente, isso realmente não importa. Ambos os pacotes envolvem a mesma biblioteca - Qt6 - e portanto têm funcionalidades 99,9% identicas.
-   Tudo o que você aprender com uma biblioteca será facilmente aplicado a um projeto usando a outra.
-   Resumindo: Elas tem poucos detalhes de diferença (poucos mesmo). E tudo que tu faz em uma tu consegue fazer na outra.

Os motivos pelos quais eu particularmente prefiro o PySide6:

-   PySide se tornou a biblioteca oficial do Qt pro Python [https://www.qt.io/qt-for-python](https://www.qt.io/qt-for-python).
-   Questão do licenciamento

[![Banner do Curso PyQt6 e PySide6](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/banner-conheca-1024x576.png)](https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/)
