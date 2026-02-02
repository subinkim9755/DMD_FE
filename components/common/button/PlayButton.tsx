"use client";

import React from "react";
import Image from "next/image";
import playButton from "@/public/play-button.png";
import Link from "next/link";

function PlayButton({ href }: { href: string }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center"
    >
      <button
        type="button"
        className="group flex h-12 w-12 md:h-16 md:w-16 lg:h-20 lg:w-20 cursor-pointer items-center justify-center rounded-full border-0 bg-gray-500/60 p-0 transition-[background-color,transform,box-shadow] duration-200 ease-in-out hover:scale-[1.08] hover:bg-gray-600/90 hover:shadow-md active:scale-[0.98]"
        aria-label="재생"
      >
        <div className="relative flex h-8 w-8 items-center justify-center text-lg font-bold text-white md:h-10 md:w-10 md:text-xl lg:h-12 lg:w-12 lg:text-2xl">
          Go
        </div>
      </button>
    </Link>
  );
}

export default PlayButton;
