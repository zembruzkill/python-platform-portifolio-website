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
        <div className='bg-[#0D1224] pb-16'>
          <div className="bg-grid-background">
            <Header items={true}/>
              <BlogList all_posts={posts} posts={posts} categories={categories}/>
            <Footer />
          </div>
        </div>
      </>
    );
  };
