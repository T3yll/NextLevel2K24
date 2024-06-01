import { getUser } from "@/actions/auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";
import Navbar from "../home/components/Navbar";
import Tabs from "./components/Tabs";

const layout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const token = cookieStore.get("token");
  if(!token) {
    redirect("/login");
  }
  const user = await getUser(token!.value);
  if (!user.isAdmin) {
    redirect("/");
  }

  return (
    <div>
      <Navbar user={user} />
      <Tabs/>
      {children}
    </div>
  );
};

export default layout;
