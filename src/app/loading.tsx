import React from "react";

export default function loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-blue-600 border-dashed rounded-full animate-spin mx-auto mb-4"></div>
        <p className="text-xl font-semibold text-gray-700 animate-pulse">
          Loading products...
        </p>
      </div>
    </div>
  );
}
