import { getUser } from "@/actions/auth";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import Navbar from "./components/Navbar";
import Home from "./components/Home.client";
// export const dynamic = true;
// 
const page = async () => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");

  const user = await getUser(token!.value);
  if (!user) {
    redirect("/");
  }

  return (
    <>
      <Navbar user={user} />
      <Home user={user} />;
    </>
  );
};

export default page;
