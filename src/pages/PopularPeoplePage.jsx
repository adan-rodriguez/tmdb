import { Grid } from "../components/Grid";
import { useGetPeople } from "../hooks/useGetPeople";

export function PopularPeoplePage() {
  const { isLoading, isError, people, fetchNextPage, hasNextPage } =
    useGetPeople();

  if (isError) return <p>Error</p>;

  return (
    <Grid
      data={people}
      title="Popular people"
      type="people"
      fetchNextPage={fetchNextPage}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
    />
  );
}
