import MoviesCarousel from "@/components/MoviesCarousel";
import { getDiscoverMovies } from "@/lib/getMovies";
import { notFound } from "next/navigation";

interface GenrePageProps {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
}

async function GenrePage({ params, searchParams }: GenrePageProps) {
  const { id } = params;
  const { genre } = searchParams;

  if (!id) notFound();

  const movies = await getDiscoverMovies(id);

  return (
    <div className="max-w-7xl mx-auto">
      {/* @todo AI suggestions */}
      <div className="flex flex-col space-y-4 mt-32 xl:mt-42">
        <h1 className="text-6xl font-bold px-10">Results for {genre}</h1>

        <MoviesCarousel title="Genre" movies={movies} isVertical />
      </div>
    </div>
  );
}

export default GenrePage;
