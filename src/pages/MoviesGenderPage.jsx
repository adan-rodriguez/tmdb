import { ListGrid } from "../components/ListGrid";
import { useGetDataByGender } from "../hooks/useGetDataByGender";

export function MoviesGenderPage() {
  const { gender, data, pages } = useGetDataByGender("movie");

  return (
    <ListGrid
      data={data}
      pages={pages}
      pageTitle={`Movies | ${gender}`}
      linkCard="movies"
      linkPagination={`movies/${gender.toLowerCase().replace(/\s+/g, "_")}`}
    />
  );
}
