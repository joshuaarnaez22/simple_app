"use client";
import React from "react";
import Pagination from "@/components/pagination";
import UsePagination from "../usePagination";
const userTableHeaders = ["name", "email", "username", "birthdate", "address"];

const UserComponent = ({ userquery }: any) => {
  const {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange,
    startIndex,
    endIndex,
  } = UsePagination(10, userquery.users, userquery.total);

  return (
    <div>
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg p-5">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              {userTableHeaders.map((header) => (
                <th scope="col" className="px-6 py-3" key={header}>
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          {currentItems && currentItems.length && (
            <tbody>
              {currentItems.map(
                ({ id, name, username, email, birthdate, address }: any) => (
                  <tr key={id} className="bg-white border-b ">
                    <td className="px-6 py-4">{name}</td>
                    <td className="px-6 py-4">{email}</td>
                    <td className="px-6 py-4">{username}</td>
                    <td className="px-6 py-4">{birthdate}</td>
                    <td className="px-6 py-4">
                      {address.street} {address.city} {address.state}{" "}
                      {address.zipCode}
                    </td>
                  </tr>
                )
              )}
            </tbody>
          )}
        </table>
      </div>
      <Pagination
        {...{
          startIndex,
          endIndex,
          tableDataLength: userquery.total,
          handlePageChange,
          currentPage,
          totalPages,
        }}
      />
    </div>
  );
};

export default UserComponent;
