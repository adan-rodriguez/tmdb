import { useNavigate } from "react-router-dom";
import { search_type } from "../utils/search_type";

export default function useSumbitSearch() {
  const navigate = useNavigate();

  const submitSearch = (e) => {
    e.preventDefault();
    const query = e.target.search.value;
    e.target.search.value = "";
    switch (e.target.search_type.value) {
      case search_type.movies:
        navigate(`/search/movies/${query}`);
        break;

      case search_type.people:
        navigate(`/search/people/${query}`);
        break;

      case search_type.tv_shows:
        navigate(`/search/tv_shows/${query}`);
        break;

      default:
        break;
    }
  };
  return { submitSearch };
}
