import { useQuery } from "@tanstack/react-query";
import { getPerson } from "../services/people";

export function useGetPerson({ id }) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["person", id],
    queryFn: async () => await getPerson({ id }),
    refetchOnWindowFocus: false,
  });

  return {
    isLoading,
    isError,
    person: data,
  };
}
