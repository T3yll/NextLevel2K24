"use server";
import dbConnect from "../../mongodb";
import UserM from "../../models/User";
import { revalidateTag, unstable_cache } from "next/cache";
import { User } from "@/types";
const convertToPlainObject = (doc: User) => {
    return {
      ...doc,
      _id: doc._id.toString(),
      createdAt: new Date(doc.createdAt).toISOString(),
      updatedAt: new Date(doc.updatedAt).toISOString(),
    };
  };
const deleteUser = async (id: string) => {
  try {
    await dbConnect();
    const user = await UserM.findByIdAndDelete(id);
    revalidateTag("users");
    return user;
  } catch (error: any) {
    console.log(error.message);
  }
};
const getUserById = async (id: string) => {
  return unstable_cache(
    async () => {
      try {
        await dbConnect();
        const user = await UserM.findById(id).lean();
        return user;
      } catch (error) {
        console.error(error);
        return null; // Return a value in case of an error
      }
    },
    [`user-${id}`],
    { revalidate: 500, tags: [`user-${id}`] }
  )();
};

const updateUser = async (formData: FormData) => {
    "use server"
  const userId = formData.get("userId");
  const nom = formData.get("nom");
  const prenom = formData.get("prenom");
  const email = formData.get("email");
  const isAdmin = formData.get("isAdmin");
  const balance = formData.get("balance");
  //find and update user
  const user = await UserM.findByIdAndUpdate(
    userId,
    {
      nom,
      prenom,
      email,
      isAdmin: !!isAdmin,
      balance,
    },
    { new: true }
  ).lean();
  revalidateTag("users");
  revalidateTag(`user-${userId}`);
  return convertToPlainObject(user as any);
};


export { deleteUser, getUserById, updateUser };
