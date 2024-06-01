"use client";

import { addGame } from "@/actions/games";
import React, { useState } from "react";
import { useFormStatus } from "react-dom";

const Page = () => {
  const [image, setImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (fileList && fileList.length > 0) {
      setImage(fileList[0]);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("nom", event.currentTarget.nom.value);
    formData.append("description", event.currentTarget.description.value);
    formData.append("prix", event.currentTarget.prix.value);
    formData.append("codeActivation", event.currentTarget.codeActivation.value);
    formData.append("quantiteStock", event.currentTarget.quantiteStock.value);
    if (image) {
      formData.append("image", image);
    }
    addGame(formData); // Envoyer les données du formulaire au serveur
  };

  return (
    <form className="space-y-4 md:w-[60vw] mx-auto" onSubmit={handleSubmit}>
      {/* Champ Nom */}
      <div>
        <label className="block text-sm font-medium text-gray-900" htmlFor="nom">
          Nom
        </label>
        <input
          type="text"
          name="nom"
          id="nom"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Champ Description */}
      <div>
        <label className="block text-sm font-medium text-gray-900" htmlFor="description">
          Description
        </label>
        <input
          type="text"
          name="description"
          id="description"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Champ Prix */}
      <div>
        <label className="block text-sm font-medium text-gray-900" htmlFor="prix">
          Prix
        </label>
        <input
          type="text"
          name="prix"
          id="prix"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Champ Code Activation */}
      <div>
        <label className="block text-sm font-medium text-gray-900" htmlFor="codeActivation">
          Activation Code
        </label>
        <input
          type="text"
          name="codeActivation"
          id="codeActivation"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Champ Stock */}
      <div>
        <label className="block text-sm font-medium text-gray-900" htmlFor="quantiteStock">
          Stock
        </label>
        <input
          type="number"
          name="quantiteStock"
          id="quantiteStock"
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      {/* Bouton de soumission */}
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

  return pending ? "Loading..." : "Add Game";
};

export default Page;
