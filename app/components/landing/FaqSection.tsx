import FaqAccordion from "./FaqAccordion";
import FaqItem from "./FaqItem";

const FaqSection = () => {
  const faqs = [
    {
      question: "استفاده از اپلیکیشن هم‌تپش رایگان است؟",
      answer: "بله، تمامی اطلاعات شما با امنیت کامل محفوظ است.",
    },
    {
      question: "تغذیه چطور به بچم کمک میکنه؟",
      answer: "بله، تمامی اطلاعات شما با امنیت کامل محفوظ است.",
    },
    {
      question: "هم‌تپش چجوری کار می‌کنه؟",
      answer:
        "هم‌تپش هر روز بهت کمک می‌کنه تا مواد مغذی لازم رو دریافت کنی، ورزش‌های امن بارداری انجام بدی، تجربه‌ی مادرهای دیگه رو کنار خودت داشته باشی و مصرف مکمل‌هاتو فراموش نکنی.",
    },
    {
      question: "ورزش‌های روزانه نیاز به وسیله‌ای دارند؟",
      answer: "بله، تمامی اطلاعات شما با امنیت کامل محفوظ است.",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="mx-6 px-4 ">
        <div className="text-center mb-16">
          <h2 className="text-4xl-c font-bold">سوالی برات پیش اومده؟</h2>
        </div>

        <FaqAccordion defaultOpenIndex={0}>
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </FaqAccordion>
      </div>
    </section>
  );
};

export default FaqSection;
