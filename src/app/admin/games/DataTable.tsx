"use client";
import React, { useState } from "react";
import { Game } from "@/types";
import DeleteButton from "../users/DeleteButton";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const DataTable = ({
  games,
  action,
}: {
  games: Game[];
  action: (formData: FormData) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Adjust this number as needed

  // Calculate the current items to display based on pagination
  const offset = currentPage * itemsPerPage;
  const currentGames = games.slice(offset, offset + itemsPerPage);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md rounded-lg border border-gray-300">
          <thead>
            <tr className="w-full bg-gray-400 text-black uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Description</th>

              <th className="py-3 px-6 text-left">Stock</th>
              <th className="py-3 px-6 text-left">Price</th>

              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-black text-sm font-light">
            {currentGames.map((game) => (
              <tr key={game._id} className="border-b border-gray-300 ">
                <td className="py-3 px-6 text-left">{game.nom}</td>
                <td className="py-3 px-6 text-left">{game.description}</td>
                <td className="py-3 px-6 text-left">{game.quantiteStock}</td>

                <td className="py-3 px-6 text-left">
                  ${Number(game.prix).toFixed(2)}
                </td>

                <td className="py-3 px-6 text-left flex items-center gap-2 ">
                  <DeleteButton action={action} userId={game._id} />
                  <Link
                    href={`/admin/games/edit/${game._id}`}
                    className=" hover:bg-blue-700 border border-black font-bold py-2 px-4 rounded"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={Math.ceil(games.length / itemsPerPage)}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageChange}
        containerClassName={"pagination"}
        activeClassName={"active"}
      />
    </div>
  );
};

export default DataTable;
