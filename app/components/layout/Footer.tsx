import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-linear-to-b from-(--color-pink-light) to-primary-white py-8 md:py-12">
      <div className="w-[90%] max-w-7xl mx-auto">
        {/* Logo and Title */}
        <div className="flex items-center justify-start gap-3 md:gap-4 mb-6 md:mb-8">
          <Image
            src="/footer-icon.svg"
            alt="هم‌تپش"
            width={60}
            height={60}
            className="w-12 h-12 md:w-22 md:h-22"
            quality={100}
            loading="lazy"
          />
          <h2 className="text-4xl-c  font-bold text-primary">هم‌تپش</h2>
        </div>

        {/* Description Text */}
        <div className="mb-8 md:mb-12 space-y-4 text-right">
          <p className="text-lg-c leading-relaxed text-black">
            هم‌تپش در راستای ارتقای سلامت بارداری و ایفای مسئولیت اجتماعی خود
            اپلیکیشن را به صورت رایگان در اختیار مادران باردار قرار داده است.
          </p>
          <p className="text-lg-c leading-relaxed text-black">
            ما در هم‌تپش برای قدردانی از تلاش روزانه‌ی مادران در مسیر یک بارداری
            سالم هدایای ویژه‌ای را در فروشگاه نینی لیست برای شما در نظر گرفته
            ایم.
          </p>
        </div>

        {/* Links and Contact Info */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Right Column - Links */}
          <div className="space-y-4 md:space-y-6">
            <ul className="space-y-3 md:space-y-4 text-right">
              <li>
                <a
                  href="#download-section"
                  className="text-base-c  text-black hover:text-primary transition-colors duration-300 inline-block"
                >
                  دانلود اپلیکیشن
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-base-c  text-black hover:text-primary transition-colors duration-300 inline-block"
                >
                  سوالات متداول
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-c  text-black hover:text-primary transition-colors duration-300 inline-block"
                >
                  قوانین و مقررات
                </a>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-3 md:space-y-4 text-right">
              <li>
                <a
                  href="#"
                  className="text-base-c  text-black hover:text-primary transition-colors duration-300 inline-block"
                >
                  فروشگاه نی نی لیست
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-base-c  text-black hover:text-primary transition-colors duration-300 inline-block"
                >
                  بلاگ
                </a>
              </li>
            </ul>
          </div>
          <div className="space-y-4 md:space-y-6 col-span-2">
            {/* Contact Information */}
            <div className="space-y-4 md:space-y-5  ">
              {/* Address */}
              <div className="flex items-start gap-3 text-right">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12 13.43C13.7231 13.43 15.12 12.0331 15.12 10.31C15.12 8.58685 13.7231 7.19 12 7.19C10.2769 7.19 8.88 8.58685 8.88 10.31C8.88 12.0331 10.2769 13.43 12 13.43Z"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M3.62 8.49C5.59 -0.169999 18.42 -0.159999 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.39 20.54C5.63 17.88 2.47 13.57 3.62 8.49Z"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <p className="text-base-c  text-black leading-relaxed flex-1">
                  تهران، بلوار تیموری، تقاطع شهید ابراهیمی، پلاک ۵۸ ساختمان
                  فناوری دانشگاه شریف، طبقه سوم
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3 text-right">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M21.97 18.33C21.97 18.69 21.89 19.06 21.72 19.42C21.55 19.78 21.33 20.12 21.04 20.44C20.55 20.98 20.01 21.37 19.4 21.62C18.8 21.87 18.15 22 17.45 22C16.43 22 15.34 21.76 14.19 21.27C13.04 20.78 11.89 20.12 10.75 19.29C9.6 18.45 8.51 17.52 7.47 16.49C6.44 15.45 5.51 14.36 4.68 13.22C3.86 12.08 3.2 10.94 2.72 9.81C2.24 8.67 2 7.58 2 6.54C2 5.86 2.12 5.21 2.36 4.61C2.6 4 2.98 3.44 3.51 2.94C4.15 2.31 4.85 2 5.59 2C5.87 2 6.15 2.06 6.4 2.18C6.66 2.3 6.89 2.48 7.07 2.74L9.39 6.01C9.57 6.26 9.7 6.49 9.79 6.71C9.88 6.92 9.93 7.13 9.93 7.32C9.93 7.56 9.86 7.8 9.72 8.03C9.59 8.26 9.4 8.5 9.16 8.74L8.4 9.53C8.29 9.64 8.24 9.77 8.24 9.93C8.24 10.01 8.25 10.08 8.27 10.16C8.3 10.24 8.33 10.3 8.35 10.36C8.53 10.69 8.84 11.12 9.28 11.64C9.73 12.16 10.21 12.69 10.73 13.22C11.27 13.75 11.79 14.24 12.32 14.69C12.84 15.13 13.27 15.43 13.61 15.61C13.66 15.63 13.72 15.66 13.79 15.69C13.87 15.72 13.95 15.73 14.04 15.73C14.21 15.73 14.34 15.67 14.45 15.56L15.21 14.81C15.46 14.56 15.7 14.37 15.93 14.25C16.16 14.11 16.39 14.04 16.64 14.04C16.83 14.04 17.03 14.08 17.25 14.17C17.47 14.26 17.7 14.39 17.95 14.56L21.26 16.91C21.52 17.09 21.7 17.3 21.81 17.55C21.91 17.8 21.97 18.05 21.97 18.33Z"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                    />
                  </svg>
                </div>
                <a
                  href="tel:02190005201"
                  className="text-base-c  text-black hover:text-primary transition-colors duration-300"
                >
                  شماره پشتیبانی: ۹۰۰۰۵۲۰۱-۰۲۱
                </a>
              </div>

              {/* Instagram */}
              <div className="flex items-center gap-3 text-right">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-6 h-6 md:w-7 md:h-7 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12 15.5C13.933 15.5 15.5 13.933 15.5 12C15.5 10.067 13.933 8.5 12 8.5C10.067 8.5 8.5 10.067 8.5 12C8.5 13.933 10.067 15.5 12 15.5Z"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M17.6361 7H17.6477"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <a
                  href="https://instagram.com/hamtapesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base-c  text-black hover:text-primary transition-colors duration-300"
                >
                  اینستاگرام هم تپش
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-6 md:pt-8  ">
          <p className="text-sm-c   text-gray-600 leading-relaxed">
            کلیه حقوق مادی و معنوی این وبسایت برای فروشگاه اینترنتی نی نی لیست
            محفوظ می‌باشد و هرگونه کپی برداری پیگرد قانونی دارد
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
