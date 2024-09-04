"use client";

import React, { useState, useEffect } from "react";
import TextWithBackground from "@/components/TextWithBackground";
import Image from "next/image";
import BotThinking from "@/components/BotThinking";
import FetchingStatus from "@/components/FetchingStatus";
import SuccessStatus from "@/components/SuccessStatus";

export default function Home() {
  const [showBotThinking, setShowBotThinking] = useState(false);
  const [currentStatusIndex, setCurrentStatusIndex] = useState(0);

  const statusSteps = [
    { emoji: "🔍", status: "Fetching required information..." },
    { emoji: "🚛", status: "Fetching shipping options..." },
    { emoji: "💸", status: "Finalizing transaction..." },
    { emoji: "💶", status: "Confirming payment..." },
  ];

  const handleAutobuyClick = () => {
    setShowBotThinking(true);
    setTimeout(() => {
      setShowBotThinking(false);
      setCurrentStatusIndex(1); // Start bij de eerste status na BotThinking
    }, 1500); // 1.5 seconden voor BotThinking
  };

  useEffect(() => {
    if (currentStatusIndex > 0 && currentStatusIndex <= statusSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStatusIndex((prevIndex) => prevIndex + 1);
      }, 1500); // 1500 ms voor elke status
      return () => clearTimeout(timer);
    }
  }, [currentStatusIndex, statusSteps.length]);

  return (
    <main className="flex flex-row items-center mobile-m:justify-center mobile-m:w-screen">
      <div className="w-[650px] mobile-m:w-[355px] border-4 bg-[#555961] mx-auto flex justify-center flex-col mobile-m:h-screen">
        <div className="mx-auto">
          <div className="w-[500px] mobile-m:w-[290px] h-[580px] mobile-m:h-[480px] bg-[#4b4f56] rounded-md border-l-4 border-[#3ae6b6] mt-3 text-xs">
            <div className="flex flex-row p-5">
              <h1 className="text-url-blue text-sm">T-shirt Ralph Lauren</h1>
            </div>
            <div className="grid grid-cols-3 gap-4 mobile-m:grid-cols-2 mobile-m:gap-2 ">
              {/* First row on mobile: Location and Brand */}
              <div>
                <div className="flex">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="📍"
                    width="25px"
                  />
                  <h2 className="font-bold text-white">Location</h2>
                </div>
                <div className="mt-2 text-white">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="Italien (IT)"
                    width="80px"
                  />
                </div>
              </div>

              <div className="mobile-m:ml-[-45px]">
                <div className="flex">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="👕"
                    width="25px"
                  />
                  <h2 className="font-bold text-white">Brand</h2>
                </div>
                <div className="mt-2 text-white">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="Ralph Lauren"
                    width="98px"
                  />
                </div>
              </div>

              {/* Second row on mobile: Size and Posted */}
              <div className="laptop:ml-[-45px] desktop:ml-[-45px]">
                <div className="flex mobile-m:ml-[45px]">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="📏"
                    width="25px"
                  />
                  <h2 className="font-bold text-white">Size</h2>
                </div>
                <div className="mt-2 text-white mobile-m:ml-[45px]">
                  <TextWithBackground bgColor="#37393e" text="s" width="20px" />
                </div>
              </div>

              <div className="mobile-m:ml-[-45px]">
                <div className="flex">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="🕐"
                    width="25px"
                  />
                  <h2 className="font-bold text-white">Posted</h2>
                </div>
                <div className="mt-2 text-white">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="9 seconden geleden"
                    width="148px"
                  />
                </div>
              </div>

              {/* Third row on mobile: Rating and Condition */}
              <div>
                <div className="flex">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="🕐"
                    width="25px"
                  />
                  <h2 className="font-bold text-white">Rating</h2>
                </div>
                <div className="mt-2 text-white">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="⭐⭐⭐⭐⭐"
                    width="95px"
                  />
                </div>
              </div>

              <div className="mobile-m:ml-[-45px] ml-[-45px]">
                <div className="flex">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="📦"
                    width="25px"
                  />
                  <h2 className="font-bold text-white">Condition</h2>
                </div>
                <div className="mt-2 text-white">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="Very good condition"
                    width="150px"
                  />
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="flex">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="💶"
                    width="25px"
                  />
                  <h2 className="font-bold text-white">Price</h2>
                </div>
                <div className="mt-2 text-white">
                  <TextWithBackground
                    bgColor="#37393e"
                    text="10|11.2 EUR"
                    width="90px"
                  />
                </div>
              </div>
            </div>

            {/* Images section: show only one image on mobile */}
            <div className="ml-5 mt-3">
              <div className="flex">
                <Image
                  alt="picture 1"
                  src="/picture1.jpeg"
                  className="rounded-md mr-2 mobile-m:hidden"
                  width={200}
                  height={300}
                />
                <div className="flex flex-col">
                  <div className="overflow-hidden mb-2">
                    <Image
                      alt="picture 2"
                      src="/picture2.jpg"
                      className="rounded-md mobile-m:hidden"
                      height={150}
                      width={200}
                    />
                  </div>
                  <div className="overflow-hidden">
                    <Image
                      alt="picture 3"
                      src="/picture3.jpg"
                      className="rounded-md mobile-m:hidden"
                      height={150}
                      width={200}
                    />
                  </div>
                </div>
                <Image
                  alt="picture mobile"
                  src="/picture1.jpeg"
                  className="rounded-md mr-2 hidden mobile-m:block"
                  width={110}
                  height={200}
                />
                <div>
                  <Image
                    alt="picture 3"
                    src="/picture2.jpg"
                    className="rounded-md hidden mobile-m:block mobile-m:h-[70px]"
                    height={200}
                    width={110}
                  />
                  <Image
                    alt="picture 3"
                    src="/picture3.jpg"
                    className="rounded-md hidden mobile-m:block mobile-m:h-[70px] mt-2"
                    height={200}
                    width={110}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex mobile-m:grid mobile-m:grid-cols-2">
            <button className="w-24 h-8 mt-2 text-sm rounded bg-[#838793] opacity-80 text-white text-center flex items-center justify-center">
              🔎Link
              <Image
                src="/svg/buy-icon.svg"
                alt="buy icon"
                width={16}
                height={16}
                className="ml-1"
              />
            </button>
            <button className="w-32 h-8 mt-2 text-sm rounded bg-[#838793] opacity-80 text-white text-center flex items-center justify-center laptop:ml-2 desktop:ml-2">
              <div className="mb-1">📨</div>
              <div>Message</div>
              <Image
                src="/svg/buy-icon.svg"
                alt="buy icon"
                width={16}
                height={16}
                className="ml-1"
              />
            </button>
            <div className="p-[-2]">
              <button className="w-24 h-8 mt-2 text-sm rounded bg-[#838793] opacity-80 text-white text-center flex items-center justify-center ">
                💸Buy
                <Image
                  src="/svg/buy-icon.svg"
                  alt="buy icon"
                  width={16}
                  height={16}
                  className="ml-1"
                />
              </button>
            </div>
            <button
              onClick={handleAutobuyClick}
              className="w-24 h-8 mt-2 text-sm rounded bg-[#41d277] opacity-80 text-white text-center flex items-center justify-center laptop:ml-2 desktop:ml-2"
            >
              🛒Autobuy
            </button>
          </div>
        </div>

        {showBotThinking && <BotThinking />}
        {currentStatusIndex > 0 && currentStatusIndex <= statusSteps.length && (
          <FetchingStatus
            emoji={statusSteps[currentStatusIndex - 1].emoji}
            status={statusSteps[currentStatusIndex - 1].status}
          />
        )}
        {currentStatusIndex === statusSteps.length + 1 && <SuccessStatus />}
      </div>
    </main>
  );
}
