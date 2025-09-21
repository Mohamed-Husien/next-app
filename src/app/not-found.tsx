import Image from "next/image";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <div className="w-64 h-64 relative mb-6">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTksk08zE0-KIhNxAoRgEVFqVo4YlivwUGGqQ&s"
          alt="Not Found"
          fill
          className="object-contain"
        />
      </div>

      <h1 className="text-4xl font-bold text-gray-800 mb-2">
        ⚠️ Page Not Found
      </h1>

      <p className="text-gray-600 text-center max-w-md mb-6">
        The page you are looking for does not exist or has been moved. Please
        check the URL or go back to the homepage.
      </p>

      <a
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
      >
        Go Home
      </a>
    </div>
  );
}
