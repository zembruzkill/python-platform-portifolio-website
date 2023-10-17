import React from 'react'
import { redirect } from 'next/navigation'

import Header  from "@/components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";

import ReactMarkdown from "react-markdown";
import remarkGfm from 'remark-gfm'

import getPosts from "../../../../../lib/posts";

export default async function Page({ params }: { params: { slug: string } }) {
  const posts = await getPosts();

  const post = posts.find(post => post.slug === params.slug);

  if (!post) {
    redirect('/404');
    return null;
  }

  return (
    <>
      <div className='bg-[#0D1224]'>
        <div className="bg-grid-background">
          <Header items={true}/>
            <div className=" text-white pt-16 pb-16 mx-auto max-w-7xl text-center">
              <div className="p-4 pt-12">
                <h1 className="text-title-xxl font-bold">{post?.title}</h1>
                <h3 className='text-title-md font-extralight mb-2 mt-2'>{post?.subtitle}</h3>
                <div className="gap-2">
                    <p className="font-light">{post?.author}</p>
                    <time className="font-extralight">{post?.date}</time>
                  </div>
              </div>
            </div>
          </div>
        </div>
                <div id="content" className="mx-auto max-w-7xl flex mb-12">
                  <div className="flex-1 mt-4">
                    <article className="prose prose-blue mx-auto mt-12 md:prose-lg max-w-none">
                      <ReactMarkdown remarkPlugins={[[remarkGfm]]}>
                        {post?.markdown}
                      </ReactMarkdown>
                    </article>
                  </div>
                  {/* <div className="w-1/4">
                    <p>Conteúdo da barra lateral</p>
                  </div> */}
                </div>
      <Footer />
    </>
  )

}