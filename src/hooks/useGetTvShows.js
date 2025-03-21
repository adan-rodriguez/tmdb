import { getTvShows } from "../services/tv_shows";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useGetTvShows({ topic }) {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["tv_shows", topic],
      queryFn: async ({ pageParam }) => await getTvShows({ topic, pageParam }),
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
    tvShows: data?.pages.flatMap((page) => page.tvShows),
    fetchNextPage,
    hasNextPage,
  };
}
