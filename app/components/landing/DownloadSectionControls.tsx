"use client";

import { useState } from "react";
import Image from "next/image";

type Platform = "android" | "ios";

const DownloadSectionControls: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>("android");

  const androidLinks = [
    {
      id: "myket",
      label: "مایکت",
      icon: "/myket.svg",
      href: "#",
    },
    {
      id: "cafebazaar",
      label: "کافه بازار",
      icon: "/Cafebazaar.svg",
      href: "#",
    },
    {
      id: "googleplay",
      label: "گوگل پلی",
      icon: "/playStore.svg",
      href: "#",
    },
    {
      id: "direct",
      label: "لینک مستقیم",
      icon: "/Data-Transfer.svg",
      href: "#",
    },
  ];

  const iosLinks = [
    {
      id: "sibapp",
      label: "سیب اپ",
      icon: "/sibApp.svg",
      href: "#",
    },
    {
      id: "anardoni",
      label: "اناردونی",
      icon: "/anardoni.svg",
      href: "#",
    },
    {
      id: "pwa",
      label: "وب اپلیکیشن",
      icon: "/pwa.svg",
      href: "#",
    },
  ];

  const currentLinks = selectedPlatform === "android" ? androidLinks : iosLinks;
  const phoneImage =
    selectedPlatform === "android" ? "/android-phone.svg" : "/ios-phone.svg";

  return (
    <>
      {/* OS Selector Buttons */}
      <div className="os-selector flex w-[90%] md:w-[50%] mx-auto bg-white p-2 gap-2 rounded-full overflow-hidden shadow-sm mb-5">
        <button
          onClick={() => setSelectedPlatform("android")}
          className={`w-1/2 text-lg-c py-1 md:py-3 flex items-center justify-center gap-2 rounded-full   font-medium transition-all duration-300 cursor-pointer  ${
            selectedPlatform === "android"
              ? "bg-pink-pastel text-white"
              : "border border-gray-200 text-gray-600"
          }`}
          aria-label="انتخاب سیستم عامل اندروید"
        >
          <svg
            className={`w-5 h-5 md:w-10 md:h-10 transition-colors duration-300 ${
              selectedPlatform === "android" ? "fill-white" : "fill-gray-600"
            }`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.6 9.47997L19.44 6.29997C19.6 5.98997 19.48 5.60997 19.18 5.44997C18.89 5.29997 18.53 5.38997 18.35 5.66997L16.47 8.90997C13.61 7.69997 10.39 7.69997 7.53 8.90997L5.65 5.66997C5.46 5.37997 5.07 5.28997 4.78 5.46997C4.5 5.64997 4.41 6.00997 4.56 6.29997L6.4 9.47997C3.3 11.25 1.28 14.44 1 18H23C22.72 14.44 20.7 11.25 17.6 9.47997ZM7 15.25C6.31 15.25 5.75 14.69 5.75 14C5.75 13.31 6.31 12.75 7 12.75C7.69 12.75 8.25 13.31 8.25 14C8.25 14.69 7.69 15.25 7 15.25ZM17 15.25C16.31 15.25 15.75 14.69 15.75 14C15.75 13.31 16.31 12.75 17 12.75C17.69 12.75 18.25 13.31 18.25 14C18.25 14.69 17.69 15.25 17 15.25Z" />
          </svg>
          اندروید
        </button>
        <button
          onClick={() => setSelectedPlatform("ios")}
          className={`w-1/2 text-lg-c py-1 md:py-3 flex items-center justify-center gap-2 rounded-full   font-medium transition-all duration-300 cursor-pointer  ${
            selectedPlatform === "ios"
              ? "bg-pink-pastel text-white"
              : "border border-gray-200 text-gray-600"
          }`}
          aria-label="انتخاب سیستم عامل iOS"
        >
          <svg
            className={`w-5 h-5 md:w-10 md:h-10 transition-colors duration-300 ${
              selectedPlatform === "ios" ? "fill-white" : "fill-gray-600"
            }`}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16.1239 2C16.2524 3.17207 15.7813 4.34695 15.0833 5.19379C14.3845 6.03871 13.2388 6.69667 12.1164 6.6091C11.9645 5.46047 12.5311 4.26418 13.1784 3.51465C13.8998 2.66973 15.1185 2.04094 16.1239 2ZM19.7466 8.82759C19.5418 8.95442 17.5771 10.1711 17.6016 12.6268C17.6273 15.5869 20.1429 16.6142 20.2798 16.6701C20.2828 16.6713 20.2853 16.6724 20.2853 16.6724C20.2841 16.676 20.2819 16.6832 20.2786 16.6936C20.2191 16.8844 19.8146 18.1803 18.9001 19.5166C18.0659 20.7353 17.2025 21.9483 15.8397 21.9736C15.1848 21.9859 14.7471 21.7965 14.2921 21.5996C13.816 21.3935 13.3209 21.1792 12.538 21.1792C11.7174 21.1792 11.199 21.4001 10.6996 21.6129C10.2673 21.7971 9.84918 21.9753 9.26149 21.9987C7.94637 22.0475 6.94473 20.6829 6.10474 19.4679C4.38567 16.9857 3.07361 12.4517 4.83735 9.3912C5.71145 7.87085 7.27673 6.90902 8.9743 6.88378C9.70655 6.87048 10.4157 7.1519 11.0362 7.39817C11.5103 7.58632 11.9327 7.75394 12.2741 7.75394C12.5813 7.75394 12.9927 7.5917 13.4724 7.40254C14.2273 7.10487 15.1513 6.74057 16.1036 6.83699C16.7557 6.86421 18.5858 7.09972 19.7606 8.81886C19.7577 8.8207 19.753 8.82361 19.7466 8.82759Z"
            />
          </svg>
          iOS
        </button>
      </div>

      {/* Links and Phone Image */}
      <div className="w-[90%] md:w-[50%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
        {/* Download Links - Right on desktop, Bottom on mobile */}
        <div className="flex flex-col gap-3 text-right order-1 md:order-1">
          {currentLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              className="flex justify-between items-center border border-gray-200 rounded-xl py-2 px-3 md:px-4 md:py-3 bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col text-right">
                <p className="text-xs-c text-gray-600">
                  {selectedPlatform === "android" && link.id !== "direct"
                    ? "دانلود از"
                    : selectedPlatform === "android" && link.id === "direct"
                    ? "دانلود با"
                    : selectedPlatform === "ios" && link.id === "pwa"
                    ? "نسخه"
                    : "دانلود از"}
                </p>
                <span className="text-sm-c font-bold  ">{link.label}</span>
              </div>
              <Image
                src={link.icon}
                alt={link.label}
                width={24}
                height={24}
                className="w-6 h-6 shrink-0"
                quality={100}
                loading="lazy"
              />
            </a>
          ))}
        </div>
        {/* Phone Image - Left on desktop, Top on mobile */}
        <div className="hidden md:flex justify-center order-2 md:order-2">
          <Image
            src={phoneImage}
            alt={`${selectedPlatform === "android" ? "Android" : "iOS"} App`}
            width={300}
            height={600}
            className="w-[60%] md:w-[80%] max-w-[230px] h-auto transition-all duration-300"
            quality={100}
            loading="lazy"
          />
        </div>
      </div>
    </>
  );
};

export default DownloadSectionControls;
