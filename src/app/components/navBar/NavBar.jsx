import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { UserAuth } from "@/app/context/AuthContext";

import "./navbar.module.css";

const Navbar = () => {
  const router = useRouter();

  const { user, googleSignIn, logOut } = UserAuth();
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);

      if (!user && router.pathname !== "/") {
        router.push("/");
      }
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="header">
      <ul className="flex">
        <li className="">
          <Link href="/">Home</Link>
        </li>

        {!user ? null : (
          <li className="">
            <Link href="/profile">Profile</Link>
          </li>
        )}

        {!user ? null : (
          <li className="">
            <Link href="/room">Rooms</Link>
          </li>
        )}
      </ul>

      {loading ? null : !user ? (
        <ul className="flex">
          <li onClick={handleSignIn} className="">
            Login
          </li>
          <li onClick={handleSignIn} className="">
            Sign up
          </li>
        </ul>
      ) : (
        <div>
          <p>Welcome, {user.displayName}</p>
          <p className="cursor-pointer" onClick={handleSignOut}>
            Sign out
          </p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
