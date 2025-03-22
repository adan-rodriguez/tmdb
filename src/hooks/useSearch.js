import { useInfiniteQuery } from "@tanstack/react-query";
import { searchData } from "../services/search";

export function useSearch({ type, query }) {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["search", type, query],
      queryFn: async ({ pageParam }) =>
        await searchData({ type, query, pageParam }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        const nextCursor = lastPage.page + 1;
        return nextCursor > 500 ? undefined : lastPage.page + 1; // TMDB devuelve como máximo 500 páginas
      },
      // refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 10, // 10 minutos
    });

  return {
    isLoading,
    isError,
    data: data?.pages.flatMap((page) => page.data),
    fetchNextPage,
    hasNextPage,
  };
}
