import { useNavigate } from "react-router-dom";

export function useMainSearch() {
  const navigate = useNavigate();

  const search = (e) => {
    e.preventDefault();
    const search_type = e.target.search_type.value;
    const query = e.target.search.value;    
    navigate(`/search/${search_type}/${query}/1`); 
  };

  return { search };
}
