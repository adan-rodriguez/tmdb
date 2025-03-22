import { useNavigate } from "react-router-dom";

export function useMainSearch() {
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    const searchType = e.target.searchType.value;
    const query = e.target.search.value;
    navigate(`/search/${searchType}/${query}`);
  };

  return { search };
}
