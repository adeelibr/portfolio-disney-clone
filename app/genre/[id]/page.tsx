import { notFound } from "next/navigation";

interface GenrePageProps {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
}

function GenrePage({ params, searchParams }: GenrePageProps) {
  const { id } = params;
  const { genre } = searchParams;

  if (!id) notFound();

  // @todo api call to get search movies
  // @todo api call to get popular movies

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      Welcome to the genre with ID {id} & name {genre}
    </div>
  );
}

export default GenrePage;
