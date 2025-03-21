import { useParams } from "react-router-dom";
import { Grid } from "../components/Grid";
import tvGenres from "@/utils/tvGenres.json";
import { useGetTvByGender } from "@/hooks/useGetTvByGender";

export function TvShowsByGenderPage() {
  const { id } = useParams();
  const { isLoading, isError, tv, fetchNextPage, hasNextPage } =
    useGetTvByGender({ id });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  const tvGender = tvGenres.find((tvGender) => tvGender.id == id).name;

  return (
    <Grid
      data={tv}
      title={`Tv | ${tvGender}`}
      type="tv"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
    />
  );
}
