"use client";
import { Buy } from "@/types";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const DataTable = ({ buys }: { buys: Buy[] }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Adjust this number as needed

  // Calculate the current items to display based on pagination
  const offset = currentPage * itemsPerPage;
  const currentBuys = buys.slice(offset, offset + itemsPerPage);
  const handlePageChange = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };
  return (
    <div>
      <h1 className="text-center text-2xl font-semibold mb-6">Purchases</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg shadow-md rounded-lg border border-gray-300">
          <thead>
            <tr className="w-full bg-gray-400 text-black uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Game</th>
              <th className="py-3 px-6 text-left">User</th>
              <th className="py-3 px-6 text-left">Bought_Price</th>
              <th className="py-3 px-6 text-left">Bought_Date</th>
              {/* <th className="py-3 px-6 text-left">Action</th> */}
            </tr>
          </thead>
          <tbody className="text-black text-sm font-light">
            {currentBuys.length ? (
              currentBuys.map((bought) => (
                <tr
                  key={bought._id}
                  className="border-b border-gray-300 text-black"
                >
                  <td className="py-3 px-6 text-left">{bought.game?.nom}</td>
                  <td className="py-3 px-6 text-left">{bought.user?.email}</td>
                  <td className="py-3 px-6 text-left">
                    ${bought.bought_price}
                  </td>
                  <td className="py-3 px-6 text-left">
                    {new Date(bought.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <center>
                    <div className="text-center text-xl font-semibold my-3">
                      No purchases found
                    </div>
                  </center>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {currentBuys.length ? (
        <ReactPaginate
          previousLabel={"<<"}
          nextLabel={">>"}
          breakLabel={"..."}
          breakClassName={"break-me"}
          pageCount={Math.ceil(buys.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageChange}
          containerClassName={"pagination"}
          activeClassName={"active"}
        />
      ) : null}
    </div>
  );
};

export default DataTable;
