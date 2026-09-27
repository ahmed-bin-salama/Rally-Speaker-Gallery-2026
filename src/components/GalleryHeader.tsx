import React from 'react';

export const GalleryHeader: React.FC = () => {
  return (
    <header className="border-b border-gray-800/80 bg-[#0d0e12]/90 backdrop-blur sticky top-0 z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Rally Brand Logos */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/assets/rally-egypt.png"
              alt="Rally Egypt Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="h-6 w-px bg-gray-800" />
            <img
              src="/assets/rally-society-logo.png"
              alt="Rally Society Logo"
              className="h-9 w-auto object-contain brightness-110"
            />
          </div>
        </div>

        {/* Title and Subtitle */}
        <div className="text-center md:text-right">
          <h1 className="text-lg sm:text-xl font-black text-white tracking-tight flex items-center gap-2 justify-center md:justify-end">
            <span className="text-[#D4AF37]">RALLY</span> SPEAKER INTERVIEW GALLERY
          </h1>
          <p className="text-xs text-gray-400">
            Rally Festival 2026 • Speaker Archive & Interview Guide
          </p>
        </div>
      </div>
    </header>
  );
};
