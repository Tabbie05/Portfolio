"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTimes, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProjectCard = ({ project, isDark }) => {
  const [showLightbox, setShowLightbox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!project) return null;
  const { name, description, techUsed, link, images = [] } = project;

  const bgCard = isDark ? "bg-gray-800" : "bg-gray-200";
  const borderCard = isDark ? "border-gray-600" : "border-gray-300";
  const textPrimary = isDark ? "text-white" : "text-black";
  const textSecondary = isDark ? "text-gray-400" : "text-gray-700";
  const techBg = isDark ? "bg-blue-900" : "bg-blue-300";
  const techText = isDark ? "text-white" : "text-black";
  const btnBg = isDark ? "bg-blue-900 hover:bg-blue-700" : "bg-blue-700 hover:bg-blue-800";

  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setShowLightbox(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <>
      <article
        className={`w-[420px] border rounded-2xl shadow-md overflow-hidden max-w-sm
          ${bgCard} ${borderCard} hover:-translate-y-3 hover:shadow-blue-500/50 transition-transform duration-300`}
      >
        {/* Image Stack Section - 3 Overlapping Images */}
        <div className="relative h-64 bg-gradient-to-br from-blue-600 to-blue-800 overflow-hidden group">
          {/* Background decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full blur-3xl"></div>
          </div>

          {/* Three overlapping images with perspective */}
          <div className="relative w-full h-full flex items-center justify-center p-4">
            {/* Image 3 - Back */}
            {images[2] && (
              <div
                onClick={() => openLightbox(2)}
                className="absolute w-48 h-32 cursor-pointer transform -rotate-6 translate-x-12 translate-y-2 
                  transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-20 group-hover:translate-y-0
                  group-hover:scale-95 z-10"
              >
                <Image
                  src={images[2]}
                  alt={`${name} screenshot 3`}
                  fill
                  className="object-cover rounded-lg shadow-2xl border-4 border-white"
                />
              </div>
            )}

            {/* Image 2 - Middle */}
            {images[1] && (
              <div
                onClick={() => openLightbox(1)}
                className="absolute w-48 h-32 cursor-pointer transform rotate-3 translate-y-1
                  transition-all duration-500 group-hover:rotate-0 group-hover:translate-x-0 group-hover:translate-y-0
                  group-hover:scale-100 z-20"
              >
                <Image
                  src={images[1]}
                  alt={`${name} screenshot 2`}
                  fill
                  className="object-cover rounded-lg shadow-2xl border-4 border-white"
                />
              </div>
            )}

            {/* Image 1 - Front */}
            {images[0] && (
              <div
                onClick={() => openLightbox(0)}
                className="absolute w-48 h-32 cursor-pointer transform -rotate-3 -translate-x-12 -translate-y-2
                  transition-all duration-500 group-hover:rotate-0 group-hover:-translate-x-20 group-hover:translate-y-0
                  group-hover:scale-95 z-30"
              >
                <Image
                  src={images[0]}
                  alt={`${name} screenshot 1`}
                  fill
                  className="object-cover rounded-lg shadow-2xl border-4 border-white"
                />
              </div>
            )}
          </div>

          {/* Image indicators */}
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2 z-40">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => openLightbox(idx)}
                className="w-2 h-2 rounded-full bg-white/50 hover:bg-white transition-all"
                aria-label={`View image ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4">
          <h3 className={`text-xl font-semibold mb-2 ${textPrimary}`}>{name}</h3>
          <p className={`${textSecondary} mb-4 text-sm line-clamp-4`}>{description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {techUsed.map((tech) => (
              <span
                key={tech}
                className={`${techText} px-2 py-1 rounded text-xs ${techBg}`}
              >
                {tech}
              </span>
            ))}
          </div>

          <Link href={link} target="_blank" rel="noopener noreferrer">
            <button
              className={`h-10 w-28 rounded-lg shadow-lg flex items-center justify-center gap-2
                text-white ${btnBg} transition-colors duration-300`}
            >
              <FaGithub />
              <span>GitHub</span>
            </button>
          </Link>
        </div>
      </article>

      {/* Lightbox Modal */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Close lightbox"
          >
            <FaTimes size={32} />
          </button>

          {/* Previous button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Previous image"
          >
            <FaChevronLeft size={40} />
          </button>

          {/* Image container */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={images[currentImageIndex]}
                alt={`${name} screenshot ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors z-50"
            aria-label="Next image"
          >
            <FaChevronRight size={40} />
          </button>

          {/* Image counter */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg font-semibold">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Dot indicators */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(idx);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  idx === currentImageIndex ? "bg-white scale-125" : "bg-white/50"
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;