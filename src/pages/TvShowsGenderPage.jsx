import { ListGrid } from "../components/ListGrid";
import { useGetDataByGender } from "../hooks/useGetDataByGender";

export function TvShowsGenderPage() {
  const { gender, data, pages } = useGetDataByGender("tv");

  return (
    <ListGrid
      data={data}
      pages={pages}
      pageTitle={`${gender[0].toUpperCase()}${gender.slice(1)}`}
      linkCard="tv_shows"
      linkPagination={`tv_shows/${gender.replace(/ /g, "-")}`}
    />
  );
}
