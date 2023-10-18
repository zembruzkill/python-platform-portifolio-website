export default function Iam() {

  return (
    <>
        <div className="container mx-auto pt-12">
        <section className="flex flex-col">
          <header className="text-center">
            <p className="font-medium my-4 text-violet-500 text-sm tracking-widest uppercase">Olá,</p>
            <h2 className=" text-white text-3xl">Eu sou o Professor Luciano.</h2>
          </header>
          <div className="flex flex-col items-center text-zinc-100">
            <p className="pl-2 pr-2 text-zinc-400 mb-10 text-center max-w-[50ch] text-lg lg:text-xl lg:leading-8">Você está se sentindo preso ou sobrecarregado em sua jornada para aprender programação? Não se preocupe, eu te protejo! Juntos, trabalharemos para aprimorar suas habilidades, aumentar seu potencial de ganhos e construir um futuro melhor.</p>
            <div className="max-w-[725px] mx-auto px-3 w-full">
              <video src="" poster="https://res.cloudinary.com/doorwkexf/image/upload/v1697512674/poster-video_ppjc9o.webp"></video>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4 justify-center mx-auto my-20">
              <div className="shadow-2xl shadow-gray-50 border border-zinc-600 rounded-md relative bg-[#11152C]">
                <div className="flex justify-center -translate-y-[1px]">
                  <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center p-8">
                  <p className="font-bold mb-2 text-violet-500 text-2xl md:text-3xl lg:text-4xl">10M+</p>
                  <p className="mb-0 leading-5 text-sm lg:text-base">Students taught</p>
                </div>
              </div>
              <div className="shadow-2xl shadow-gray-50 border border-zinc-600 rounded-md relative bg-[#11152C]">
                <div className="flex justify-center -translate-y-[1px]">
                  <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-green-600 to-transparent  w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center p-8">
                  <p className="font-bold mb-2 text-green-600 text-2xl md:text-3xl lg:text-4xl">3M+</p>
                  <p className="mb-0 leading-5 text-sm lg:text-base">YouTube fans</p>
                </div>
              </div>
              <div className="shadow-2xl shadow-gray-50 border border-zinc-600 rounded-md relative bg-[#11152C]">
                <div className="flex justify-center -translate-y-[1px]">
                  <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent  w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center p-8">
                  <p className="font-bold mb-2 text-pink-500 text-2xl md:text-3xl lg:text-4xl">20+</p>
                  <p className="mb-0 leading-5 text-sm lg:text-base">Years of experience</p>
                </div>
              </div>
              <div className="shadow-2xl shadow-gray-50 border border-zinc-600 rounded-md relative bg-[#11152C]">
                <div className="flex justify-center -translate-y-[1px]">
                  <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-400 to-transparent  w-full"></div>
                  </div>
                </div>
                <div className="flex flex-col justify-center items-center text-center p-8">
                  <p className="font-bold mb-2 text-orange-400 text-2xl md:text-3xl lg:text-4xl">49</p>
                  <p className="mb-0 leading-5 text-sm lg:text-base">Coding courses</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
