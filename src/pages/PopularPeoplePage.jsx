import { Grid } from "../components/Grid";
import { useGetPeople } from "../hooks/useGetPeople";

export function PopularPeoplePage() {
  const { isLoading, isError, people, fetchNextPage, hasNextPage } =
    useGetPeople();

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error</p>
      ) : (
        <Grid
          data={people}
          title="Popular people"
          type="people"
          fetchNextPage={fetchNextPage}
          hasNextPage={hasNextPage}
        />
      )}
    </>
  );
}
