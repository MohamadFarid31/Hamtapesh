import React from "react";

const HealthSection: React.FC = () => {
  return (
    <section className="flex items-center justify-between gap-8 p-8 rtl bg-[linear-gradient(270deg,#FEEFF4,#FFFFFF)] max-h-[650px] mx-[16px] rounded-[24px] health-section">
      <div className="health-text opacity-0 flex-1 min-w-auto xs:min-w-[43%] md:min-w-[260px] basis-[48%] translate-y-[30px]">
        <h3 className="text-lg mb-2 md:mb-8 text-right font-bold leading-[1.2] text-pink-500">
          سلامت مادر، رشد سالم جنین
        </h3>
        <p className="text-[#444] text-md text-right font-bold leading-normal [word-spacing:0.1rem] md:[word-spacing:.4rem]">
          هم‌تپش در راستای ارتقاء سلامت بارداری و ایفای مسئولیت اجتماعی،
          اپلیکیشن خود را به صورت رایگان در اختیار جامعه مادران باردار قرار داده
          است.
        </p>
      </div>

      <div className="circle-wrapper">
        <div className="health-circle pink bg-pink-200 w-[40%] shadow-[-2px_3px_7px_2px_#f3c3fc]">
          <span className="percent text-md font-bold mb-1.5 rtl">٪۴۵</span>
          <p className="text-[6px] xs:text-xs leading-[1.4] m-0 rtl">
            کاهش خطر دیابت با ورزش‌های ایمن دوران بارداری
          </p>
        </div>
        <div className="health-circle text-md blue bg-blue-200 w-[42%] shadow-[-2px_3px_7px_2px_#A5D7EC]">
          <span className="percent text-md font-bold mb-1.5 rtl">٪۷۰</span>
          <p className="text-[6px] xs:text-xs leading-[1.4] m-0 rtl">
            کاهش احتمال نقص عصبی جنین با مصرف کافی فولیک اسید
          </p>
        </div>
        <div className="health-circle text-md green bg-green-200 w-[36%] shadow-[-2px_3px_7px_2px_#A9EAB8]">
          <span className="percent text-md font-bold mb-1.5 rtl">٪۳۲</span>
          <p className="text-[6px] xs:text-xs leading-[1.4] m-0 rtl">
            کاهش نوسان وزن و فشار خون سالم‌تر در بارداری
          </p>
        </div>
      </div>
    </section>
  );
};
export default HealthSection;
