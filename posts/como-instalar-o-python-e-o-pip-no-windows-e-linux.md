---
title: 'Como Instalar o Python e o PIP no Windows e Linux'
subtitle: 'O jeito mais simples e fácil de ter o Python instalado no seu computador'
image: 'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
category: 'tutoriais'
date: '27/10/2023'
author: 'Luciano Zembruzki'
---

## Instalação Pyhton Windows

O processo de instalar o Python no Windows é bem simples, basta baixar o instalador do site Python.org.

Em seguida, execute o instalador baixado e siga as instruções na tela, não esqueça de marcar a opção **“Add Python to Path”** para adicionar o Python nas variáveis de ambiente do sistemas Operacional e Clicar na opçao **Install Now**.

Com isso, o interpretador do Python será instalado no PC.

Para verificar se a instalação ocorreu bem digite o comando:

```bash
python --version
```

Para verificar se a instalação do PIP ocorreu bem, digite o comando:

```bash
pip --version
```

## Como Instalar o Pyhton Linux

O python já vem instalado em muitas distribuições Linux, para acessá-lo basta seguir os passos:

Passo 1. Abra um terminal (use as teclas CTRL + ALT + T) e digite o comando:

```bash
which python3
```

Se trouxer um caminho para um diretório como apresentada em nossa vídeo aula, o python já esta instalado.  
O que pode ocorrer dependendo de sua versao / distribuição Linux é a versão do Python estar desatualizada, por isso, vamos aprender a atualizar a versão do Python Linux logo a seguir.

O processo de atualização do Python no Linux é simples e pode variar conforme a distribuição utilizada.

Passo 1. Se ainda não tiver, adicione o repositório do programa com este comando;

```bash
sudo add-apt-repository ppa:deadsnakes/ppa
```

Passo 2. Atualize o gerenciador de pacotes com o comando:

```bash
sudo apt-get update
```

Passo 3. Instale o Python, conforme a versão disponível, no caso vamos usar a última versão em 06/2021 a 3.9, para isso use este comando:

```bash
sudo apt-get install python3.9
```

## Instalação PiP no Python

Instale o pip, caso seja necessário, executando o seguinte comando:

```bash
sudo apt install python3-pip
```
