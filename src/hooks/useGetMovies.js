import { getMovies } from "../services/movies";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useGetMovies({ topic }) {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["movies", topic],
      queryFn: async ({ pageParam }) => await getMovies({ topic, pageParam }),
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
    movies: data?.pages.flatMap((page) => page.movies),
    fetchNextPage,
    hasNextPage,
  };
}
