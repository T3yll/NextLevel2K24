"use server";

import { revalidateTag, unstable_cache, unstable_noStore } from "next/cache";
import dbConnect from "../../mongodb";
import axios from 'axios';
import GameM from "../../models/Game";
import { Game } from "@/types";
const convertToPlainObject = (doc: Game) => {
  return {
    ...doc,
    _id: doc?._id?.toString(),
    createdAt: new Date(doc.createdAt).toISOString(),
    updatedAt: new Date(doc.updatedAt).toISOString(),
  };
};
const deleteGame = async (id: string) => {
  try {
    await dbConnect();
    const user = await GameM.findByIdAndDelete(id);
    revalidateTag("games");
    return user;
  } catch (error: any) {
    console.log(error.message);
  }
};
const getGames = async () => {
  await dbConnect();
  unstable_noStore();
  return unstable_cache(
    async () => {
      const games: Game[] = await GameM.find({}).lean();

      const plainGames = games.map(convertToPlainObject);

      return plainGames;
    },
    ["games"],
    {
      tags: ["games"],
      revalidate: 200,
    }
  )();
};

const getGameById = async (id: string) => {
  return unstable_cache(
    async () => {
      try {
        await dbConnect();
        const game = await GameM.findById(id).lean();
        return game;
      } catch (error) {
        console.error(error);
        return null; // Return a value in case of an error
      }
    },
    [`game-${id}`],
    { revalidate: 500, tags: [`game-${id}`] }
  )();
};

const addGame = async (formData: FormData) => {
  // Récupérez les données du formulaire
  const nom = formData.get("nom");
  const description = formData.get("description");
  const quantiteStock = formData.get("quantiteStock");
  const prix = formData.get("prix");
  const codeActivation = formData.get("codeActivation");

  try {
    // Récupérez l'URL de la couverture du jeu
    const coverURL = await getGameCoverURL(nom as string);
    console.log(coverURL);

    // Créez le jeu avec l'URL de la couverture
    const game = await GameM.create({
      nom,
      description,
      quantiteStock,
      prix,
      codeActivation,
      coverURL, // Ajoutez l'URL de la couverture à l'objet du jeu
    });

    // Rafraîchissez le cache ou tout autre traitement nécessaire
    revalidateTag("games");

    return {
      success: true,
    };
  } catch (error) {
    console.error('Erreur lors de l\'ajout du jeu:', error);
    return {
      success: false,
      error: 'Une erreur est survenue lors de l\'ajout du jeu.',
    };
  }
}

const STEAM_API_KEY = '7574986E5EBF87601468638C45703D14';

const getGameCoverURL = async (gameName: string) => {
  try {
    // Faites une requête à l'API Steam pour obtenir les informations sur le jeu
    const response = await axios.get(
      `https://api.steampowered.com/ISteamApps/GetAppList/v2?key=${STEAM_API_KEY}`
    );

    // Traitez la réponse pour rechercher le jeu par son nom
    const gameList = response.data?.applist?.apps;
    const matchedGame = gameList.find((game: { name: string }) =>
      game.name.toLowerCase().includes(gameName.toLowerCase())
    );

    // Vérifiez si le jeu a été trouvé
    if (matchedGame && matchedGame.appid) {
      // Retournez l'URL de la couverture du jeu
      return `https://steamcdn-a.akamaihd.net/steam/apps/${matchedGame.appid}/header.jpg`;
    } else {
      throw new Error('Jeu non trouvé.');
    }
  } catch (error) {
    console.error('Erreur lors de la récupération de l\'URL de la couverture du jeu:', error);
    return null; // En cas d'erreur, retournez null
  }
};


const updateGame = async (formData: FormData) => {
  "use server";
  const gameId = formData.get("gameId");
  const nom = formData.get("nom");
  const description = formData.get("description");
  const quantiteStock = formData.get("quantiteStock");
  const prix = formData.get("prix");
  const codeActivation = formData.get("codeActivation");
  //find and update user
  console.log({
    gameId,
    nom,
    description,
    quantiteStock,
    prix,
    codeActivation,
  
  });
  
  const game = await GameM.findByIdAndUpdate(
    gameId,
    {
      nom,
      description,
      quantiteStock,
      prix,
      codeActivation,
    },
    { new: true }
  ).lean();
  revalidateTag("games");
  revalidateTag(`game-${gameId}`);
  return game
};
export { getGames, deleteGame, updateGame,addGame, getGameById };