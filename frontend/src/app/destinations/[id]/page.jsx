import Image from "next/image";
import Link from "next/link";
import { LuMapPin, LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaStar, FaCheck } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  const res = await fetch(`http://localhost:8000/destination/${id}`, {
    cache: "no-store",
  });
  const destination = await res.json();

  const {
    imageUrl,
    price,
    country,
    destinationName,
    duration,
    rating = 4.9,
    reviews = 234,
    overview = "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.",
    highlights = [],
    highlightsList = [
      "Luxury beachfront accommodation",
      "Traditional Balinese spa treatment",
      "Sunrise trek to Mount Batur",
      "Visit Uluwatu Temple at sunset",
      "Private beach dinner experience",
    ],
  } = destination;

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* Top Nav */}
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-gray-600 text-sm hover:text-gray-900 transition-colors"
        >
          <LuArrowLeft className="text-base" />
          Back to Destinations
        </Link>
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors">
            <MdEdit className="text-base" />
            Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 border border-red-400 rounded-md text-sm text-red-500 hover:bg-red-50 transition-colors">
            <MdDelete className="text-base" />
            Cancel
          </button>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative w-full h-[420px] rounded-xl overflow-hidden mb-8">
        <Image
          src={imageUrl}
          alt={destinationName}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </div>

      {/* Divider */}
      <hr className="border-gray-200 mb-8" />

      {/* Main Content + Sidebar */}
      <div className="flex gap-8 items-start">
        {/* Left Content */}
        <div className="flex-1">
          {/* Location */}
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-2">
            <LuMapPin className="text-base" />
            <span>{country}</span>
          </div>

          {/* Title */}
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {destinationName}
          </h1>

          {/* Rating & Duration */}
          <div className="flex items-center gap-5 mb-8">
            <div className="flex items-center gap-1.5">
              <FaStar className="text-yellow-400 text-base" />
              <span className="font-semibold text-gray-800">{rating}</span>
              <span className="text-gray-500 text-sm">({reviews} reviews)</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <SlCalender className="text-base" />
              <span className="font-semibold">{duration}</span>
            </div>
          </div>

          {/* Overview */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-sm">{overview}</p>
          </div>

          {/* Highlights */}
          <div className="pb-5">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Highlights
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm mb-5">
              {overview}
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {highlightsList.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-700"
                >
                  <FaCheck className="text-green-500 text-xs flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar Booking Card */}
        <div className="w-72 flex-shrink-0 border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Starting from</p>
          <p className="text-3xl font-bold text-cyan-500 mb-1">${price}</p>
          <p className="text-gray-500 text-sm mb-5">per person</p>

          {/* Date Input */}
          <input
            type="date"
            defaultValue="2026-05-15"
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 mb-4 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />

          {/* Book Now Button */}
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition-colors mb-5">
            Book Now <LuArrowRight className="text-base" />
          </button>

          {/* Perks */}
          <div className="flex flex-col gap-2.5">
            {[
              "Free cancellation up to 7 days",
              "Travel insurance included",
              "24/7 customer support",
            ].map((perk, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-600"
              >
                <FaCheck className="text-green-500 text-xs flex-shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
