// src/app/Home.client.tsx
import { getGames } from "@/actions/games";
import { Game, User } from "@/types";
import GameList from "./GameList";

const Home = async ({ user }: { user: User }) => {
  let games: Game[] = await getGames();

  return (
    <>
      <GameList games={games} user={user} />
    </>
  );
};

export default Home;
