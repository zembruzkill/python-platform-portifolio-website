import { loginIsRequiredClientSide } from "../../../lib/auth";
import  Header  from "../../components/layout/headers/Header";

export default async function PaymentBilling(){

  await loginIsRequiredClientSide();

    return (
      <div>
        <Header items={true}/>
        <h1 className="">Pagamentos e Faturas</h1>
      </div>
    );
  };