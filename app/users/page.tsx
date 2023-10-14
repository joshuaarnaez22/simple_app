import React from "react";
import UserComponent from "@/components/userComponent";
export async function getUsers() {
  const users = await fetch("http://localhost:3000/api/user");
  return users.json();
}

const Users = async () => {
  const userquery = await getUsers();

  return (
    <div className="h-screen bg-white">
      <UserComponent userquery={userquery} />
    </div>
  );
};

export default Users;
