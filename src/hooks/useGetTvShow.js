import { getTvShow } from "@/services/tvShows";
import { useQuery } from "@tanstack/react-query";

export function useGetTvShow({ id }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["tvShow", id],
    queryFn: async () => await getTvShow({ id }),
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    isError,
    tvShow: data,
  };
}
