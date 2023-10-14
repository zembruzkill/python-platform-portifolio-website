import { GetStaticProps } from 'next';

import  Header  from "../../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import getPosts from "../../../lib/posts";
import Link from "next/link";

export default async function Blog() {  

    const posts = await getPosts();

    return (
      <>
        <Header items={true}/>
        <div className="mx-auto max-w-6xl items-center p-4 lg:px-8 pt-6 bg-blue-300">
          <div className="min-h-screen">
            <h1 className="h-32">Blog</h1>
            <ul>
              {posts.map(({ slug, title }) => (
                <li key={slug}>
                  <Link href={`/blog/post/${slug}`}>
                    <p>{title}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </>
    );
  };
