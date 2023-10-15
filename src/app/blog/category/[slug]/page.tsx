import { GetStaticProps } from 'next';

import  Header  from "../../../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import getPosts from "../../../../../lib/posts";
import { getUniqueCategories } from "../../../../../lib/posts";
import BlogList from '@/components/BlogList';
import { redirect } from 'next/navigation';

export default async function BlogCategory({ params }: { params: { slug: string } }) {  
        const decodedSlug = decodeURIComponent(params.slug);
        const posts = await getPosts();
        const categories = await getUniqueCategories();

        const category_posts = posts.filter(post => post.category.split(',').map((c: string) => c.trim()).includes(decodedSlug))

        if (category_posts.length == 0) {
            redirect('/404');
            return null;
          }

        return (
            <>
                <Header items={true}/>
                    <BlogList all_posts={posts} posts={category_posts} categories={categories} />
                <Footer />
            </>
        );
    };
