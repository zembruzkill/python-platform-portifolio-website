import Hero  from "@/components/Hero";

import Header from "../components/layout/headers/Header";
import Footer from "@/components/layout/footers/Footer";
import Iam from "@/components/Iam";

export const metadata = {
  title: 'Curso Python Online | CursoPython.pro',
  description: 'Seu Portal Para o Mundo Python',
}

export default function HomePage() {
  return (
    <>
      {/* <Header /> */}
      <div>
        <Hero />
        <Footer />
      </div>
    </>
  );
}
