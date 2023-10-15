import { GetStaticProps } from 'next';

import  Header  from "../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import BlogList from '@/components/BlogList';

import getPosts from "../../../lib/posts";
import { getUniqueCategories } from "../../../lib/posts";
import Link from "next/link";

export default async function Blog() {  

    const posts = await getPosts();
    const categories = await getUniqueCategories();


    return (
      <>
        <Header items={true}/>
        <div className="mx-auto max-w-7xl items-center pt-6 mb-8">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-[#182646]">Nosso Blog</h2>
            <p className="text-zinc-600 sm:text-xl ">Explorando o Mundo da Programação Python: Dicas, Truques e Inspiração para Tornar seu Código Mais Poderoso.</p>
          </div> 
          <BlogList all_posts={posts} posts={posts} categories={categories}/>
        </div>
        <Footer />
      </>
    );
  };
