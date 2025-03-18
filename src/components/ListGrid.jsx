import { Card } from "./Card";
import { Pagination } from "./Pagination";

export function ListGrid({
  children,
  data,
  pages,
  pageTitle,
  linkCard,
  linkPagination,
}) {
  return (
    <div className="p-5">
      <h1 className="font-black text-4xl mb-3 inline-block bg-gradient-to-r from-light-green to-light-blue text-transparent bg-clip-text">
        {pageTitle}
      </h1>
      {children}
      {data.length > 0 && (
        <>
          <div className="grid grid-cols-custom gap-2">
            {data.map((elem) => (
              <div
                key={elem.id}
                className="min-w-[200px] hover:scale-[1.02] transition-transform max-w-xl opacity-80 hover:opacity-100 relative flex"
              >
                <Card {...elem} type={linkCard} />
              </div>
            ))}
          </div>
          <Pagination link={linkPagination} pages={pages} />
        </>
      )}
    </div>
  );
}
