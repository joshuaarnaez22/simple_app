"use client";

import dynamic from "next/dynamic";

const UserComponent = dynamic(() => import("@/components/userComponent"), {
  ssr: false,
});
const Users = () => {
  return (
    <div className="h-screen bg-white">
      <UserComponent />
    </div>
  );
};

export default Users;
