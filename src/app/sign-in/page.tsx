'use client'

import  Header  from "../../components/layout/headers/Header";
import { useRouter } from 'next/navigation';

const SignIn = () => {
  const router = useRouter();
    return (
      <div>
        <Header />
        <h1 className="">Login</h1>
      </div>
    );
  };
  
  export default SignIn;