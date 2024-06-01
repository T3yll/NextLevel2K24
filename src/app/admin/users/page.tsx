import { deleteUser } from "@/actions/users";
import { User } from "@/types";
import Link from "next/link";
import DeleteButton from "./DeleteButton";
import DataTable from "./DataTable";

const getAllUsers = async () => {
  const data = await fetch("http://localhost:3000/api/users", {
    next: {
      revalidate: 200,
      tags: ["users"],
    },
  });
  const users = await data.json();
  return users;
};

const page = async () => {
  const users: User[] = await getAllUsers();
  const action = async (formData: FormData) => {
    "use server";
    console.log("In the actions");

    const userId = formData.get("userId");
    await deleteUser(String(userId));
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Users</h1>
      <DataTable users={users} action={action} />
    </div>
  );
};

export default page;
