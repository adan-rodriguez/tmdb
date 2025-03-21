import { getTvShow } from "@/services/tv_shows";
import { useQuery } from "@tanstack/react-query";

export function useGetTvShow({ id }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["tv_show", id],
    queryFn: async () => await getTvShow({ id }),
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    isError,
    tvShow: data,
  };
}
