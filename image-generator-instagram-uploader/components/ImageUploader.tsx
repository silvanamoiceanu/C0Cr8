import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';

interface ImageUploaderProps {
  onUpload: (images: string[]) => void;
}

export default function ImageUploader({ onUpload }: ImageUploaderProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    const images = acceptedFiles.map(file => URL.createObjectURL(file));
    onUpload(images);
  }, [onUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} className="border-2 border-dashed border-gray-600 rounded-lg p-8 mb-4 text-center cursor-pointer hover:border-gray-400 w-full">
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the images here ...</p> :
          <p>Drag 'n' drop some images here, or click to select images</p>
      }
    </div>
  );
}

