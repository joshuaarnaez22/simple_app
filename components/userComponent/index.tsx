"use client";
import React, { useEffect, useState } from "react";
import Pagination from "@/components/pagination";
import UsePagination from "../usePagination";
import { useRouter } from "next/navigation";
const userTableHeaders = ["name", "email", "username", "birthdate", "address"];

const UserComponent = () => {
  const [users, setUsers] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const username = localStorage.getItem("username");
      const email = localStorage.getItem("email");
      if (!username && !email) {
        router.push("/");
        return;
      }
    }
    getUsers();
  }, []);
  // https://simple-app-unya.vercel.app/
  async function getUsers() {
    const users = await fetch("https://simple-app-unya.vercel.app/api/user", {
      next: { revalidate: 0 },
    });
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
      <h1 className="text-black">Welcome {localStorage.getItem("username")}</h1>

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
