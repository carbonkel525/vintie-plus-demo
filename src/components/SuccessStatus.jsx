"use client";

import React from "react";
import TextWithBackground from "@/components/TextWithBackground";
import Image from "next/image";

function SuccessStatus() {
  return (
    <div className="p-4 flex flex-row bg-[#686990] bg-opacity-55 border-l-4 border-[#282bc8] mt-2">
      <div>
        <div>
          <div className="flex clear-start">
            <Image
              alt="vintieplus logo"
              src="/Vintup_Logo_Small.png"
              width={40}
              height={40}
              className="rounded-full mr-2"
            />
            <h1 className="text-url-blue">VintiePlus Bot</h1>
            <h1 className="text-white text-opacity-65 text-xs mt-1 ml-2">
              vandaag om 18:10
            </h1>
          </div>
          <div className="w-[265px] h-[110px] laptop:h-[120px] bg-[#4b4f56] rounded-md border-l-4 border-[#3ae6b6] ml-12">
            <h1 className="pt-3 ml-3 text-xs font-semibold text-white">
              The item was successfully bought
            </h1>
            <h1 className="ml-3 mt-1 text-xs text-white">
              Head over to your Vinted account to see it.
            </h1>
            <h1 className="ml-3 mt-3 text-xs font-semibold text-white">
              Selected Pickup point:
            </h1>
            <h1 className="ml-3 mt-1 text-xs text-white">
              Mondial: ALBERT HEIJN - GROENPLAATS ANTWERPEN
            </h1>
          </div>
          <button className="w-48 h-8 mt-2 text-sm rounded bg-[#838793] opacity-80 text-white text-center flex items-center justify-center ml-12">
            📈View Transaction
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              color="currentColor"
              fill="none"
              className="w-4 h-4 ml-1"
            >
              <path
                d="M11.1004 3.00208C7.4515 3.00864 5.54073 3.09822 4.31962 4.31931C3.00183 5.63706 3.00183 7.75796 3.00183 11.9997C3.00183 16.2415 3.00183 18.3624 4.31962 19.6801C5.6374 20.9979 7.75836 20.9979 12.0003 20.9979C16.2421 20.9979 18.3631 20.9979 19.6809 19.6801C20.902 18.4591 20.9916 16.5484 20.9982 12.8996"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.4803 3.51751L14.931 9.0515M20.4803 3.51751C19.9863 3.023 16.6587 3.0691 15.9552 3.0791M20.4803 3.51751C20.9742 4.01202 20.9282 7.34329 20.9182 8.04754"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <h3 className="text-white text-xs flex mt-1 ml-12">
            Alleen jij kunt dit zien.
            <span className="text-url-blue ml-1">Verwijder bericht</span>
          </h3>
        </div>
      </div>
    </div>
  );
}

export default SuccessStatus;
