"use client";
import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user);

  return (
    <nav className="flex justify-between items-center bg-blue-50 p-5">
      <ul className="flex gap-3 font-medium text-xl">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/destinations"}>Destinations</Link>
        </li>
        <li>
          <Link href={"/my-bookings"}>My Bookings</Link>
        </li>
        <li>
          <Link href={"/add-destination"}>Add Destination</Link>
        </li>
      </ul>
      <div>
        <Image
          alt="wanderlast-logo"
          src={"/assets/Wanderlast.png"}
          width={150}
          height={150}
        ></Image>
      </div>
      <ul className="flex items-center gap-3 font-medium text-xl">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        {user ? (
          <>
            <li>
              <Avatar>
                <Avatar.Image
                  alt="John Doe"
                  src="https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                />
                <Avatar.Fallback>{user.name.charAt(0)}</Avatar.Fallback>
              </Avatar>
            </li>

            <li>
              <Button className={"rounded-none"}>Logout</Button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>Sign Up</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
