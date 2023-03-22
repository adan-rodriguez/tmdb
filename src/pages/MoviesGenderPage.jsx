import { ListGrid } from "../components/ListGrid";
import { useGetDataByGender } from "../hooks/useGetDataByGender";

export function MoviesGenderPage() {
  const { gender, data, pages } = useGetDataByGender("movie");

  return (
    <ListGrid
      data={data}
      pages={pages}
      pageTitle={`${gender[0].toUpperCase()}${gender.slice(1)}`}
      linkCard="movies"
      linkPagination={`movies/${gender.replace(/ /g, "-")}`}
    />
  );
}
