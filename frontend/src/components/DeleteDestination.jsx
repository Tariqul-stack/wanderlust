"use client";
import React from "react";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import { PiWarningFill } from "react-icons/pi";

const DeleteDestination = ({ destinationName, onClose, onDelete }) => {
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl w-full max-w-lg p-8 relative">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 transition-colors"
        >
          <IoClose className="text-2xl" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-4 mb-5">
          <div className="bg-red-100 p-3 rounded-full">
            <PiWarningFill className="text-red-500 text-2xl" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Delete Travel Package
          </h2>
        </div>

        {/* Message */}
        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Are you sure you want to delete{" "}
          <span className="font-bold text-gray-900">
            &quot;{destinationName}&quot;
          </span>
          ? This action cannot be undone and will permanently remove this travel
          package from the system.
        </p>

        {/* Buttons */}
        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="flex items-center gap-2 px-6 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-semibold transition-colors"
          >
            <MdDelete className="text-base" />
            Delete Package
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDestination;
