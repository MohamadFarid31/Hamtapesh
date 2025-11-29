import React from "react";
import DownloadSectionControls from "./DownloadSectionControls";

const DownloadSection: React.FC = () => {
  return (
    <section
      id="download-section"
      className="download-section   mx-6  overflow-hidden text-center"
    >
      {/* Title with pink background strip */}
      <div className="bg-linear-to-b from-(--color-pink-light)  to-primary-white rounded-2xl py-4 md:py-6 mb-6 md:mb-8">
        <h2 className="text-4xl-c mb-4 md:mb-6  font-bold leading-relaxed">
          دانلود اپلیکیشن <span className="text-primary">هم‌تپش</span>
        </h2>
        {/* Client Component for interactive controls */}
        <DownloadSectionControls />
      </div>
    </section>
  );
};

export default DownloadSection;
