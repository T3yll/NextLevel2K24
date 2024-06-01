'use client';
// EditForm.tsx (côté serveur)

import { updateUser } from "@/actions/users";
import React from "react";

const EditForm = ({ user }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      // Envoyer les données mises à jour à updateUser
      await updateUser(formData);
      // Afficher un message de succès ou rediriger vers une page de confirmation
    } catch (error) {
      // Gérer les erreurs et afficher un message d'erreur
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 md:w-[60vw] mx-auto">
      <div>
        <input type="hidden" name="userId" value={user._id} />
        <label className="block text-sm font-medium text-gray-900" htmlFor="nom">
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
        <label className="block text-sm font-medium text-gray-900" htmlFor="prenom">
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
        <label className="block text-sm font-medium text-gray-900" htmlFor="email">
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
        <label className="block text-sm font-medium text-gray-900" htmlFor="balance">
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

      {/* Ajoutez les autres champs ici */}

      <div className="mt-4">
        <button
          type="submit"
          className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default EditForm;
