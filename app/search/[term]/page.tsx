import { notFound } from "next/navigation";

interface SearchPageProps {
  params: {
    term: string;
  };
}

function SearchPage({ params }: SearchPageProps) {
  const { term } = params;

  if (!term) notFound();

  const termToUse = decodeURI(term);

  // @todo api call to get search movies
  // @todo api call to get popular movies

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      SearchTermsPage {term} {termToUse}
    </div>
  );
}

export default SearchPage;
