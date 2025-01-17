import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageGallery from './components/ImageGallery';
import ImageGenerator from './components/ImageGenerator';
import SocialMediaUploader from './components/SocialMediaUploader';

export default function App() {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const [generatedImages, setGeneratedImages] = useState<string[]>([]);
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const handleUpload = (newImages: string[]) => {
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  const handleGenerate = (newImages: string[]) => {
    setGeneratedImages([...generatedImages, ...newImages]);
  };

  const handleSelect = (image: string) => {
    setSelectedImages(prev => 
      prev.includes(image) 
        ? prev.filter(img => img !== image)
        : [...prev, image]
    );
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center">
      <div className="w-full bg-gray-800 mb-8 py-12 text-center">
        <h1 className="text-6xl font-bold tracking-tight text-yellow-400">C0Cr8</h1>
      </div>
      <div className="container mx-auto p-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold mb-8 text-center">Image Generator and Social Media Uploader</h2>
        <ImageUploader onUpload={handleUpload} />
        <ImageGallery 
          images={uploadedImages} 
          title="Uploaded Images" 
          onSelect={handleSelect}
          selectedImages={selectedImages}
        />
        <ImageGenerator 
          sourceImages={uploadedImages} 
          onGenerate={handleGenerate} 
        />
        <ImageGallery 
          images={generatedImages} 
          title="Generated Images" 
          onSelect={handleSelect}
          selectedImages={selectedImages}
        />
        <SocialMediaUploader selectedImages={selectedImages} />
      </div>
    </div>
  );
}

