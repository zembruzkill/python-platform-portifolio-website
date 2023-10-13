'use client'

import  Header  from "../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import image from '@/assets/images/data_science.png'

import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import Image from 'next/image'
import Link from "next/link";

import { useState } from 'react'

export default function Courses() {

  const products = [
    {
      id: 1,
      name: 'Python para Iniciantes',
      imageSrc: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697163143/Python_para_Iniciantes_pflrov.png',
      imageAlt: "Python para Iniciantes.",
      href: '/courses/python-beginers',
      popularity: 5,
      level: 'Basico',
      categories: ['begginers', 'python programming'],
    },
    {
      id: 2,
      name: 'Python para Ciência de Dados',
      imageSrc: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697160269/Python_para_Cie%CC%82ncia_de_Dados_r7fooq.png',
      imageAlt: "Front of men's Basic Tee in black.",
      href: '/courses/python-data-science',
      popularity: 4,
      level: 'Avançado',
      categories: ['data science', 'python programming'],
    },
    {
      id: 3,
      name: 'Python para Ciência de Dados',
      imageSrc: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697160269/Python_para_Cie%CC%82ncia_de_Dados_r7fooq.png',
      imageAlt: "Front of men's Basic Tee in black.",
      href: '/courses/python-data-science',
      popularity: 3,
      level: 'Avançado',
      categories: ['data science', 'python programming'],
    },
    {
      id: 4,
      name: 'Python para Ciência de Dados',
      imageSrc: 'https://res.cloudinary.com/doorwkexf/image/upload/v1697160269/Python_para_Cie%CC%82ncia_de_Dados_r7fooq.png',
      imageAlt: "Front of men's Basic Tee in black.",
      href: '/courses/python-data-science',
      popularity: 5,
      level: 'Avançado',
      categories: ['data science'],
    },
  ]

  const [selectedLevel, setSelectedLevel] = useState('Todos');
  const [sortOrder, setSortOrder] = useState("popularidade");
  const [searchText, setSearchText] = useState('');
  const [filters, setFilters] = useState({
    todosCursos: true,
    iniciantes: false,
    programacaoPython: false,
    cienciaDeDados: false,
  });

  const handleLevelChange = (event: any) => {
    setFilters({ ...filters, todosCursos: false, iniciantes: false, programacaoPython: false, cienciaDeDados: false });
    setSelectedLevel(event.target.value);
  };

  const handleSearchChange = (e: any) => {
    setSearchText(e.target.value);
  };

  const toggleFilter = (filterKey: keyof typeof filters) => {
    console.log(filterKey);
    setSelectedLevel('!Todos');
    setFilters({ ...filters, [filterKey]: !filters[filterKey] });
  };

  let filteredProducts = products;

  filteredProducts = products.filter((product) => {
    if (filters.todosCursos) {
      return true;
    }
    if (filters.iniciantes && product.categories?.includes("begginers")) {
      return true;
    }
    if (filters.programacaoPython && product.categories?.includes("python programming")) {
      return true;
    }
    if (filters.cienciaDeDados && product.categories?.includes("data science")) {
      return true;
    }
    if (selectedLevel === 'Todos' || product.level.toLowerCase() === selectedLevel.toLowerCase()) {
      return true;
    }
    if (searchText.length > 0 && product.name.toLowerCase().includes(searchText.toLowerCase())) {
      return true;
    }
    return false;
  });

  const handleSortOrderChange = (e: any) => {
    const selectedSortOrder = e.target.value;
  
    if (selectedSortOrder === "popularidade") {
      filteredProducts.sort((a, b) => b.popularity - a.popularity);
    } else if (selectedSortOrder === "alfabeticamente") {
      filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
  
    setSortOrder(selectedSortOrder); // Definir o novo valor de sortOrder
  };

  return (
    <>
    <Header items={true}/>
    <header className='bg-white p-6'>
    <div className="mx-auto md:flex max-w-7xl justify-between lg:px-8 gap-2 sm:space-y-2 md:space-y-0 lg:space-y-0">
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
        <div id="filter" className="flex items-center lg:justify-end lg:gap-8 md:gap-4 sm:gap-2 w-full">
          <div className="flex items-center gap-2">
              <label className="block text-black">Ordenar</label>
              <select
                value={sortOrder}
                onChange={handleSortOrderChange}
                className="border border-[#CFCFCF] rounded text-sm font-bold"
              >
                <option value="popularidade">Popularidade</option>
                <option value="alfabeticamente">Alfabeticamente</option>
              </select>
          </div>
          <div className="flex items-center gap-2">
              <label className="block text-gray-900">Nível</label>
              <select
                value={selectedLevel}
                onChange={handleLevelChange}
                className="border border-[#CFCFCF] rounded text-sm font-bold"
              >
                <option value="Todos">Todos</option>
                <option value="Basico">Básico</option>
                <option value="Avançado">Avançado</option>
              </select>
          </div>
        </div>
      </div>
    </header>
    <div className="mx-auto flex justify-between bg-[#F0F3F6] lg:px-8 items-center">
      <div className="lg:flex md:flex h-screen p-8">
        {/* Menu Lateral Fixo */}
        <div className="w-1/4 bg-gray-800 p-4">
          <h3 className="font-bold">Filtros Rápidos</h3>
          <ul className="p-4">
        <li className="sm:flex">
          <label className="block text-black">
            <input
              type="checkbox"
              checked={filters.todosCursos}
              onChange={() => toggleFilter("todosCursos")}
              className="mr-2"
            />
            Todos os Cursos
          </label>
        </li>
        <li>
          <label className="block text-black">
            <input
              type="checkbox"
              checked={filters.iniciantes}
              onChange={() => toggleFilter("iniciantes")}
              className="mr-2"
            />
            Iniciantes
          </label>
        </li>
        <li>
          <label className="block text-black">
            <input
              type="checkbox"
              checked={filters.programacaoPython}
              onChange={() => toggleFilter("programacaoPython")}
              className="mr-2"
            />
            Programação Python
          </label>
        </li>
        <li>
          <label className="block text-black">
            <input
              type="checkbox"
              checked={filters.cienciaDeDados}
              onChange={() => toggleFilter("cienciaDeDados")}
              className="mr-2"
            />
            Ciência de Dados
          </label>
        </li>
      </ul>
        </div>
        {/* Área de Conteúdo */}
        <div className="w-3/4 h-screen">
          <div className="">
          <div className="mx-auto max-w-2xl px-4 py-4 sm:py-4 lg:max-w-7xl lg:px-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
              {filteredProducts.map((product) => (
                <div key={product.id} className="group relative">
                  <div className="w-full max-w-sm bg-white border border-[#CFCFCF] rounded-lg hover:shadow-[#666666] hover:shadow-6">
                    <Link href={product.href}>
                      <img className="w-full p-4" src={product.imageSrc} alt={product.imageAlt} />
                    </Link>
                    <div className="px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl font-semibold tracking-tight text-gray-900">{product.name}</h5>
                        </a>
                        <div className="flex items-center mt-2.5 mb-5">
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <svg className="w-4 h-4 text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                            </svg>
                            <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3">5.0</span>
                        </div>
                        <div className="flex mt-6 text-center text-black items-center">
                        <p>
                          <Link href={product.href} className="text-balck hover:text-indigo-600 pr-1">
                            Detalhes do curso
                          </Link>
                        </p>
                        <FaArrowRight href="/sign-in" size={20} color="rgb(79 70 229)" />
                      </div>
                    </div>
                </div>
                </div>
              ))}
              {!filteredProducts.length && <p className="text-center p-4">Ajuste os filtros para listar os cursos.</p>}
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    {/* <Footer /> */}
    </>
  )
}