import { getUserById, updateUser } from "@/actions/users";
import { User } from "@/types";
import React from "react";
import EditForm from "./EditForm";
const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const id = params.id;
  const user: User = (await getUserById(id)) as User;
  if (!user) return <div>User not found</div>;

  return (
    <div className="mx-auto container p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Edit User</h1>
      <EditForm user={user} action={updateUser} />
    </div>
  );
};

export default page;
