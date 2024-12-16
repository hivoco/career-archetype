import { Download, Share2 } from "lucide-react";
import Image from "next/image";
import React from "react";

const ThankYouScreen = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/images/cream-bg.png')",
      }}
      className="h-svh pb-16 flex flex-col justify-end gap-y-16 px-5"
    >
      <div className="flex flex-col">
        <h1 className=" text-4xl font-bold text-left text-dark-brown">
          Thank You for
          <br />
          taking the
          <br />
          quiz
        </h1>

        <Image
        className="self-end"
          priority={true}
          src={"/images/open book.png"}
          width={231}
          height={211}
          alt="open book image"
        />
      </div>

      <div className="flex justify-between w-full gap-x-2">
        {/* Download Button */}

        <button className=" text-xs font-semibold text-center bg-dark-brown w-1/2 text-white py-3 px-6 rounded-3xl flex items-center   hover:bg-brown-700 focus:outline-none">
          <Download size={16}  />
          <span className="ml-1 whitespace-nowrap">Download Report</span>
        </button>

        {/* Share Button */}
        <button className=" text-xs font-semibold text-center bg-dark-brown w-1/2 text-white py-3 px-6 rounded-3xl flex items-center  hover:bg-brown-700 focus:outline-none">
          <Share2 size={16}  />
          <span className="ml-1 whitespace-nowrap">Share Report</span>
        </button>
      </div>
    </div>
  );
};

export default ThankYouScreen;
