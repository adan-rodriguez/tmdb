import { ListGrid } from "../components/ListGrid";
import { useGetDataByGender } from "../hooks/useGetDataByGender";

export function TvShowsGenderPage() {
  const { gender, data, pages } = useGetDataByGender("tv");

  return (
    <ListGrid
      data={data}
      pages={pages}
      pageTitle={`Tv Shows | ${gender}`}
      linkCard="tv_shows"
      linkPagination={`tv_shows/${gender.toLowerCase().replace(/\s+/g, "_")}`}
    />
  );
}
