"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface BtnProps {
  href: string;
  label: string;
}

export default function Btn({ href, label }: BtnProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link href={href} className={`btn ${isActive ? "active" : ""}`}>
      {label}
    </Link>
  );
}
