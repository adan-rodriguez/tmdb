import { ListGrid } from "../components/ListGrid";
import { useGetTvShows } from "../hooks/useGetTvShows";

export function TopRatedTvShowsPage() {
  const { pages, tvShows } = useGetTvShows("top_rated");

  return (
    <ListGrid
      data={tvShows}
      pages={pages}
      pageTitle="Top rated Tv Shows"
      linkCard="tv_shows"
      linkPagination="tv_shows/top_rated"
    />
  );
}
