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
    </div>
  );
};