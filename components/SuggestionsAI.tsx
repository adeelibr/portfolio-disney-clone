"use client";

import useSWR from "swr";

const fetcher = (term: string) =>
  fetch("/api/suggestions", {
    method: "POST",
    body: JSON.stringify({ term }),
  }).then((res) => res.json());

type SuggestionsAIProps = {
  term: string;
};

function SuggestionsAI({ term }: SuggestionsAIProps) {
  const { data, error, isLoading, isValidating } = useSWR(
    "suggestions",
    () => fetcher(term),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

  const generateText = () => {
    if (isLoading || isValidating)
      return (
        <>
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white" />
          <p className="text-sm text-gray-400">AI Assistant is thinking...</p>
        </>
      );

    if (error) return <>Error...</>;
    if (!data) return <>No data</>;

    return (
      <>
        <div className="animate-pulse rounded-full bg-gradient-to-t from-white h-10 w-10 border-2 flex-shrink-0 border-white" />

        <div>
          <p className="text-sm text-gray-400">
            AI Assistant Suggests:
          </p>
          <p className="italic text-xl">{data.message}</p>
        </div>
      </>
    );
  };

  return (
    <div className="flex space-x-5 items-center px-10">{generateText()}</div>
  );
}

export default SuggestionsAI;
