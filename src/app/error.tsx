"use client";
import React from "react";
export default function error() {
  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-[200px] bg-red-50 border border-red-300 rounded-md">
      <h2 className="text-red-600 text-2xl font-bold mb-2">
        ⚠️ Something went wrong
      </h2>
      <p className="text-red-700 text-center">
        We couldn’t load the data. Please try again later.
      </p>
    </div>
  );
}
