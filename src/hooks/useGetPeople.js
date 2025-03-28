import { getPeople } from "@/services/people";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useGetPeople() {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["people"],
      queryFn: async ({ pageParam }) => await getPeople({ pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const nextCursor = lastPage.page + 1;
        return nextCursor > 500 ? undefined : lastPage.page + 1; // TMDB devuelve como máximo 500 páginas
      },
      staleTime: 1000 * 60 * 10, // 10 minutos
    });

  return {
    isLoading,
    isError,
    people: data?.pages.flatMap((page) => page.people),
    fetchNextPage,
    hasNextPage,
  };
}
