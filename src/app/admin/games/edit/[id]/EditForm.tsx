"use client";
import { Game, User } from "@/types";
import React from "react";
import { useFormStatus } from "react-dom";

const EditForm = ({
  game,
  action,
}: {
  game: Game;
  action: (formData: FormData) => void;
}) => {
  return (
    <form className="space-y-4 md:w-[60vw] mx-auto" action={action}>
      <div>
        <input type="hidden" name="gameId" value={game._id} />
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="nom"
        >
          Nom
        </label>
        <input
          type="text"
          defaultValue={game.nom}
          name="nom"
          id="nom"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="description"
        >
          Description
        </label>
        <input
          type="text"
          defaultValue={game.description}
          name="description"
          id="description"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="prix"
        >
          Prix
        </label>
        <input
          type="text"
          defaultValue={game.prix}
          name="prix"
          id="prix"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="codeActivation"
        >
          Activation Code
        </label>
        <input
          type="text"
          defaultValue={game.codeActivation}
          name="codeActivation"
          id="codeActivation"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>


      <div>
        <label
          className="block text-sm font-medium text-gray-900"
          htmlFor="quantiteStock"
        >
          Stock
        </label>
        <input
          type="number"
          defaultValue={Number(game.quantiteStock).toFixed(0)}
          name="quantiteStock"
          id="quantiteStock"
          
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
