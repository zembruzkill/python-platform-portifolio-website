import { getServerSession } from "next-auth";
import Header from "../../components/layout/headers/Header";
import { config, loginIsRequiredClientSide } from "../../../lib/auth";

export default async function Dashboard() {

  const session = await getServerSession(config);

  await loginIsRequiredClientSide();

  return (
    <div>
      <Header items={true} />
      <h1 className="">Dashboard</h1>
      <p className="text-black">{session?.user?.email}</p>
      <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500" src={session?.user?.image} alt="Bordered avatar"/>
    </div>
  );
};