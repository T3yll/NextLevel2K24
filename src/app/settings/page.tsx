// settings.tsx

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "@/actions/auth";
import Navbar from "../home/components/Navbar";
import EditForm from "./EditForm";

const SettingsPage = async () => {
    const cookieStore = cookies();
    const token = cookieStore.get("token");
  
    const user = await getUser(token!.value);
    if (!user) {
      redirect("/");
    }


  return (
    <>
    <Navbar user={user} />
      <div className="mx-auto container p-4">
        <h1 className="text-center text-2xl font-semibold mb-6 text-white">Paramètres</h1>
        <EditForm user={user} />
      </div>
    </>
  );
};


export default SettingsPage;
