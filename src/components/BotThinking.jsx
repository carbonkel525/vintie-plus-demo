"use client";

import React from "react";
import Image from "next/image";

function BotThinking() {
  return (
    <div className="p-5 flex flex-row bg-[#686990] bg-opacity-55 border-l-4 border-[#282bc8] mt-3">
      <div className="w-[40px] h-[40px] relative">
        <Image
          alt="vintieplus logo"
          src="/Vintup_Logo_Small.png"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
      </div>
      <div className="ml-2">
        <div className="flex">
          <h1 className="text-url-blue">VintiePlus Bot</h1>
          <h1 className="text-white text-opacity-65 text-xs mt-1 ml-2">
            vandaag om 18:10
          </h1>
        </div>
        <h2 className="text-white flex text-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            color="currentColor"
            fill="none"
          >
            <path
              d="M11.9959 12H12.0049"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M17.9998 12H18.0088"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.99981 12H6.00879"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          VintiePlus Bot is aan het denken...
        </h2>
        <h3 className="text-white text-xs flex mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="12"
            height="12"
            color="currentColor"
            fill="none"
            className="mr-1 mt-[2px]"
          >
            <path
              d="M21.544 11.045C21.848 11.4713 22 11.6845 22 12C22 12.3155 21.848 12.5287 21.544 12.955C20.1779 14.8706 16.6892 19 12 19C7.31078 19 3.8221 14.8706 2.45604 12.955C2.15201 12.5287 2 12.3155 2 12C2 11.6845 2.15201 11.4713 2.45604 11.045C3.8221 9.12944 7.31078 5 12 5C16.6892 5 20.1779 9.12944 21.544 11.045Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
            <path
              d="M15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12Z"
              stroke="currentColor"
              stroke-width="1.5"
            />
          </svg>
          Alleen jij kunt dit zien.
          <h4 className="text-url-blue ml-1">Verwijder bericht</h4>
        </h3>
      </div>
    </div>
  );
}

export default BotThinking;
