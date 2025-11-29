import Image from "next/image";
import React from "react";

const HealthSection: React.FC = () => {
  const stats = [
    {
      percent: "۴۵%",
      text: "کاهش خطر دیابت با ورزش‌های ایمن دوران بارداری",
      bgColor: "bg-purple-light",
      shadow: "shadow-[-2px_3px_7px_2px_#f3c3fc]",
    },
    {
      percent: "۷۰%",
      text: "کاهش احتمال نقص عصبی جنین با مصرف کافی فولیک اسید",
      bgColor: "bg-blue-light",
      shadow: "shadow-[-2px_3px_7px_2px_#A5D7EC]",
    },
    {
      percent: "۳۲%",
      text: "کاهش تولد کم وزن با وزن گیری مناسب در بارداری",
      bgColor: "bg-green-light",
      shadow: "shadow-[-2px_3px_7px_2px_#A9EAB8]",
    },
  ];

  return (
    <section className="relative py-8 m-6 rounded-2xl overflow-hidden health-section-gradient">
      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <div className="container mx-auto px-4">
          <div className="flex items-center min-h-[500px]">
            <div className="flex-1   pr-8">
              <h2 className="text-4xl font-bold text-primary leading-tight">
                سلامت مادر، رشد سالم جنین
              </h2>
              <p className="text-3xl text-gray-600 leading-relaxed max-w-2xl">
                هم‌تپش در راستای ارتقاء سلامت بارداری و ایفای مسئولیت اجتماعی،
                اپلیکیشن خود را به صورت رایگان در اختیار جامعه مادران باردار
                قرار داده است.
              </p>
            </div>
            <div className="relative shrink-0 w-[500px] h-[500px]">
              {/* Circle 1 (45% - Purple) - Top Right */}
              <div
                className={`${stats[0].bgColor} rounded-full w-[250px] aspect-square flex flex-col items-center justify-center p-8 text-center ${stats[0].shadow} absolute top-0 right-0`}
              >
                <span className="text-5xl font-bold text-gray-800 mb-4">
                  {stats[0].percent}
                </span>
                <p className="text-sm text-gray-700 leading-tight">
                  {stats[0].text}
                </p>
              </div>

              {/* Circle 2 (70% - Blue) - Bottom Right, smaller, shifted left */}
              <div
                className={`${stats[1].bgColor} rounded-full w-[220px] aspect-square flex flex-col items-center justify-center p-6 text-center ${stats[1].shadow} absolute bottom-0 right-8`}
              >
                <span className="text-4xl font-bold text-gray-800 mb-3">
                  {stats[1].percent}
                </span>
                <p className="text-xs text-gray-700 leading-tight">
                  {stats[1].text}
                </p>
              </div>

              {/* Circle 3 (32% - Green) - Left Center, same size as Circle 1 */}
              <div
                className={`${stats[2].bgColor} rounded-full w-[250px] aspect-square flex flex-col items-center justify-center p-8 text-center ${stats[2].shadow} absolute left-0 top-1/2 -translate-y-1/2`}
              >
                <span className="text-5xl font-bold text-gray-800 mb-4">
                  {stats[2].percent}
                </span>
                <p className="text-sm text-gray-700 leading-tight">
                  {stats[2].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet Layout */}
      <div className="hidden md:block lg:hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {/* Text Section - Top */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl-c font-bold text-primary leading-tight">
                سلامت مادر، رشد سالم جنین
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-2xl mx-auto">
                هم‌تپش در راستای ارتقاء سلامت بارداری و ایفای مسئولیت اجتماعی،
                اپلیکیشن خود را به صورت رایگان در اختیار جامعه مادران باردار
                قرار داده است.
              </p>
            </div>

            {/* Stats Circles - Same positioning as desktop */}
            <div className="relative shrink-0 w-full max-w-[500px] h-[500px] mx-auto">
              {/* Circle 1 (45% - Purple) - Top Right */}
              <div
                className={`${stats[0].bgColor} rounded-full w-[250px] aspect-square flex flex-col items-center justify-center p-8 text-center ${stats[0].shadow} absolute top-0 right-0`}
              >
                <span className="text-5xl font-bold text-gray-800 mb-4">
                  {stats[0].percent}
                </span>
                <p className="text-sm text-gray-700 leading-tight">
                  {stats[0].text}
                </p>
              </div>

              {/* Circle 2 (70% - Blue) - Bottom Right, smaller, shifted left */}
              <div
                className={`${stats[1].bgColor} rounded-full w-[220px] aspect-square flex flex-col items-center justify-center p-6 text-center ${stats[1].shadow} absolute bottom-0 right-8`}
              >
                <span className="text-4xl font-bold text-gray-800 mb-3">
                  {stats[1].percent}
                </span>
                <p className="text-xs text-gray-700 leading-tight">
                  {stats[1].text}
                </p>
              </div>

              {/* Circle 3 (32% - Green) - Left Center, same size as Circle 1 */}
              <div
                className={`${stats[2].bgColor} rounded-full w-[250px] aspect-square flex flex-col items-center justify-center p-8 text-center ${stats[2].shadow} absolute left-0 top-1/2 -translate-y-1/2`}
              >
                <span className="text-5xl font-bold text-gray-800 mb-4">
                  {stats[2].percent}
                </span>
                <p className="text-sm text-gray-700 leading-tight">
                  {stats[2].text}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            {/* Text Section */}
            <div className="text-center space-y-3">
              <h2 className="text-4xl-c font-bold text-primary leading-tight">
                سلامت مادر، رشد سالم جنین
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed">
                هم‌تپش در راستای ارتقاء سلامت بارداری و ایفای مسئولیت اجتماعی،
                اپلیکیشن خود را به صورت رایگان در اختیار جامعه مادران باردار
                قرار داده است.
              </p>
            </div>

            {/* Stats Circles - Vertical Stack */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`${stat.bgColor} rounded-full w-full max-w-[230px] mx-auto aspect-square flex flex-col items-center justify-center p-6 text-center ${stat.shadow}`}
                >
                  <span className="text-4xl font-bold text-gray-800 mb-3">
                    {stat.percent}
                  </span>
                  <p className="text-sm text-gray-700 leading-tight px-2">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthSection;
