import React from 'react';

interface ImageGalleryProps {
  images: string[];
  title: string;
  onSelect: (image: string) => void;
  selectedImages: string[];
}

export default function ImageGallery({ images, title, onSelect, selectedImages }: ImageGalleryProps) {
  return (
    <div className="mb-8 w-full text-center">
      <h2 className="text-2xl font-bold mb-4 text-center">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 justify-center">
        {images.map((image, index) => (
          <div 
            key={index} 
            className={`relative cursor-pointer ${selectedImages.includes(image) ? 'ring-4 ring-blue-500' : 'ring-1 ring-gray-600'}`}
            onClick={() => onSelect(image)}
          >
            <img src={image || "/placeholder.svg"} alt={`Image ${index + 1}`} className="w-full h-64 object-cover rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  );
}

