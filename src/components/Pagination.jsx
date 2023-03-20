import { Link } from "react-router-dom";
import { usePagination } from "../hooks/usePagination";

export function Pagination({ link }) {
  const { page } = usePagination();

  return (
    <div>
      {page > 1 && <Link to={`/${link}/${page - 1}`}>Previous</Link>}
      {page < 5 && (
        <>
          <Link to={`/${link}/1`}>1</Link>
          <Link to={`/${link}/2`}>2</Link>
          <Link to={`/${link}/3`}>3</Link>
          <Link to={`/${link}/4`}>4</Link>
          <Link to={`/${link}/5`}>5</Link>
          <Link to={`/${link}/6`}>6</Link>
          <Link to={`/${link}/7`}>7</Link>
          <p>...</p>
          <Link to={`/${link}/500`}>500</Link>
        </>
      )}
      {page >= 5 && page <= 496 && (
        <>
          <Link to={`/${link}/1`}>1</Link>
          <p>...</p>
          <Link to={`/${link}/${page - 3}`}>{page - 3}</Link>
          <Link to={`/${link}/${page - 2}`}>{page - 2}</Link>
          <Link to={`/${link}/${page - 1}`}>{page - 1}</Link>
          <Link to={`/${link}/${page}`}>{page}</Link>
          <Link to={`/${link}/${page + 1}`}>{page + 1}</Link>
          <Link to={`/${link}/${page + 2}`}>{page + 2}</Link>
          <Link to={`/${link}/${page + 3}`}>{page + 3}</Link>
          <p>...</p>
          <Link to={`/${link}/500`}>500</Link>
        </>
      )}
      {page > 496 && (
        <>
          <Link to={`/${link}/1`}>1</Link>
          <p>...</p>
          <Link to={`/${link}/494`}>494</Link>
          <Link to={`/${link}/495`}>495</Link>
          <Link to={`/${link}/496`}>496</Link>
          <Link to={`/${link}/497`}>497</Link>
          <Link to={`/${link}/498`}>498</Link>
          <Link to={`/${link}/499`}>499</Link>
          <Link to={`/${link}/500`}>500</Link>
        </>
      )}
      {Number(page) < 500 && <Link to={`/${link}/${page + 1}`}>Next</Link>}
    </div>
  );
}
