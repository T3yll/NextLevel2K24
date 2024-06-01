import { deleteGame, getGames } from "@/actions/games";
import { Game } from "@/types";
import Link from "next/link";
import DeleteButton from "../users/DeleteButton";
import DataTable from "./DataTable";

const page = async () => {
  const games: Game[] = await getGames();
  const action = async (formData: FormData) => {
    "use server";
    console.log("In the actions");

    const userId = formData.get("userId");
    await deleteGame(String(userId));
  };
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Games</h1>
      <div className="flex justify-end">
          <Link
            href="/admin/games/add"
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-3 mb-3 rounded"
          >
            Add game
          </Link>
        </div>
    
          <DataTable games={games} action={action} />
    
     
    </div>
  );
};

export default page;
