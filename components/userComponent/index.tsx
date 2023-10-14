"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/pagination";
import UsePagination from "../usePagination";
const userTableHeaders = ["name", "email", "username", "birthdate", "address"];

const UserComponent = ({ userquery }: any) => {
  const [users, setUsers] = useState<any>([]);
  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const users = await fetch("http://localhost:3000/api/user");
    const response = await users.json();
    setUsers(response);
  }
  console.log(users);

  const {
    currentItems,
    currentPage,
    totalPages,
    handlePageChange,
    startIndex,
    endIndex,
  } = UsePagination(10, users.users, users.usersLength || 0);

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
                ({ _id, name, username, email, birthdate, address }: any) => (
                  <tr key={_id} className="bg-white border-b ">
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
          tableDataLength: users.usersLength,
          handlePageChange,
          currentPage,
          totalPages,
        }}
      />
    </div>
  );
};

export default UserComponent;
