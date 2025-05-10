"use client";

import { useState } from "react";

interface PortfolioCardProps {
  image: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  link?: string;
}

export default function PortfolioCard({
  image,
  title,
  shortDescription,
  longDescription,
  link,
}: PortfolioCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-lg shadow-md p-4 w-72 flex-shrink-0">
      <img src={image} alt={title} className="h-40 w-full object-cover rounded" />
      <h3 className="text-lg font-semibold mt-2">{title}</h3>
      <p className="text-sm text-gray-600">{shortDescription}</p>
      <button
        onClick={() => setOpen(true)}
        className="mt-2 text-indigo-600 font-semibold hover:underline"
      >
        Learn More
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full relative">
            <button onClick={() => setOpen(false)} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              ✕
            </button>
            <h4 className="text-xl font-semibold">{title}</h4>
            <p className="mt-2 text-sm text-gray-700">{longDescription}</p>
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-4 text-indigo-600 hover:underline"
              >
                Ver en GitHub
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
