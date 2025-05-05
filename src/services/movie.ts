// lib/movie.ts
"use server";

import { customFetch } from "@/helpers/custom-fetch";

export const getDefaultMovies = async (page: number = 1) => {
  const apiKey = process.env.NEXT_PUBLIC_API_KEY;
  const url = `https://www.omdbapi.com/?s=action&page=${page}&apikey=${apiKey}`;

  const response = await customFetch({
    url: url, 
    cacheTag: `movies-page-${page}`,
  });

  console.log("OMDB API Key:", process.env.API_KEY);
  return response;
};
