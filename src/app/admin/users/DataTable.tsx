"use client";
import { User } from "@/types";
import React, { useState } from "react";
import DeleteButton from "./DeleteButton";
import Link from "next/link";
import ReactPaginate from "react-paginate";

const DataTable = ({
  users,
  action,
}: {
  users: User[];
  action: (formData: FormData) => void;
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // Adjust this number as needed

  // Calculate the current items to display based on pagination
  const offset = currentPage * itemsPerPage;
  const currentUsers = users.slice(offset, offset + itemsPerPage);
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
              <th className="py-3 px-6 text-left">Email</th>
              <th className="py-3 px-6 text-left">Prenom</th>

              <th className="py-3 px-6 text-left">Balance</th>
              <th className="py-3 px-6 text-left">Admin</th>

              <th className="py-3 px-6 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-black text-sm font-light">
            {currentUsers.map((user) => (
              <tr key={user._id} className="border-b border-gray-300 ">
                <td className="py-3 px-6 text-left">{user.nom}</td>
                <td className="py-3 px-6 text-left">{user.email}</td>
                <td className="py-3 px-6 text-left">{user.prenom}</td>

                <td className="py-3 px-6 text-left">
                  ${Number(user.balance).toFixed(2)}
                </td>

                <td className="py-3 px-6 text-left">
                  {user.isAdmin ? "Admin" : "User"}
                </td>

                <td className="py-3 px-6 text-left flex items-center gap-2 ">
                  <DeleteButton action={action} userId={user._id} />
                  <Link
                    href={`/admin/users/edit/${user._id}`}
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
        pageCount={Math.ceil(users.length / itemsPerPage)}
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
