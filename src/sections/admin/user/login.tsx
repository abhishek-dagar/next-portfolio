"use client";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import React, { useState } from "react";

const LoginForm = ({ handleLoggedIn }: { handleLoggedIn: () => void }) => {
  const [details, setDetails] = useState({
    username: "admin",
    password: "",
  });
  const handleDetails = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (details.username === "admin" && details.password === "admin") {
      handleLoggedIn();
    }
  };
  return (
    <div className="flex justify-center items-center h-full w-full">
      <div className="login-card">
        <p className="text-center">Admin</p>
        <div>
          <form method="post" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="username"
              label="username"
              value={details.username}
              onChange={handleDetails}
              labelPlacement="outside"
            />
            <Input
              type="password"
              name="password"
              label="password"
              value={details.password}
              onChange={handleDetails}
              labelPlacement="outside"
            />
            <Button type="submit">LOGIN</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
