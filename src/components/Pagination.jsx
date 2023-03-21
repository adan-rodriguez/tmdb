import { Link } from "react-router-dom";
import { usePagination } from "../hooks/usePagination";

export function Pagination({ link, pages }) {
  const pagesToRender = pages < 500 ? pages : 500;
  const { page } = usePagination();

  let paginationLinks = [];

  for (let index = 1; index <= pagesToRender; index++) {
    paginationLinks.push(
      <Link
        style={{
          width: "32px",
          backgroundColor: index === page ? "#90cea1" : null,
        }}
        className="h-8 border-2 border-light-blue border-solid flex justify-center items-center"
        to={`/${link}/${index}`}
        title={`Page ${index}`}
      >
        {index}
      </Link>
    );
  }

  return (
    <>
      <div className="m-5 flex gap-x-2 justify-center items-center">
        {page > 1 && (
          <Link
            style={{
              width: "32px",
            }}
            className="h-8 border-2 border-light-blue border-solid flex justify-center items-center"
            to={`/${link}/${page - 1}`}
            title="Previous page"
          >
            &lt;
          </Link>
        )}
        <div style={{ maxWidth: "272px" }} className="flex gap-x-2">
          {page <= 7
            ? paginationLinks.slice(0, 7)
            : paginationLinks.slice(page - 4, page + 3)}
        </div>
        {page < pagesToRender && (
          <Link
            style={{
              width: "32px",
            }}
            className="h-8 border-2 border-light-blue border-solid flex justify-center items-center"
            to={`/${link}/${page + 1}`}
            title="Next page"
          >
            &gt;
          </Link>
        )}
      </div>
      <span className="block text-center">{`${page}/${pagesToRender}`}</span>
    </>
  );
}
