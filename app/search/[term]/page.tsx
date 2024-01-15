import MoviesCarousel from "@/components/MoviesCarousel";
import SuggestionsAI from "@/components/SuggestionsAI";
import { getPopularMovies, getSearchedMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

interface SearchPageProps {
  params: {
    term: string;
  };
}

async function SearchPage({ params: { term: queryTerm } }: SearchPageProps) {
  if (!queryTerm) notFound();

  const term = decodeURI(queryTerm);

  const movies = await getSearchedMovies(term);
  const popularMovies = await getPopularMovies();

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {term}</h1>
        <SuggestionsAI term={term} />
        <MoviesCarousel title="Movies" movies={movies} isVertical />
        <MoviesCarousel title="You may also like" movies={popularMovies} />
      </div>
    </div>
  );
}

export default SearchPage;
