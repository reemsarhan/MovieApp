                // app/page.tsx
import LoadingSpinner from "@/components/load/LoadingSpinner";
import Home from "@/components/landing/Home";
import { getDefaultMovies } from "@/services/movie";
import { Suspense } from "react";

export default async function Page() {
 
  const initialData = await getDefaultMovies(1); // Fetch initial data for the Home component 
  const initialMovies = initialData.Search || []; // Use optional chaining to handle cases where Search might be undefined
  const initialTotalResults = Number(initialData.totalResults) || 0; // Ensure initialMovies is an array, defaulting to an empty array if not  
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Home initialMovies={initialMovies} initialTotalResults={initialTotalResults} />
    </Suspense>
  );
}
