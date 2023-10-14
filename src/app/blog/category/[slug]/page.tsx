import { GetStaticProps } from 'next';

import  Header  from "../../../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import getPosts from "../../../../../lib/posts";
import { getUniqueCategories } from "../../../../../lib/posts";
import BlogList from '@/components/BlogList';

export default async function BlogCategory({ params }: { params: { slug: string } }) {  
        const decodedSlug = decodeURIComponent(params.slug);
        const posts = await getPosts();
        const categories = await getUniqueCategories();

        const category_posts = posts.filter(post => post.category.split(',').map((c: string) => c.trim()).includes(decodedSlug))

        return (
            <>
                <Header items={true}/>
                    <BlogList posts={category_posts} categories={categories}/>
                <Footer />
            </>
        );
    };
