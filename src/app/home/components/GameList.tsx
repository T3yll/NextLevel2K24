'use client';// Ajoutez cette ligne pour marquer le composant comme un Client Component
import { useState, useEffect } from 'react';
import { Game, User } from "@/types";
import BuyButton from './BuyButton';

const GameList = ({ games, user }: { games: Game[], user: User }) => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filteredGames, setFilteredGames] = useState<Game[]>(games);

  useEffect(() => {
    const results = games.filter(game =>
      game.nom.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredGames(results);
  }, [searchTerm, games]);


  const openModal = (game: Game) => {
    setSelectedGame(game);
  };

  const closeModal = () => {
    setSelectedGame(null);
  };

  return (
    <div className="container mx-auto p-4 flex flex-col items-center">
      <h1 className="text-3xl font-bold mt-6 mb-6 text-white">Tendances</h1>
      <div className='flex items-center'>
        <input
          type="text"
          placeholder="Rechercher un jeu..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className='flex pl-5 w-[30vw] h-[7vh] text-xs rounded-[50px] bg-[#000000] bg-opacity-[20%] mt-4 mb-4 justify-center items-center gap-2'
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {filteredGames.map((game) => (
          <div
            key={game._id.toString()}
            className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md rounded-lg p-4 flex flex-col justify-between"
          >
            {/* Utilisez un bouton pour ouvrir le Modal */}
            <button onClick={() => openModal(game)}>
              {game.coverURL && <img src={game.coverURL} alt={game.nom} className="w-full h-auto mt-4" />}
            </button>
            <h2 className="text-xl font-semibold mb-2 mt-2">{game.nom}</h2>
            <p className="text-lg font-bold mb-2">${game.prix.toFixed(2)}</p>
            {/* Affichez le stock restant */}
            <p className="text-black mb-2">Stock Restant: {game.quantiteStock}</p>
            {/* Affichez le bouton "Buy" */}
            <BuyButton game={game} user={user} />
          </div>
        ))}
      </div>

      {selectedGame && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-2">{selectedGame.nom}</h2>
            {selectedGame.coverURL && <img src={selectedGame.coverURL} alt={selectedGame.nom} className="w-full h-auto mb-4" />}
            <p>Description: {selectedGame.description}</p>
            {/* Affichez le stock restant */}
            <p className='mb-6'>Stock Restant: {selectedGame.quantiteStock}</p>
            {/* Affichez le bouton "Buy" */}
            <BuyButton game={selectedGame} user={user} />
            {/* Bouton de fermeture de la modal */}
            <div className="mt-4">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mr-4" onClick={closeModal}>Fermer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameList;
