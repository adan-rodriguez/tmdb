import { getData } from "@/services/discover";
import { useInfiniteQuery } from "@tanstack/react-query";

export function useGetTvByGender({ id }) {
  const { isLoading, isError, data, fetchNextPage, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["tv", id],
      queryFn: async ({ pageParam }) =>
        await getData({ type: "tv", genderId: id, pageParam }),
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
    tv: data?.pages.flatMap((page) => page.data),
    fetchNextPage,
    hasNextPage,
  };
}
