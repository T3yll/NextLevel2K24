import { getGameById, updateGame } from "@/actions/games";
import { Game } from "@/types";
import EditForm from "./EditForm";
const page = async ({
  params,
}: {
  params: {
    id: string;
  };
}) => {
  const id = params.id;
  const game: Game = (await getGameById(id)) as Game;
  if (!game) return <div>User not found</div>;

  return (
    <div className="mx-auto container p-4">
      <h1 className="text-center text-2xl font-semibold mb-6">Edit Game</h1>
      <EditForm game={game} action={updateGame} />
    </div>
  );
};

export default page;
