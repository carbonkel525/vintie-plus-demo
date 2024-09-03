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
    <main className="flex flex-row items-start justify-center">
      <div className="w-[400px] h-screen border-4 bg-[#555961] mx-auto flex justify-center flex-col">
        <div className="mx-auto">
          <div className="w-[350px] h-[580px] bg-[#4b4f56] rounded-md border-l-4 border-[#3ae6b6] mt-3">
            <div className="flex flex-row p-5">
              <h1 className="text-url-blue">T-shirt Ralph Lauren</h1>
            </div>
            <div>
              <div className="flex">
                <div>
                  <div className="flex">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="📍"
                      width="17px"
                    />
                    <h2 className="font-bold text-white">Location </h2>
                  </div>
                  <div className="mt-2 text-white">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="Italien (IT)"
                      width="60px"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex ml-[7.5px]">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="👕"
                      width="17px"
                    />
                    <h2 className="font-bold text-white">Brand </h2>
                  </div>
                  <div className="mt-2 ml-[7.5px] text-white">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="Ralph Lauren"
                      width="70px"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="📏"
                      width="17px"
                    />
                    <h2 className="font-bold text-white">Size </h2>
                  </div>
                  <div className="mt-2 text-white">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="s"
                      width="16px"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="flex mt-5">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="🕐"
                      width="17px"
                    />
                    <h2 className="font-bold text-white">Posted </h2>
                  </div>
                  <div className="mt-2 text-white">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="9 seconden geleden"
                      width="100px"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex mt-5 ml-[-8px]">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="⭐"
                      width="17px"
                    />
                    <h2 className="font-bold text-white">Rating </h2>
                  </div>
                  <div className="mt-2 text-white ml-[-8px]">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="⭐⭐⭐⭐⭐"
                      width="70px"
                    />
                  </div>
                </div>
                <div className="ml-1">
                  <div className="flex mt-5">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="📦"
                      width="25px"
                    />
                    <h2 className="font-bold text-white">Condition </h2>
                  </div>
                  <div className="mt-2 text-white">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="Very good condition"
                      width="100px"
                    />
                  </div>
                </div>
              </div>
              <div className="flex">
                <div>
                  <div className="flex mt-5">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="💶"
                      width="25px"
                    />
                    <h2 className="font-bold text-white">Price </h2>
                  </div>
                  <div className="mt-2 text-white">
                    <TextWithBackground
                      bgColor="#37393e"
                      text="10|11.2 EUR"
                      width="60px"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-5 mt-3">
                <div className="flex">
                  <Image
                    alt="picture 1"
                    src="/picture1.jpeg"
                    className="rounded-md mr-2"
                    width={200}
                    height={300}
                  />
                  <div className="flex flex-col">
                    <div className="overflow-hidden mb-2 mr-2">
                      <Image
                        alt="picture 1"
                        src="/picture2.jpg"
                        className="rounded-md"
                        height={150}
                        width={200}
                      />
                    </div>
                    <div className="overflow-hidden mr-2">
                      <Image
                        alt="picture 1"
                        src="/picture3.jpg"
                        className="rounded-md"
                        height={150}
                        width={200}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center">
            <button className="w-20 h-7 mt-2 text-xs rounded bg-[#838793] opacity-80 text-white text-center flex items-center justify-center">
              🔎Link
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
            <button className="w-28 h-7 mt-2 text-xs rounded bg-[#838793] ml-2 opacity-80 text-white text-center flex items-center justify-center">
              <div className="mb-1">📨</div>
              <div>Message</div>
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
            <button className="w-20 h-7 mt-2 text-xs rounded bg-[#838793] ml-2 opacity-80 text-white text-center flex items-center justify-center">
              💸Buy
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
            <button
              onClick={handleAutobuyClick}
              className="w-20 h-7 mt-2 text-xs rounded bg-[#41d277] ml-2 opacity-80 text-white text-center flex items-center justify-center"
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
