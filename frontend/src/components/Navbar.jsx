import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-50 p-5">
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
      <ul className="flex gap-3 font-medium text-xl">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>
        <li>
          <Link href={"/login"}>Login</Link>
        </li>
        <li>
          <Link href={"sign-up"}>Sign Up</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
