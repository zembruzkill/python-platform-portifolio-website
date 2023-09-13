import Editor from "../components/Editor";
import Hero  from "@/components/layout/Hero";

import  Header  from "../components/layout/headers/Header";

export const metadata = {
  title: 'Curso Python Online | CursoPython.pro',
  description:
    'Seu portal para o mundo python',
  
}

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <div>
        <Hero />
      </div>
    </>
  );
}
