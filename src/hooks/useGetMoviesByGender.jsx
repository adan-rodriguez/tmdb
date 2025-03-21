import { getData } from "@/services/discover";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useGetMoviesByGender({ id }) {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["movies", id],
      queryFn: async ({ pageParam }) =>
        await getData({ type: "movie", genderId: id, pageParam }),
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
    movies: data?.pages.flatMap((page) => page.data),
    fetchNextPage,
    hasNextPage,
  };
}
