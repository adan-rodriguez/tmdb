import { Link } from "react-router-dom";
import { useSearch } from "../hooks/useSearch";
import { search_type } from "../utils/search_type";

export function SearchPeoplePage() {
  const { query, data: people } = useSearch(search_type.people);

  return (
    <>
      <h1>Results for &quot;{query}&quot;</h1>
      <div className="grid grid-cols-custom">
        {people.map((person) => (
          <Link key={person.id} to={`/people/${person.id}`} title={person.name}>
            <img
              src={`https://image.tmdb.org/t/p/original${person.image}`}
              alt={person.name}
              className="hover:scale-105 transition-transform"
            />
          </Link>
        ))}
      </div>
    </>
  );
}
