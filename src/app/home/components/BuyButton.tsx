"use client";
import React, { useState } from "react";
import { Game, User } from "@/types";
import { revalidateTagx } from "@/actions/revalidate";
import toast from "react-hot-toast";
import axios from "axios";

const BuyButton = ({ user, game }: { user: User; game: Game }) => {
  const [loading, setLoading] = useState(false);

  const handleBuy = async () => {
    setLoading(true);
    try {
      const { data } = await axios.post("/api/game/buy", {
        userId: user._id,
        gameId: game._id,
        boughtPrice: game.prix,
      });
      console.log(data);

      if (data) {
        toast.success("Game bought successfully");
        revalidateTagx("user");
        revalidateTagx("games");
        revalidateTagx("buys");

        // Générer le PDF après l'achat réussi
        const pdfResponse = await axios.post("/api/generateInvoice", {
          game,
          user,
        }, {
          responseType: 'blob' // Important pour traiter la réponse comme un blob
        });

        const blob = new Blob([pdfResponse.data], { type: 'application/pdf' });
        const url = window.URL.createObjectURL(blob);
        window.open(url, '_blank');
      }
    } catch (error: any) {
      toast.error(error.response?.data?.message || 'An error occurred');
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleBuy}
      className="text-white py-2 px-4 rounded bg-gray-600 hover:bg-slate-500"
      disabled={loading}
    >
      {loading ? 'Processing...' : 'Acheter'}
    </button>
  );
};

export default BuyButton;
