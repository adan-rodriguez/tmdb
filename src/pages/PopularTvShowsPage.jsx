import { ListGrid } from "../components/ListGrid";
import { useGetTvShows } from "../hooks/useGetTvShows";

export function PopularTvShowsPage() {
  const { pages, tvShows } = useGetTvShows("popular");

  return (
    <ListGrid
      data={tvShows}
      pages={pages}
      pageTitle="Popular Tv Shows"
      linkCard="tv_shows"
      linkPagination="tv_shows/popular"
    />
  );
}
