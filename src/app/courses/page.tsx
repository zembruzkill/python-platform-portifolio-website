'use client'

import Header from '../../components/layout/headers/Header'
import Footer from '@/components/layout/footers/Footer'

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6'

import Link from 'next/link'

import { useState } from 'react'

import courses from '../../../data/courses'

export default function Courses() {
    const [selectedLevel, setSelectedLevel] = useState('Todos')
    const [sortOrder, setSortOrder] = useState('popularidade')
    const [searchText, setSearchText] = useState('')
    const [filters, setFilters] = useState({
        todosCursos: true,
        iniciantes: false,
        programacaoPython: false,
        cienciaDeDados: false,
    })

    const handleLevelChange = (event: any) => {
        setFilters({
            ...filters,
            todosCursos: false,
            iniciantes: false,
            programacaoPython: false,
            cienciaDeDados: false,
        })
        setSelectedLevel(event.target.value)
    }

    const handleSearchChange = (e: any) => {
        setSearchText(e.target.value)
    }

    const toggleFilter = (filterKey: keyof typeof filters) => {
        console.log(filterKey)
        setSelectedLevel('!Todos')
        setFilters({ ...filters, [filterKey]: !filters[filterKey] })
    }

    let filteredProducts = courses

    filteredProducts = courses.filter((product) => {
        if (filters.todosCursos) {
            return true
        }
        if (filters.iniciantes && product.categories?.includes('begginers')) {
            return true
        }
        if (
            filters.programacaoPython &&
            product.categories?.includes('python programming')
        ) {
            return true
        }
        if (
            filters.cienciaDeDados &&
            product.categories?.includes('data science')
        ) {
            return true
        }
        if (
            selectedLevel === 'Todos' ||
            product.level.toLowerCase() === selectedLevel.toLowerCase()
        ) {
            return true
        }
        if (
            searchText.length > 0 &&
            product.name.toLowerCase().includes(searchText.toLowerCase())
        ) {
            return true
        }
        return false
    })

    const handleSortOrderChange = (e: any) => {
        const selectedSortOrder = e.target.value

        if (selectedSortOrder === 'popularidade') {
            filteredProducts.sort((a, b) => b.popularity - a.popularity)
        } else if (selectedSortOrder === 'alfabeticamente') {
            filteredProducts.sort((a, b) => a.name.localeCompare(b.name))
        }

        setSortOrder(selectedSortOrder) // Definir o novo valor de sortOrder
    }

    return (
        <>
            <div className="bg-[#0D1224]">
                <div className="bg-grid-background">
                    <Header items={true} />
                    <header className="bg-white p-6">
                        <div className="mx-auto md:flex max-w-7xl justify-between lg:px-8 gap-2 space-y-2 2xl:space-y-0 xl:space-y-0 lg:space-y-0 md:space-y-0">
                            <div className="flex items-center gap-2 w-full">
                                <label className="block">Pesquisar</label>
                                <input
                                    type="text"
                                    className="flex-grow text-sm border h-10 border-[#CFCFCF] rounded focus:ring-blue-500 focus:border-blue-500 block p-2.5"
                                    placeholder="Pesquisar por cursos"
                                    value={searchText}
                                    onChange={handleSearchChange}
                                />
                            </div>
                            <div
                                id="filter"
                                className="flex items-center justify-end lg:gap-8 md:gap-4 sm:gap-2 w-full"
                            >
                                <div className="flex items-center gap-2">
                                    <label className="text-black">
                                        Ordenar
                                    </label>
                                    <select
                                        value={sortOrder}
                                        onChange={handleSortOrderChange}
                                        className="border border-[#CFCFCF] rounded text-sm font-bold"
                                    >
                                        <option value="popularidade">
                                            Popularidade
                                        </option>
                                        <option value="alfabeticamente">
                                            Alfabeticamente
                                        </option>
                                    </select>
                                </div>
                                <div className="flex items-center gap-2">
                                    <label className="text-gray-900">
                                        Nível
                                    </label>
                                    <select
                                        value={selectedLevel}
                                        onChange={handleLevelChange}
                                        className="border border-[#CFCFCF] rounded text-sm font-bold"
                                    >
                                        <option value="Todos">Todos</option>
                                        <option value="Basico">Básico</option>
                                        <option value="Avançado">
                                            Avançado
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </header>
                    <div className="mx-auto lg:flex md:flex h-full p-8 bg-[#F1F3F6] sticky top">
                        {/* Menu Lateral Fixo */}
                        <div className="w-1/5 min-w-75">
                            <h3 className="font-bold">Filtros Rápidos</h3>
                            <ul className="p-4">
                                <li className="sm:flex">
                                    <label className="block text-black">
                                        <input
                                            type="checkbox"
                                            checked={filters.todosCursos}
                                            onChange={() =>
                                                toggleFilter('todosCursos')
                                            }
                                            className="mr-2 rounded"
                                        />
                                        Todos os Cursos
                                    </label>
                                </li>
                                <li>
                                    <label className="block text-black">
                                        <input
                                            type="checkbox"
                                            checked={filters.iniciantes}
                                            onChange={() =>
                                                toggleFilter('iniciantes')
                                            }
                                            className="mr-2 rounded"
                                        />
                                        Iniciantes
                                    </label>
                                </li>
                                <li>
                                    <label className="block text-black">
                                        <input
                                            type="checkbox"
                                            checked={filters.programacaoPython}
                                            onChange={() =>
                                                toggleFilter(
                                                    'programacaoPython'
                                                )
                                            }
                                            className="mr-2 rounded"
                                        />
                                        Programação Python
                                    </label>
                                </li>
                                <li>
                                    <label className="block text-black">
                                        <input
                                            type="checkbox"
                                            checked={filters.cienciaDeDados}
                                            onChange={() =>
                                                toggleFilter('cienciaDeDados')
                                            }
                                            className="mr-2 rounded"
                                        />
                                        Ciência de Dados
                                    </label>
                                </li>
                            </ul>
                        </div>
                        {/* Área de Conteúdo */}
                        <div id="main" className="w-full">
                            <div className="grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-x-8">
                                {filteredProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="group relative"
                                    >
                                        <div className="w-full max-w-sm bg-white border border-[#CFCFCF] rounded-lg hover:shadow-[#666666] hover:shadow-6">
                                            <Link href={product.href}>
                                                <img
                                                    className="w-full p-4 rounded-lg"
                                                    src={product.imageSrc}
                                                    alt={product.imageAlt}
                                                />
                                            </Link>
                                            <div className="px-4 pb-4">
                                                <div className="flex items-center mb-2">
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300 mr-1"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300 mr-1"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300 mr-1"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 h-4 text-yellow-300 mr-1"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <svg
                                                        className="w-4 h-4 text-gray-200"
                                                        aria-hidden="true"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="currentColor"
                                                        viewBox="0 0 22 20"
                                                    >
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">
                                                        5.0
                                                    </span>
                                                </div>
                                                <a href={product.href}>
                                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900">
                                                        {product.name}
                                                    </h5>
                                                </a>
                                                <p className="mt-2 text-gray-500 text-sm text-justify">
                                                    {product.description}
                                                </p>
                                                <div className="flex mt-6 text-center text-black items-center">
                                                    <p>
                                                        <Link
                                                            href={product.href}
                                                            className="text-balck hover:text-indigo-600 pr-1"
                                                        >
                                                            Detalhes do curso
                                                        </Link>
                                                    </p>
                                                    <FaArrowRight
                                                        href="/sign-in"
                                                        size={20}
                                                        color="rgb(79 70 229)"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                                {!filteredProducts.length && (
                                    <h2 className="text-center p-4 font-bold">
                                        Ajuste os filtros para listar os cursos.
                                    </h2>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
