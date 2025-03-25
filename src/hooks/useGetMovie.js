import { getMovie } from "../services/movies";
import { useQuery } from "@tanstack/react-query";

export function useGetMovie({ id }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["movie", id],
    queryFn: async () => await getMovie({ id }),
    refetchOnWindowFocus: false,
    enabled: !!id,
  });

  return {
    isLoading,
    isError,
    movie: data,
  };
}
