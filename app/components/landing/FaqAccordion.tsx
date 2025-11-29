"use client";

import React, { useState, useCallback } from "react";
import type { FaqItemProps } from "./FaqItem";

interface FaqAccordionProps {
  children: React.ReactNode;
  defaultOpenIndex?: number;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({
  children,
  defaultOpenIndex = 0,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpenIndex);

  const handleToggle = useCallback((index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  }, []);

  return (
    <div className="mx-auto space-y-4">
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement<FaqItemProps>(child)) {
          return React.cloneElement(child, {
            isOpen: openIndex === index,
            onToggle: () => handleToggle(index),
          } as Partial<FaqItemProps>);
        }
        return child;
      })}
    </div>
  );
};

export default FaqAccordion;
