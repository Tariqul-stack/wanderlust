"use client";
import React, { useState } from "react";
import { MdOutlineSave } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { IoClose } from "react-icons/io5";

const EditModal = ({ destination, onClose, onSave }) => {
  const {
    destinationName = "",
    country = "",
    category = "",
    price = "",
    duration = "",
    departureDate = "",
    imageUrl = "",
    description = "",
  } = destination || {};

  const [formData, setFormData] = useState({
    destinationName,
    country,
    category,
    price,
    duration,
    departureDate,
    imageUrl,
    description,
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (onSave) await onSave(formData);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-2xl p-6 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Header */}
        <div className="mb-4">
          <h2 className="text-2xl font-bold text-gray-900">
            Update Travel Package
          </h2>
          <p className="text-gray-500 text-sm mt-1">
            Make changes to the travel package details below
          </p>
        </div>

        {/* Destination Name */}
        <div className="mb-3">
          <input
            name="destinationName"
            value={formData.destinationName}
            onChange={handleChange}
            placeholder="Bali Paradise"
            className="w-full bg-gray-100 rounded-md px-4 py-3 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Country & Category */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Country
            </label>
            <input
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Indonesia"
              className="w-full bg-gray-100 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Category
            </label>
            <div className="relative">
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full bg-gray-100 rounded-md px-4 py-2.5 text-sm text-gray-700 appearance-none focus:outline-none focus:ring-1 focus:ring-cyan-400"
              >
                <option value="">Select category</option>
                <option value="Beach">Beach</option>
                <option value="Mountain">Mountain</option>
                <option value="City">City</option>
                <option value="Adventure">Adventure</option>
                <option value="Cultural">Cultural</option>
              </select>
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-xs">
                ▼
              </span>
            </div>
          </div>
        </div>

        {/* Price & Duration */}
        <div className="grid grid-cols-2 gap-3 mb-3">
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Price (USD)
            </label>
            <input
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="e.g., 1299"
              className="w-full bg-gray-100 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-800 mb-1">
              Duration
            </label>
            <input
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              placeholder="e.g., 7 Days/6 Nights"
              className="w-full bg-gray-100 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400"
            />
          </div>
        </div>

        {/* Departure Date */}
        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Departure Date
          </label>
          <input
            type="date"
            name="departureDate"
            value={formData.departureDate}
            onChange={handleChange}
            className="w-full bg-gray-100 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Image URL */}
        <div className="mb-3">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Image URL
          </label>
          <input
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
            className="w-full bg-gray-100 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400"
          />
        </div>

        {/* Description */}
        <div className="mb-5">
          <label className="block text-sm font-semibold text-gray-800 mb-1">
            Description
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe the travel experience..."
            rows={3}
            className="w-full bg-gray-100 rounded-md px-4 py-2.5 text-sm text-gray-700 focus:outline-none focus:ring-1 focus:ring-cyan-400 resize-none"
          />
        </div>

        {/* Footer Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-3 border border-red-400 rounded-md text-sm text-red-500 hover:bg-red-50 transition-colors"
          >
            <MdDelete className="text-base" />
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-md text-sm font-semibold transition-colors"
          >
            <MdOutlineSave className="text-base" />
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
