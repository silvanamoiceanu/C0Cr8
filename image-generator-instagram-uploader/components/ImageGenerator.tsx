'use client'

import React, { useState } from 'react';
import { generateImages } from '../app/actions/generate-images';

interface ImageGeneratorProps {
  sourceImages: string[];
  onGenerate: (images: string[]) => void;
}

export default function ImageGenerator({ sourceImages, onGenerate }: ImageGeneratorProps) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [prompt, setPrompt] = useState('');

  const handleGenerate = async () => {
    if (!sourceImages.length) return;
    
    setIsGenerating(true);
    try {
      const basePrompt = "Create a unique artistic variation inspired by these images:";
      const result = await generateImages(`${basePrompt} ${prompt}`, 1);
      
      if (result.success && result.images) {
        onGenerate(result.images);
      } else {
        alert('Failed to generate images. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while generating images.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="mb-8 text-center w-full max-w-2xl">
      <div className="mb-4">
        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter additional prompt details for image generation..."
          className="w-full p-2 rounded bg-gray-700 text-white border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          rows={3}
        />
      </div>
      <button 
        onClick={handleGenerate} 
        disabled={sourceImages.length === 0 || isGenerating}
        className="bg-blue-600 text-white px-4 py-2 rounded disabled:bg-gray-700 disabled:text-gray-400 hover:bg-blue-500"
      >
        {isGenerating ? 'Generating...' : 'Generate New Images'}
      </button>
    </div>
  );
}

