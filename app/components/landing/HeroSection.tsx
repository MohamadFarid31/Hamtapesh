import Image from "next/image";
import React from "react";
import AnimatedHeroCircles from "./AnimatedHeroCircles";

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full  h-screen min-h-screen overflow-x-hidden ">
      {/* Desktop layout */}
      <div className="hidden   h-full md:flex items-center ">
        <div className="relative mx-auto w-full h-full max-h-[450px]">
          <div className="relative bg-primary text-white rounded-[400px] shadow-primary-pink mx-3 min-h-[400px] flex items-center justify-between  ">
            <div className="max-w-[50%] text-center   mr-15 relative z-20">
              <h1 className="font-bold leading-[1.2] mb-4 text-5xl-c">
                هر روز بارداری مهمه!
              </h1>
              <p className="text-3xl-c leading-[1.6] opacity-95 mb-8">
                هم‌تپش همراه روزانه تو، برای یک بارداری سالم...
              </p>
              <a
                className="inline-block"
                href="#download-section"
                aria-label="دانلود اپلیکیشن هم‌تپش"
              >
                <span className="font-bold leading-[1.2] text-primary text-lg-c rounded-[10px] px-6 py-3 bg-white transition-all duration-300 ease-in-out">
                  دانلود هم‌تپش
                </span>
              </a>
            </div>
            <div className="absolute top-1/2 left-10 -translate-y-1/2 z-10 max-w-[350px] w-[30%] min-w-[300px]">
              <Image
                id="hero-img-desktop"
                src="/hero-phone.png"
                alt="هم‌تپش اپلیکیشن"
                width={350}
                height={600}
                loading="eager"
                quality={95}
                priority
                unoptimized
                className="relative z-10 w-full h-auto left-[-25px] mt-10"
              />
              <div
                className="
                    absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    w-[109%] max-w-[380px] min-w-[330px] aspect-square 
                    rounded-full
                    bg-pink-pastel/20
                    shadow-[0_0_60px_20px_rgba(240,100,150,0.4)]"
              ></div>

              {/* Circles Wrapper centered to phone */}
              <AnimatedHeroCircles variant="desktop" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden h-screen">
        <div className="relative mx-4 mt-6 h-screen">
          <div className="relative bg-primary text-white rounded-[28px] px-6 pt-8 pb-12 shadow-primary-pink text-center   min-h-100">
            <h1 className="font-bold leading-[1.2] mb-3 text-5xl-c">
              هر روز بارداری مهمه!
            </h1>
            <p className="text-3xl-c leading-[1.7] opacity-95 mb-5">
              هم‌تپش همراه روزانه تو، برای یک بارداری سالم...
            </p>
            <a
              className="inline-block"
              href="#download-section"
              aria-label="دانلود اپلیکیشن هم‌تپش"
            >
              <span className="font-bold text-lg-c leading-[1.2] text-primary rounded-[10px] px-5 py-2.5 bg-white">
                دانلود هم‌تپش
              </span>
            </a>

            {/* phone + centered rings */}
            <div className="absolute left-1/2 top-50 -translate-x-1/2 bottom-6 z-10 w-[220px] max-w-[220px] min-w-[180px]">
              <AnimatedHeroCircles variant="mobile" />
              <Image
                id="hero-img-mobile"
                src="/hero-phone.png"
                alt="هم‌تپش اپلیکیشن"
                width={220}
                height={420}
                quality={95}
                priority
                unoptimized
                loading="eager"
                className="relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default HeroSection;
