
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
    posts: Post[];
    categories: string[];
}

export default async function BlogList({posts, categories}: Props) {  

    return (
      <>
        <div className="mx-auto max-w-7xl items-center pt-6 mb-8">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-zinc-900 ">Nosso Blog</h2>
          <p className="text-zinc-600 sm:text-xl ">Usamos uma abordagem ágil para testar suposições e nos conectar com as necessidades do seu público desde o início e com frequência.</p>
        </div> 
          <div className="container mx-auto 2xl:flex xl:flex lg:flex gap-4">
            <div className="w-2/3">
            <ul className='space-y-4'>
              {posts.map(({ slug, title, date, author, subtitle, image, category}) => (
                <li className='' key={slug}>
                <a href={`/blog/post/${slug}`} className="flex flex-col items-center bg-white border border-[#CFCFCF] rounded-lg shadow md:flex-row hover:bg-gray-100">
                  <img className="object-cover w-full rounded-t-lg lg:w-60 " src={image} alt=""></img>
                  <div className="flex flex-col justify-between leading-normal pl-4">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">{title}</h5>
                      <p className="font-light text-gray-700 mt-1 mb-1">{subtitle}</p>
                      <div className='flex gap-2'>
                        <p className="font-extralight text-gray-700 ">{author}</p>
                        <p className="font-extralight">--</p>
                        <p className="font-extralight text-gray-700 ">{date}</p>
                      </div>
                  </div>
                </a>
                </li>
                ))}
            </ul>
            </div>
            <div className="2xl:w-1/3 xl:w-1/3 lg:w-1/3 h-full flex flex-col gap-1 sm:w-full">
              <p className='font-bold'>Selecione uma categoria:</p>
              <div className="grid grid-cols-4 grid-rows-3 gap-1">
                <a
                    href={`/blog/`}
                    className="p-1 bg-zinc-200 text-zinc-700 rounded hover:bg-zinc-300 text-title-xxsm uppercase text-center"
                  >
                    TODOS
                  </a>
                {categories.map((category, index) => (
                  <a
                    href={`/blog/category/${category}`}
                    key={index}
                    className="p-1 bg-zinc-200 text-zinc-700 rounded hover:bg-zinc-300 text-title-xxsm uppercase text-center"
                  >
                    {category}
                  </a>
                ))}
              </div>
              <div className="border border-[#CFCFCF] rounded-lg p-4">
                  <p className="text-title-xxsm font-bold uppercase">Destaques</p>
                  <div className="pt-4">
                    <ul className="space-y-2">
                      {posts.map(({ slug, title, date}, index) => (
                        <li className='' key={slug}>
                          <div className="flex gap-2">
                            <p>{index + 1}</p>
                            <div>
                              <h3 className=""> {title}</h3>
                              <h4 className="font-extralight pt-2 text-title-xsm">{date}</h4>
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
      </>
    );
  };
