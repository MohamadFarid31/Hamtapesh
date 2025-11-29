import Image from "next/image";
import React from "react";

const AboutUsSection: React.FC = () => {
  const teamMembers = [
    {
      id: "soheil",
      name: "سهیل اشکیانی",
      specialty: "متخصص داخلی",
      description:
        "در هم‌تپش بخش مکمل‌های بارداری را ایجاد کردیم تا بتونید....",
      image: "/soheil.svg",
      borderColor: "border-purple-main",
      imagePosition: "right" as const,
      align: "start" as const,
    },
    {
      id: "elham",
      name: "الهام زادمجید",
      specialty: "متخصص تغذیه",
      description:
        "در هم‌تپش بخش مکمل‌های بارداری را ایجاد کردیم تا بتونید....",
      image: "/elham.svg",
      borderColor: "border-blue-main",
      imagePosition: "left" as const,
      align: "end" as const,
    },
    {
      id: "nadia",
      name: "نادیا مرادی",
      specialty: "متخصص ورزش‌های بارداری",
      description:
        "در هم‌تپش بخش مکمل‌های بارداری را ایجاد کردیم تا بتونید....",
      image: "/nadia.svg",
      borderColor: "border-green-main",
      imagePosition: "right" as const,
      align: "start" as const,
    },
  ];

  return (
    <section className="w-[90%] max-w-7xl mx-auto py-8 md:py-16 px-4">
      {/* Title */}
      <h2 className="text-center text-4xl  font-bold mb-8 md:mb-12">
        درباره <span className="text-primary">هم‌تپش</span>
      </h2>

      {/* Team Members */}
      <div className="flex flex-col gap-6 md:gap-9">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            id={member.id}
            className={`flex items-center gap-4 md:gap-8 ${
              member.align === "start" ? "justify-start" : "justify-end"
            } ${member.imagePosition === "left" ? "flex-row-reverse" : ""}`}
          >
            {/* Image with gradient border */}
            <div className="relative shrink-0 circle-bg">
              <div
                className={`absolute inset-0 rounded-full bg-linear-to-br ${member.borderColor} p-1 md:p-1.5`}
              >
                <div className="w-full h-full rounded-full bg-white"></div>
              </div>
              <Image
                src={member.image}
                alt={member.name}
                width={120}
                height={120}
                className="relative z-10 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                quality={100}
                loading="lazy"
              />
            </div>

            {/* Text Content */}
            <div
              className={`flex-1 ${
                member.align === "start" ? "text-right" : "text-left"
              }`}
            >
              <h3
                className={`font-bold text-3xl-c  lg:text-2xl mb-2 md:mb-3 border-b-2 ${member.borderColor} pb-1 md:pb-2 inline-block   `}
              >
                {member.name} - {member.specialty}
              </h3>
              <p className="text-2xl-c   lg:text-lg text-gray-700 leading-relaxed">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUsSection;
