import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div>
      <section className=" h-auto md:h-screen relative overflow-hidden">
        <div className="bg-primary">
          <div className="absolute top-1/2 -translate-y-[60%] right-[5%] text-white text-center max-w-[55%]">
            <h1 className="font-bold leading-[1.2] mb-4 text-white text-xl mt-10">
              هر روز بارداری مهمه!
            </h1>
            <p className="text-lg text-white font-normal leading-[1.2] mb-8">
              هم‌تپش همراه روزانه تو، برای یک بارداری سالم...
            </p>
            <a
              className="text-md mt-1"
              href="#download-section"
              aria-label="دانلود اپلیکیشن هم‌تپش"
            >
              <p className="font-bold leading-[1.2] mx-auto text-pink-500 no-underline rounded-[10px] p-2 md:p-4 bg-white transition-all duration-300 ease-in-out max-w-[50%] inline-block mt-1 text-md">
                دانلود هم‌تپش
              </p>
            </a>
          </div>
          <div className="absolute top-1/2 left-0 -translate-y-1/2 z-10 max-w-[380px] w-[30%]">
            <Image
              id="hero-img"
              src="/hero-phone.svg"
              alt="هم‌تپش اپلیکیشن"
              width={380}
              height={600}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="circle circle-1 h-full opacity-0.5"></div>
          <div className="circle circle-2 h-[85%] opacity-0.3 left-[8px]"></div>
          <div className="circle circle-3"></div>
          <div className="circle circle-4"></div>
          <div className="circle-5 absolute top-1/2 left-8 -translate-y-1/2 h-[70%] aspect-square rounded-full bg-[rgba(255,109,158,0.69)] blur-[50px] z-1 pointer-events-none"></div>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;
