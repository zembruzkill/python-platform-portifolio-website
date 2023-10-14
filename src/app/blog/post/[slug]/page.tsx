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
      <Header items={true}/>
      <div className=''>
        <div className="">
              <div className="">
                <div className="bg-[#1b2e57] text-white pt-16 pb-16">
                  <div className="mx-auto max-w-7xl items-center p-4 pt-12">
                    <h1 className="text-title-xxl font-bold">{post?.title}</h1>
                    <h3 className='text-title-md font-extralight mb-2 mt-2'>{post?.subtitle}</h3>
                    <div className="flex gap-2">
                        <p className="font-light tracking-winder ">{post?.author}</p>
                        <p>--</p>
                        <time className="font-extralight tracking-wider">{post?.date}</time>
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
          </div>
        </div>
      </div>
      <Footer />
    </>
  )

}