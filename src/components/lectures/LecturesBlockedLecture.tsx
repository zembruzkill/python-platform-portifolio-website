
import Image from 'next/image'

import icon from '@/assets/star-seal.svg'

export default function LecturesBlockedLecture() {

  return (
    <>
      <div className="relative bg-[#0D1224] pb-[54.00%] max-w-full p-6">
        <div className="flex text-white justify-center">
        <div className="text-center space-y-2">
          <Image
            className='mx-auto'
            src={icon}
            alt='Blocked lecture icon'
            width={100}
            height={100}
            />
            <p className="text-lg text-zinc-400 font-semibold">Conteúdo Bloqueado!</p>
            <p className="text-lg text-zinc-400 pb-8">Se você já estiver inscrito, <span className='text-white'><a href="/sign-in">será necessário fazer login.</a></span></p>
            <button className="text-title-sm font-bold bg-blue-500 hover:bg-[#712BFF] text-white px-4 py-2 rounded-full mt-4">Inscreva-se no curso para desbloquear</button>
        </div>
        </div>
      </div>
    </>
  );
}
