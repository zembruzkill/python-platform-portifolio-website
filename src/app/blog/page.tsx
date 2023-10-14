import  Header  from "../../components/layout/headers/Header";

import Footer from "@/components/layout/footers/Footer";

const Blog = () => {
    return (
      <>
        <Header items={true}/>
        <h1 className="h-screen">Nenhuma postagem disponível</h1>
        <Footer />
      </>
    );
  };
  
  export default Blog;