import Image from "next/image";
import React from "react";
import { LuMapPin } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { TbArrowUpRight } from "react-icons/tb";

const DestinationCard = ({ destination }) => {
  const {
    imageUrl,
    price,
    category,
    country,
    destinationName,
    duration,
    rating = 4.5,
  } = destination;

  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full h-[220px]">
        <Image
          className="object-cover"
          alt={destinationName}
          src={imageUrl}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Rating Badge */}
        <div className="absolute top-3 right-3 bg-white rounded-md px-2 py-1 flex items-center gap-1.5 shadow-sm">
          <span className="text-sm font-semibold text-gray-800">{rating}</span>
          <FaStar className="text-yellow-400 text-sm" />
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4 pt-3">
        {/* Location */}
        <div className="flex items-center gap-1 text-gray-500 text-sm mb-1">
          <LuMapPin className="text-base" />
          <span>{country}</span>
        </div>

        {/* Name & Price */}
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-bold text-gray-900">{destinationName}</h2>
          <p className="text-lg font-bold text-gray-900">
            ${price}
            <span className="text-xs font-normal text-gray-500">/Person</span>
          </p>
        </div>

        {/* Duration */}
        <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
          <SlCalender className="text-base" />
          <span>{duration}</span>
        </div>

        {/* Book Now */}
        <Link
          href="#"
          className="flex items-center gap-1 text-cyan-500 font-semibold text-sm hover:text-cyan-600 transition-colors"
        >
          BOOK NOW <TbArrowUpRight className="text-base" />
        </Link>
      </div>
    </div>
  );
};

export default DestinationCard;
