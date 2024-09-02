"use client"

import React from "react";
import TextWithBackground from "@/components/TextWithBackground";
import Image from "next/image";

function FetchingStatus({emoji, status}) {
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
        <div className="w-[300px] h-[90px] bg-[#4b4f56] rounded-md border-l-4 border-[#3ae6b6] mt-3">
          <h1 className="p-3 text-xs font-semibold text-white">
            Autobuy status
          </h1>
          <div className="ml-[-8px] flex">
            <TextWithBackground bgColor="#37393e" text={emoji} width="23px" />
            <h2 className="text-xs text-white p-1">{status}</h2>
          </div>
        </div>
        <h3 className="text-white text-xs flex mt-1">
          Alleen jij kunt dit zien.
          <span className="text-url-blue ml-1">Verwijder bericht</span>
        </h3>
      </div>
    </div>
  );
}

export default FetchingStatus;