import Image from "next/image";
import React from "react";

const FeaturesSection: React.FC = () => {
  const features = [
    {
      id: "nutrition",
      title: "تغذیه",
      description: "محاسبه مواد مغذی روزانه دریافت شده",
      bgColor: "bg-[rgba(239,216,245,0.64)]",
      icon: "/nutrition.png",
    },
    {
      id: "chat",
      title: "تپش‌یار",
      description:
        "به اشتراک‌گذاری سوالات و استفاده از تجربه مادران باردار دیگر",
      bgColor: "bg-pink-bg",
      icon: "/chat-desktop-view.png",
      mobileIcon: "/chat-mobile-view.png",
    },
    {
      id: "supplements",
      title: "مکمل‌های بارداری",
      description: "یادآوری روزانه مصرف مکمل‌های بارداری",
      bgColor: "bg-yellow-light",
      icon: "/supplements.png",
    },
    {
      id: "weight",
      title: "وزن",
      description: "کنترل هفته به هفته وزن‌گیری در دوران بارداری",
      bgColor: "bg-sky-light",
      icon: "/scale.png",
    },
    {
      id: "fitness",
      title: "ورزش",
      description:
        "ورزش روزانه بارداری متناسب با BMI و هفته بارداری بصورت اختصاصی",
      bgColor: "bg-mint-light",
      icon: "/fitness.png",
    },
  ];

  return (
    <section id="app-features" className="py-8 md:py-16 px-4 md:px-8 mx-auto">
      {/* Title */}
      <h2 className="text-center text-2xl md:text-4xl font-bold mb-8 md:mb-12">
        <span className="text-primary">هم‌تپش</span> چطور هر روز همراهته؟
      </h2>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className=" mx-auto">
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {/* Nutrition - col 1-2, row 1 */}
            <div
              className={`${features[0].bgColor} rounded-2xl p-6 flex items-center justify-between flex-col gap-4 col-span-2 row-span-1`}
            >
              <div className="relative shrink-0">
                <div className="absolute w-50 h-50 m-auto inset-0 rounded-full shadow-[-9px_-6px_18px_20px_var(--purple-shadow)] bg-purple-shadow opacity-50 pointer-events-none"></div>
                <Image
                  src={features[0].icon}
                  alt={features[0].title}
                  width={200}
                  height={200}
                  quality={100}
                  loading="eager"
                  unoptimized
                  className="relative z-10 w-full h-auto"
                />
              </div>
              <div className=" text-right self-start ">
                <h3 className="text-xl-c font-bold mb-2">
                  {features[0].title}
                </h3>
                <p className="text-lg-c  leading-loose">
                  {features[0].description}
                </p>
              </div>
            </div>

            {/* Chat - col 3, row 1-2 */}
            <div
              className={`${features[1].bgColor} rounded-2xl p-6 flex flex-col items-center justify-between text-center col-span-1 row-span-2`}
            >
              <div className="relative mb-4 w-full">
                <div className="absolute w-[32%] h-[50%] right-[50%] translate-x-1/2 top-[20%] bg-pink-pastel opacity-50 rounded-full shadow-[0_44px_68px_71px_var(--pink-pastel)] pointer-events-none"></div>
                <Image
                  src={features[1].icon}
                  alt={features[1].title}
                  width={300}
                  height={400}
                  quality={100}
                  loading="eager"
                  unoptimized
                  className="relative z-10 w-full h-auto"
                />
          </div>
              <div className=" text-right self-start ">
                <h3 className="text-xl-c font-bold mb-2 ">
                  {features[1].title}
                </h3>
                <p className="text-lg-c  leading-loose">
                  {features[1].description}
            </p>
          </div>
        </div>

            {/* Fitness - col 1, row 2-3 */}
            <div
              className={`${features[4].bgColor} rounded-2xl p-6 flex flex-col items-center justify-between text-center col-span-1 row-span-2`}
            >
              <div className="relative  w-full">
                <div className="absolute w-[59%] h-[60%] right-[24%] top-1/2 -translate-y-1/2  bg-green-shadow  rounded-full shadow-[2px_17px_50px_48px_var(--green-shadow)] pointer-events-none"></div>
                <Image
                  src={features[4].icon}
                  alt={features[4].title}
                  width={300}
                  height={400}
                  quality={100}
                  loading="eager"
                  unoptimized
                  className="relative z-10 w-full h-auto"
            />
          </div>
              <div className=" text-right self-start ">
                <h3 className="text-xl-c font-bold mb-2">
                  {features[4].title}
                </h3>
                <p className="text-lg-c  leading-loose">
                  {features[4].description}
            </p>
          </div>
        </div>

            {/* Supplements - col 2, row 2 */}
            <div
              className={`${features[2].bgColor} rounded-2xl p-6 flex flex-col items-center justify-between text-center col-span-1 row-span-1 overflow-hidden xl:aspect-square`}
            >
              <div className="relative mb-4 w-full">
                <div className="absolute w-[20%] h-[20%] right-[40%] translate-x-1/2 top-[30%] bg-yellow-shadow  rounded-full shadow-[-55px_20px_71px_101px_var(--yellow-shadow)] pointer-events-none"></div>
                <Image
                  src={features[2].icon}
                  alt={features[2].title}
                  width={250}
                  height={200}
                  quality={100}
                  loading="eager"
                  unoptimized
                  className="relative xl:w-50 md:w-40 z-10 m-auto  h-auto drop-shadow-[0_21px_14px_var(--yellow-shadow)] mb-6"
              />
            </div>
              <div className=" text-right self-start z-10">
                <h3 className="text-xl-c font-bold mb-2">
                  {features[2].title}
                </h3>
                <p className="text-lg-c  leading-loose">
                  {features[2].description}
            </p>
          </div>
        </div>

            {/* Weight - col 2-3, row 3 */}
            <div
              className={`${features[3].bgColor} rounded-2xl p-6 flex items-center flex-col justify-between gap-4 col-span-2 row-span-1 overflow-hidden `}
            >
              <div className="relative shrink-0">
                <div className="absolute w-50 h-50 m-auto inset-0 rounded-full shadow-[0_0_45px_59px_var(--blue-shadow)] bg-blue-shadow opacity-50 pointer-events-none"></div>
                <Image
                  src={features[3].icon}
                  alt={features[3].title}
                  width={200}
                  height={200}
                  quality={100}
                  loading="eager"
                  unoptimized
                  className="relative z-10 w-full h-auto"
                />
              </div>
              <div className=" text-right self-start z-10">
                <h3 className="text-xl-c font-bold mb-2">
                  {features[3].title}
                </h3>
                <p className="text-lg-c  leading-loose">
                  {features[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Layout */}
      <div className="lg:hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-2  grid-rows-1 gap-4">
            {/* Right Column: Nutrition, Supplements, Weight */}
            <div className="space-y-4 md:space-y-6 grid grid-rows-3 gap-1">
              {/* Nutrition */}
              <div
                className={`${features[0].bgColor}  rounded-2xl p-6 flex items-center justify-between flex-col  overflow-hidden m-0 `}
              >
                <div className="relative shrink-0">
                  <div className="absolute w-25 h-25 m-auto inset-0 rounded-full shadow-[-9px_-6px_18px_32px_var(--purple-shadow)] bg-purple-shadow opacity-50 pointer-events-none"></div>
                  <Image
                    src={features[0].icon}
                    alt={features[0].title}
                    width={50}
                    height={50}
                    quality={100}
                    loading="eager"
                    unoptimized
                    className="relative z-10 w-full h-auto"
                />
              </div>
                <div className=" text-right self-start z-10">
                  <h3 className="text-xl font-bold mb-2">
                    {features[0].title}
                  </h3>
                  <p className="text-sm">{features[0].description}</p>
            </div>
          </div>

              {/* Supplements */}
              <div
                className={`${features[2].bgColor} rounded-2xl p-6 flex flex-col items-center justify-between text-center overflow-hidden m-0`}
              >
                <div className="relative  w-full">
                  <div className="absolute w-[20%] h-[20%] right-[40%] translate-x-1/2 top-[30%] bg-yellow-shadow  rounded-full shadow-[-17px_6px_30px_65px_var(--yellow-shadow)] pointer-events-none"></div>
                  <Image
                    src={features[2].icon}
                    alt={features[2].title}
                    width={200}
                    height={150}
                    quality={100}
                    loading="eager"
                    unoptimized
                    className="relative z-10 w-25  m-auto drop-shadow-[0_21px_14px_var(--yellow-shadow)]"
                  />
                </div>
                <div className=" text-right self-start z-10 mt-6">
                  <h3 className="text-xl-c font-bold mb-2">
                    {features[2].title}
                  </h3>
                  <p className="text-lg-c  leading-loose">
                    {features[2].description}
            </p>
          </div>
        </div>

              {/* Weight */}
              <div
                className={`${features[3].bgColor} rounded-2xl p-6 flex items-center justify-between flex-col gap-1 overflow-hidden m-0 `}
              >
                <div className="relative shrink-0">
                  <div className="absolute inset-0 w-[25%] h-[25%] m-auto bg-blue-shadow rounded-full shadow-[0_3px_20px_42px_var(--blue-shadow)] pointer-events-none"></div>
                  <Image
                    src={features[3].icon}
                    alt={features[3].title}
                    width={150}
                    height={150}
                    quality={100}
                    loading="eager"
                    unoptimized
                    className="relative z-10 w-25 h-auto m-auto"
                  />
                </div>
                <div className=" text-right self-start z-10">
                  <h3 className="text-xl-c font-bold mb-2">
                    {features[3].title}
                  </h3>
                  <p className="text-lg-c  leading-loose">
                    {features[3].description}
                  </p>
              </div>
            </div>
          </div>

            {/* Left Column: Chat, Fitness */}
            <div className="space-y-4 md:space-y-6 grid grid-rows-2 gap-4 ">
              {/* Chat */}
              <div
                className={`${features[1].bgColor} rounded-2xl py-6 flex flex-col items-center justify-between text-center overflow-hidden m-0 `}
              >
                <div className="relative mb-4 w-full px-2">
                  <div className="absolute w-[50%] h-[50%] right-[50%] translate-x-1/2  top-[20%] bg-pink-pastel opacity-50 rounded-full shadow-[0_44px_68px_71px_var(--pink-pastel)] pointer-events-none"></div>
                  <Image
                    src={features[1].icon}
                    alt={features[1].title}
                    width={150}
                    height={150}
                    quality={100}
                    loading="eager"
                    unoptimized
                    className="relative z-10 w-full h-auto"
                  />
                </div>
                <div className=" text-right self-start z-10 px-6">
                  <h3 className="text-xl-c font-bold mb-2">
                    {features[1].title}
                  </h3>
                  <p className="text-lg-c  leading-loose">
                    {features[1].description}
                  </p>
                </div>
              </div>

              {/* Fitness */}
              <div
                className={`${features[4].bgColor} rounded-2xl p-6 flex flex-col items-center justify-between text-center overflow-hidden `}
              >
                <div className="relative mb-4 w-full">
                  <div className="absolute w-[50%] h-[50%] right-[25%] top-1/2 -translate-y-1/2  bg-green-shadow  rounded-full shadow-[2px_17px_50px_48px_var(--green-shadow)] pointer-events-none"></div>
                  <Image
                    src={features[4].icon}
                    alt={features[4].title}
                    width={150}
                    height={150}
                    quality={100}
                    loading="eager"
                    unoptimized
                    className="relative z-10 w-full h-auto"
                  />
                </div>
                <div className=" text-right self-start z-10">
                  <h3 className="text-xl-c font-bold mb-2">
                    {features[4].title}
                  </h3>
                  <p className="text-lg-c  leading-loose">
                    {features[4].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
