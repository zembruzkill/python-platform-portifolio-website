import CategoryButton from "./CategoryButton";

interface Post {
        slug: string;
        title: string;
        date: string;
        author: string;
        subtitle: string;
        image: string;
        category: string;
}

interface Props {
    all_posts: Post[];
    posts: Post[];
    categories: string[];
}

export default async function BlogList({all_posts, posts, categories}: Props) {

    return (
      <>
        <div className="mx-auto max-w-7xl items-center pt-6 mb-8">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white ">Nosso Blog</h2>
          <p className="text-zinc-200 sm:text-xl ">Explorando o Mundo da Programação Python: Dicas, Truques e Inspiração para Tornar seu Código Mais Poderoso.</p>
        </div> 
          <div className="container mx-auto 2xl:flex xl:flex lg:flex gap-4">
            <div className="2xl:w-2/3 xl:w-2/3 lg:w-2/3 mb-4">
            <ul className='space-y-4'>
              {posts.map(({ slug, title, date, author, subtitle, image, category}) => (
                <li className='sm:w-full' key={slug}>
                <a href={`/blog/post/${slug}`} className="flex flex-col items-center bg-[#11152C] text-white border border-[#CFCFCF] rounded-lg shadow lg:flex-row hover:bg-gray-100">
                  <img className="object-cover w-full rounded-t-lg lg:w-60 " src={image} alt=""></img>
                  <div className="flex flex-col justify-between leading-normal pl-4">
                    <div className="flex gap-2 pt-2">
                    {category.split(',').map((category_post) => (
                        <button
                        className="p-1 bg-blue-200 text-zinc-700 rounded text-title-xxsm uppercase text-center flex items-center justify-center"
                        >
                        {category_post}
                      </button>
                    ))}
                    </div>
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-300">{title}</h5>
                      <p className="font-light text-zinc-400 mt-1 mb-1">{subtitle}</p>
                      <div className='flex gap-2'>
                        <p className="font-extralight text-white ">{author}</p>
                        <p className="font-extralight text-white">--</p>
                        <p className="font-extralight text-white ">{date}</p>
                      </div>
                  </div>
                </a>
                </li>
                ))}
            </ul>
            </div>
            <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 h-full flex flex-col gap-1 sm:w-full">
              <p className='font-bold text-white'>Selecione uma categoria:</p>
              <div className="grid grid-cols-4 grid-rows-3 gap-1">
                <CategoryButton category={'todos'} index={1} href={'/blog/'}/>
                {categories.map((category, index) => (
                  <CategoryButton category={category} index={index} href={"/blog/category/" + category}/>
                ))}
              </div>
              <div className="border border-zinc-600 rounded-lg">
                <div className="flex justify-center -translate-y-[1px]">
                  <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
                  </div>
                </div>
                <div className="p-4">
                <p className="text-title-xxsm font-bold uppercase text-white">Destaques</p>
                  <div className="pt-4">
                    <ul className="space-y-2 text-white">
                      {all_posts.map(({ slug, title, date}, index) => (
                        <li className='' key={slug}>
                          <div className="flex gap-2">
                            <p>{index + 1}</p>
                            <div>
                              <a href={"/blog/post/" + slug} className=""> {title}</a>
                              <h4 className="font-extralight pt-2 text-title-xsm text-blue-300">{date}</h4>
                            </div> 
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };
