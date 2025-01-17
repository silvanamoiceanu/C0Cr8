'use server'

import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function generateImages(prompt: string, numberOfImages: number = 1) {
  try {
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt,
      n: numberOfImages,
      size: "1024x1024",
    });

    return {
      success: true,
      images: response.data.map(image => image.url)
    };
  } catch (error) {
    console.error('Error generating images:', error);
    return {
      success: false,
      error: 'Failed to generate images'
    };
  }
}

