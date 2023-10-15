---
title: "Licenças - PySide e PyQt"
subtitle: "Descubra de uma vez por todas qual a diferênça entre o licenciamento dessas bibliotecas"
image: "https://res.cloudinary.com/doorwkexf/image/upload/v1697340080/licenca-pyside_dgoiwj.png"
category: "duvidas"
date: "28/10/2023"
author: "Luciano Zembruzki"
---

## Tudo o que você precisa saber sobre LGPL e GPL para suas aplicações PySide ou PyQt

O PyQt foi desenvolvido por Phil Thompson da [Riverbank Computing Ltd.](https://www.riverbankcomputing.com/software/pyqt/intro) suportando versões do Qt desde o 2.x sob uma licença GPL. Em 2009, os desenvolvedores do Qt queriam ter ligações Python para Qt disponíveis sob a licença LGPL (como o próprio Qt) e então começaram a desenvolver o PySide.

Ambos os pacotes estão envolvendo a mesma biblioteca (o Qt) e, portanto, compartilham 99,9% de sua funcinalidade. Mas há uma grande diferença: _**licenciamento**_.

|                       | **PyQt**                 | **PySide** |
| --------------------- | ------------------------ | ---------- |
| **Desenvolvido por**  | Riverbank Computing Ltd. | Qt         |
| **Licença**           | GPL ou commercial        | LGPL       |
| **Versões do Python** | Python 3                 | Python 3   |

É um tópico confuso, então não é surpreendente que ele componha a grande maioria das perguntas sobre PySide e PyQt. Neste pequeno artigo, analisarei as perguntas e equívocos mais comuns sobre licenciamento LGPL versus GPL e o que isso significa para seus aplicativos.

[![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/banner-conheca-1024x576.png)](https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/)

## **O que é o GPL?**

A GNU _General Public License_ (GPL) é uma licença de software livre que garante aos usuários finais a liberdade de executar, estudar, compartilhar e modificar seu software. O principal mecanismo pelo qual ele faz isso é garantir que os usuários finais tenham acesso ao código-fonte dos aplicativos que recebem (como binários).

Se você planeja lançar seu próprio software sob a GPL, ou está desenvolvendo software que não será _distribuído_, é improvável que o requisito GPL do PyQt seja um problema. No entanto, se você planeja distribuir seu software sem distribuir a fonte, precisará comprar uma licença comercial da Riverbank para PyQt ou optar por usar o PySide.

## **O que é a LGPL**

A GNU _Lesser General Public License_ (LGPL) é outra licença de software livre publicada pela Free Software Foundation (FSF). Esta licença é modelada na GPL, mas permite que os desenvolvedores usem componentes de software lançados sob a LGPL em seu próprio software, sem a necessidade de liberar seu código-fonte.

A licença LGPL _não_ exige que você compartilhe o código-fonte de suas aplicações, mesmo que estejam empacotados com o PySide.

A LGPL exige que você distribua quaisquer alterações feitas no próprio código-fonte do PySide, mas a menos que você esteja fazendo algo muito estranho, você não fará isso ao criar interfaces Python.

## **Posso usar o PyQt para aplicativos comerciais?**

**Sim**. Existe um mal-entendido comum de que você _não pode_ usar software licenciado GPL em aplicativos comerciais. Este não é o caso. A GPL não impede que você venda seu pacote de software, apenas exige que você compartilhe seu código-fonte com as pessoas que o compram.

Se você usa o PyQt e _não_ deseja liberar seu código-fonte para os clientes, precisará da _licença comercial do Riverbank_.

## **Posso usar o PySide para aplicativos comerciais?**

**Sim**, e você **_não_** precisa liberar seu código-fonte para os clientes. A LGPL exige apenas que você libere quaisquer alterações feitas no próprio PySide.

## **Por que alguém compraria meu software PyQt se eu estivesse distribuindo o código-fonte?**

Conveniência. Se você fornecer instaladores empacotados para venda, a grande maioria das pessoas desejará usá-los em vez de lidar com a execução/empacotamento do software a partir da fonte. Isso vale mesmo que seu público-alvo sejam programadores: sério, a maioria das pessoas tem coisas melhores para fazer com seu tempo.

Novamente, observe que a GPL _apenas_ que você disponibilize o código-fonte para as pessoas que recebem a versão binária. Se você está vendendo seu software, isso significa que você só precisa fornecer a fonte para as pessoas que compraram o aplicativo. Muitas empresas que fornecem software GPL fornecem a fonte para todos, mas isso não é um requisito da GPL. É apenas mais fácil.

## **Mas minha aplicação contém um código que não posso compartilhar!!! O que fazer então?**

Se sua aplicação depende de um código que absolutamente não deve ser acessível a seus usuários, mantenha-o em um servidor que você controle e forneça uma API para ser usada por seu aplicativo. A GPL usada pelo PyQt não impõe restrições a isso. Isso também permite que você controle o licenciamento/acesso aos recursos do seu aplicativo, para serviços do tipo assinatura, se desejar.

Esteja ciente, porém, de que isso pode ser incrivelmente irritante para os usuários, que podem querer usar seu software offline ou apenas ter uma internet ruim. Pense muito se seu código é valioso o suficiente para ser protegido dessa maneira. Provavelmente não é. Concentre seu tempo na criação de software pelo qual as pessoas _querem_ pagar.

## **Existem outras razões para obter uma licença?**

Tanto o Riverbank quanto o Qt oferecem suporte aos desenvolvedores que compram suas licenças.

## **Comecei a usar a biblioteca errada? E agora!?**

Você pode facilmente migrar do PyQt para o PySide e _vice-versa_. Dê uma olh[ada no post de comparação do PyQt e PySide](https://pythonsimplificado.com.br/2022/03/28/pyqt6-vs-pyside6/).

## **Qual devo usar?**

Depende muito de você. As duas questões-chave para mais projetos são

- Qual é o problema de distribuir o código-fonte da aplicação?
- Deseja comprar uma licença (ou obter suporte pago)?
- Para a aplicação que você está construindo, você consegue encontrar bons tutoriais/exemplos na biblioteca que está usando?

O último _geralmente_ meu conselho seria familiarizar-se o mais rápido possível com as diferenças para que você possa converter qualquer código que encontrar entre uma biblioteca e outra.

## **Mais uma vez para as pessoas na parte de trás**

Os pontos-chave novamente

- PyQt5 é licenciado pela GPL, PySide2 é licenciado pela LGPL.
- Ambas as licenças não têm efeito sobre se você pode vender seu software comercialmente. Você pode _vender_ software licenciado GPL e software licenciado LGPL.
- Ambas as licenças _podem_ exigir que você compartilhe o código-fonte em circunstâncias específicas, mas é muito improvável que a LGPL se aplique a um projeto Python.

Para aplicações criadas com PyQt (GPL), se você distribuir o software, também deverá disponibilizar o código-fonte do seu software para os usuários (_isso não significa torná-lo disponível publicamente, você pode enviá-lo mediante solicitação_).

Para aplicações criadas com PySide (LGPL), se você distribuir o software, não será necessário compartilhar a origem do aplicativo com os usuários. A única situação em que você _precisa_ compartilhar a fonte ao modificar a fonte da própria biblioteca LGPL (PySide). Você normalmente não fará isso ao construir aplicações Python.

[![](https://pythonsimplificado.com.br/wp-content/uploads/2022/03/banner-conheca-1024x576.png)](https://pythonsimplificado.com.br/curso-criando-aplicacoes-com-qtdesigner-e-pyside6/)
