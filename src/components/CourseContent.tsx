import CourseContentModule from './CourseContentModule'

export default function CourseContent() {
    const module1 = {
        name: 'Módulo 1: Introdução ao Python',
        duration: '33m',
        classes: [
            {
                name: 'Aula 1: O que é Python',
                duration: '3m',
                type: 'video',
            },
            {
                name: 'Aula 2: Instalando Python',
                duration: '2m',
                type: 'video',
            },
            {
                name: 'Aula 3: Interpretador Python',
                duration: '4m',
                type: 'video',
            },
            {
                name: 'Aula 4: Editores de Código',
                duration: '3m',
                type: 'video',
            },
            {
                name: 'Aula 5: Seu Primeiro Programa em Python',
                duration: '5m',
                type: 'video',
            },
            {
                name: 'Aula 6: Extensões Python',
                duration: '2m',
                type: 'video',
            },
            {
                name: 'Aula 7: Verificando o Código Python (Linting)',
                duration: '3m',
                type: 'video',
            },
            {
                name: 'Aula 8: Formatação de Código Python',
                duration: '3m',
                type: 'video',
            },
            {
                name: 'Aula 9: Executando Código Python',
                duration: '4m',
                type: 'video',
            },
            {
                name: 'Aula 10: Implementações Python',
                duration: '3m',
                type: 'video',
            },
            {
                name: 'Aula 11: Como o Código Python é Executado',
                duration: '3m',
                type: 'video',
            },
            {
                name: 'Aula 12: Quiz (Questionário)',
                duration: '2m',
                type: 'video',
            },
            {
                name: 'Aula 13: Siga-me (Introdução ao Ambiente)',
                duration: '2m',
                type: 'editor',
            },
            {
                name: 'Aula 14: Caminhos de Aprendizado (Recursos para Aprendizado)',
                duration: '2m',
                type: 'editor',
            },
        ],
    }

    const module2 = {
        name: 'Módulo 2: Tipos Primitivos',
        duration: '35 minutos',
        classes: [
            { name: 'Aula 1: Variáveis', duration: '3 minutos', type: 'video' },
            {
                name: 'Aula 2: Nomes de Variáveis',
                duration: '2 minutos',
                type: 'video',
            },
            { name: 'Aula 3: Strings', duration: '4 minutos', type: 'video' },
            {
                name: 'Aula 4: Sequências de Escape em Strings',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 5: Strings Formatadas',
                duration: '2 minutos',
                type: 'video',
            },
            {
                name: 'Aula 6: Métodos de Strings',
                duration: '3 minutos',
                type: 'video',
            },
            { name: 'Aula 7: Números', duration: '4 minutos', type: 'video' },
            {
                name: 'Aula 8: Trabalhando com Números',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 9: Conversão de Tipos',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 10: Quiz (Questionário)',
                duration: '2 minutos',
                type: 'video',
            },
        ],
    }

    const module3 = {
        name: 'Módulo 3: Controle de Fluxo',
        duration: '39 minutos',
        classes: [
            {
                name: 'Aula 1: Operadores de Comparação',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 2: Declarações Condicionais',
                duration: '2 minutos',
                type: 'video',
            },
            {
                name: 'Aula 3: Operador Ternário',
                duration: '4 minutos',
                type: 'video',
            },
            {
                name: 'Aula 4: Operadores Lógicos',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 5: Avaliação de Curto-Circuito',
                duration: '5 minutos',
                type: 'video',
            },
            {
                name: 'Aula 6: Encadeando Operadores de Comparação',
                duration: '2 minutos',
                type: 'video',
            },
            {
                name: 'Aula 7: Quiz (Questionário)',
                duration: '2 minutos',
                type: 'video',
            },
            {
                name: 'Aula 8: Loops "for"',
                duration: '4 minutos',
                type: 'video',
            },
            {
                name: 'Aula 9: Loops "for..else"',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 10: Loops Aninhados',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 11: Iteráveis',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 12: Loops "while"',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 13: Loops Infinitos',
                duration: '2 minutos',
                type: 'video',
            },
            {
                name: 'Aula 14: Exercício',
                duration: '2 minutos',
                type: 'video',
            },
        ],
    }

    const module4 = {
        name: 'Módulo 4: Funções',
        duration: '41 minutos',
        classes: [
            {
                name: 'Aula 1: Definindo Funções',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 2: Argumentos de Funções',
                duration: '2 minutos',
                type: 'video',
            },
            {
                name: 'Aula 3: Tipos de Funções',
                duration: '4 minutos',
                type: 'video',
            },
            {
                name: 'Aula 4: Argumentos de Palavra-Chave',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 5: Argumentos Padrão',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 6: *args (Argumentos Variáveis)',
                duration: '2 minutos',
                type: 'video',
            },
            {
                name: 'Aula 7: **kwargs (Argumentos de Palavra-Chave Variáveis)',
                duration: '3 minutos',
                type: 'video',
            },
            { name: 'Aula 8: Escopo', duration: '3 minutos', type: 'video' },
            { name: 'Aula 9: Depuração', duration: '4 minutos', type: 'video' },
            {
                name: 'Aula 10: Truques de Codificação no VSCode (Windows)',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 11: Truques de Codificação no VSCode (Mac)',
                duration: '3 minutos',
                type: 'video',
            },
            {
                name: 'Aula 12: Exercício',
                duration: '2 minutos',
                type: 'video',
            },
            { name: 'Aula 13: Solução', duration: '2 minutos', type: 'video' },
            {
                name: 'Aula 14: Uma Nota Rápida',
                duration: '2 minutos',
                type: 'video',
            },
        ],
    }

    return (
        <>
            <div className="bg-[#0D1224] p-2">
                <div className="mx-auto max-w-6xl">
                    <div className="grid grid-cols-1 gap-8">
                        <div className="md:mx-4">
                            <div className="grid place-items-center w-12 h-12 rounded-full my-3 bg-green-500">
                                <div className="text-green-700 ">
                                    <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        height="25"
                                        width="25"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            stroke="none"
                                            d="M0 0h24v24H0z"
                                            fill="none"
                                        ></path>
                                        <path d="M3.5 5.5l1.5 1.5l2.5 -2.5"></path>
                                        <path d="M3.5 11.5l1.5 1.5l2.5 -2.5"></path>
                                        <path d="M3.5 17.5l1.5 1.5l2.5 -2.5"></path>
                                        <path d="M11 6l9 0"></path>
                                        <path d="M11 12l9 0"></path>
                                        <path d="M11 18l9 0"></path>
                                    </svg>
                                </div>
                            </div>
                            <span className="text-green-700  mb-3 inline-block font-medium md:font-semibold">
                                A perfeita estrutura do curso
                            </span>
                            <h2 className="text-3xl text-white">
                                Conteúdos do Curso
                            </h2>
                            <p className="text-zinc-300">
                                12 Horas . 13 Módulos. 200 Aulas
                            </p>
                            <div className="py-6 max-w-2xl">
                                <div className="mb-5"></div>
                                <CourseContentModule
                                    isListOpen={true}
                                    preview={true}
                                    module={module1}
                                />
                                <CourseContentModule
                                    isListOpen={false}
                                    preview={false}
                                    module={module2}
                                />
                                <CourseContentModule
                                    isListOpen={false}
                                    preview={false}
                                    module={module3}
                                />
                                <CourseContentModule
                                    isListOpen={false}
                                    preview={false}
                                    module={module4}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
