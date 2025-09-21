"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";
import React, { useState, useTransition } from "react";

export default function FilterBtn() {
  const filters = ["All", "High", "Medium", "Low"];
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [isPending, startTransition] = useTransition();

  function handleFilter(filter: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("rate", filter);

    startTransition(() => {
      router.replace(`${pathname}?${params.toString()}`);
    });
  }

  return (
    <div className="flex flex-col gap-2 mb-6">
      <div className="flex gap-4">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => handleFilter(filter.toLowerCase())}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-semibold hover:bg-blue-500 hover:text-white transition-colors duration-200"
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Loading indicator */}
      {isPending && (
        <div className="mt-2 text-blue-600 font-medium animate-pulse">
          Loading...
        </div>
      )}
    </div>
  );
}
