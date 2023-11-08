"use client";

import LoginForm from "@/sections/admin/user/login";
import React, { useState } from "react";
import EditDetails from "./_EditDetails";

const Admin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const handleLoggedIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="dark w-screen h-screen">
      {isLoggedIn ? (
        <EditDetails />
      ) : (
        <LoginForm handleLoggedIn={handleLoggedIn} />
      )}
    </div>
  );
};

export default Admin;
