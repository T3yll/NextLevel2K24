"use client";
import { User } from "@/types";
import React from "react";
import { useFormStatus } from "react-dom";

const EditForm = ({
  user,
  action,
}: {
  user: User;
  action: (formData: FormData) => void;
}) => {
  return (
    <form className="space-y-4 md:w-[60vw] mx-auto" action={action}>
      <div>
        <input type="hidden" name="userId" value={user._id} />
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="nom"
        >
          Nom
        </label>
        <input
          type="text"
          defaultValue={user.nom}
          name="nom"
          id="nom"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="prenom"
        >
          Prenom
        </label>
        <input
          type="text"
          defaultValue={user.prenom}
          name="prenom"
          id="prenom"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="email"
        >
          Email
        </label>
        <input
          type="email"
          defaultValue={user.email}
          name="email"
          id="email"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="isAdmin"
        >
          IsAdmin
        </label>
        <input
          type="checkbox"
          defaultChecked={Boolean(user.isAdmin)}
          name="isAdmin"
          // checked={user.isAdmin}
          id="isAdmin"
          // value={user.isAdmin ? "true" : "false"}
          className="mt-1 block"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="balance"
        >
          Balance
        </label>
        <input
          type="number"
          defaultValue={Number(user.balance).toFixed(0)}
          name="balance"
          id="balance"
          
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mt-4">
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <LoadingButton />
        </button>
      </div>
    </form>
  );
};

const LoadingButton = () => {
  const { pending } = useFormStatus();

  return pending ? "Loading..." : "Update";
};

export default EditForm;
