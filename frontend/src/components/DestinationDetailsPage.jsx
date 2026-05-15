"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuMapPin, LuArrowLeft, LuArrowRight } from "react-icons/lu";
import { SlCalender } from "react-icons/sl";
import { FaStar, FaCheck } from "react-icons/fa";
import { MdEdit, MdDelete } from "react-icons/md";
import EditModal from "@/components/EditModal";
import DeleteDestination from "@/components/DeleteDestination";
import { useRouter } from "next/navigation";

const DestinationDetailsPage = ({ destination }) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const router = useRouter();

  const {
    _id,
    imageUrl,
    price,
    country,
    destinationName,
    duration,
    rating = 4.9,
    reviews = 234,
    overview = "Discover the magic of Bali with pristine beaches, ancient temples, and vibrant culture. Experience luxury resorts, tropical landscapes, and unforgettable sunsets.",
    highlightsList = [
      "Luxury beachfront accommodation",
      "Traditional Balinese spa treatment",
      "Sunrise trek to Mount Batur",
      "Visit Uluwatu Temple at sunset",
      "Private beach dinner experience",
    ],
  } = destination;

  const handleSave = async (formData) => {
    await fetch(`http://localhost:8000/destination/${_id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    setShowEditModal(false);
    console.log(formData);
  };

  //   const handleSave = async (formData) => {
  //     console.log("Updated Data:", formData);
  //     setShowEditModal(false);
  //   };

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  // Delete handler
  const handleDelete = async () => {
    await fetch(`http://localhost:8000/destination/${_id}`, {
      method: "DELETE",
    });
    setShowDeleteModal(false);
    router.push("/destinations");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-6">
      {/* Top Nav */}
      <div className="flex items-center justify-between mb-5">
        <Link
          href="/destinations"
          className="flex items-center gap-2 text-cyan-500 hover:text-cyan-600 text-sm transition-colors"
        >
          <LuArrowLeft className="" />
          Back to Destinations
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowEditModal(true)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <MdEdit className="text-base" />
            Edit
          </button>
          <button
            onClick={() => setShowDeleteModal(true)}
            className="flex items-center gap-2 px-4 py-2 border border-red-400 rounded-md text-sm text-red-500 hover:bg-red-50 transition-colors"
          >
            <MdDelete className="text-base" />
            Delete
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

      <hr className="border-gray-200 mb-8" />

      {/* Main Content + Sidebar */}
      <div className="flex gap-8 items-start">
        <div className="flex-1">
          <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-2">
            <LuMapPin className="text-base" />
            <span>{country}</span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            {destinationName}
          </h1>
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
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Overview</h2>
            <p className="text-gray-600 leading-relaxed text-sm">{overview}</p>
          </div>
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

        {/* Booking Card */}
        <div className="w-72 flex-shrink-0 border border-gray-200 rounded-xl p-5 shadow-sm">
          <p className="text-gray-500 text-sm mb-1">Starting from</p>
          <p className="text-3xl font-bold text-cyan-500 mb-1">${price}</p>
          <p className="text-gray-500 text-sm mb-5">per person</p>
          <input
            type="date"
            defaultValue="2026-05-15"
            className="w-full border border-gray-300 rounded-md px-4 py-2.5 text-sm text-gray-700 mb-4 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
          <button className="w-full bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 rounded-md flex items-center justify-center gap-2 transition-colors mb-5">
            Book Now <LuArrowRight className="text-base" />
          </button>
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

      {/* Edit Modal */}
      {showEditModal && (
        <EditModal
          destination={destination}
          onClose={() => setShowEditModal(false)}
          onSave={handleSave}
        />
      )}
      {showDeleteModal && (
        <DeleteDestination
          destinationName={destinationName}
          onClose={() => setShowDeleteModal(false)}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default DestinationDetailsPage;
