import { useParams } from "react-router-dom";
import { Grid } from "../components/Grid";
import tvGenres from "@/utils/tvGenres.json";
import { useGetTvShowsByGender } from "@/hooks/useGetTvShowsByGender";

export function TvShowsByGenderPage() {
  const { id } = useParams();
  const { isLoading, isError, tvShows, fetchNextPage, hasNextPage } =
    useGetTvShowsByGender({ id });

  if (isError) return <p>Error</p>;

  const tvGender = tvGenres.find((tvGender) => tvGender.id == id).name;

  return (
    <Grid
      data={tvShows}
      title={`Tv shows | ${tvGender}`}
      type="tv"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
    />
  );
}
