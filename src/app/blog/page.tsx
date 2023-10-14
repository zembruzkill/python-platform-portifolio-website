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
          <BlogList posts={posts} categories={categories}/>
        <Footer />
      </>
    );
  };
  };
