import React, { useState } from 'react';

interface SocialMediaUploaderProps {
  selectedImages?: string[];
}

export default function SocialMediaUploader({ selectedImages = [] }: SocialMediaUploaderProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadingPlatform, setUploadingPlatform] = useState<string | null>(null);

  const uploadToSocialMedia = (platform: string) => {
    if (selectedImages.length === 0) return;
    setIsUploading(true);
    setUploadingPlatform(platform);
    // Simulate uploading to the selected platform
    setTimeout(() => {
      console.log(`Uploaded images to ${platform}:`, selectedImages);
      setIsUploading(false);
      setUploadingPlatform(null);
      alert(`Images uploaded to ${platform} successfully!`);
    }, 3000);
  };

  return (
    <div className="mt-8 text-center w-full">
      <div className="flex flex-col sm:flex-row justify-center gap-4">
        <button 
          onClick={() => uploadToSocialMedia('Instagram')}
          disabled={selectedImages.length === 0 || isUploading}
          className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded disabled:opacity-50 hover:from-purple-600 hover:to-pink-600"
        >
          {isUploading && uploadingPlatform === 'Instagram' ? 'Uploading to Instagram...' : 'Upload to Instagram'}
        </button>
        <button 
          onClick={() => uploadToSocialMedia('Twitter')}
          disabled={selectedImages.length === 0 || isUploading}
          className="bg-blue-400 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-blue-500"
        >
          {isUploading && uploadingPlatform === 'Twitter' ? 'Uploading to Twitter...' : 'Upload to Twitter'}
        </button>
        <button 
          onClick={() => uploadToSocialMedia('Facebook')}
          disabled={selectedImages.length === 0 || isUploading}
          className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50 hover:bg-blue-700"
        >
          {isUploading && uploadingPlatform === 'Facebook' ? 'Uploading to Facebook...' : 'Upload to Facebook'}
        </button>
      </div>
    </div>
  );
}

