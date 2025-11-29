"use client";

import React from "react";

export interface FaqItemProps {
  question: string;
  answer: string;
  isOpen?: boolean;
  onToggle?: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
  question,
  answer,
  isOpen = false,
  onToggle,
}) => {
  return (
    <div className="faq-item border border-gray-200 rounded-2xl overflow-hidden">
      <button
        onClick={onToggle}
        className="faq-header flex items-center justify-between w-full p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
        aria-expanded={isOpen}
      >
        <h3
          className={`text-2xl-c font-semibold transition-colors duration-300 text-right flex-1 ${
            isOpen ? "text-primary" : "text-black"
          }`}
        >
          {question}
        </h3>
        <svg
          className={`faq-icon w-6 h-6 text-primary transition-transform duration-300 shrink-0 mr-3 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`faq-body overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[500px] opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-xl-c px-6 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
};

export default FaqItem;
