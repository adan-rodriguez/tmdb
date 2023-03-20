import { PaginationProvider } from "../contexts/pagination";
import { Card } from "./Card";
import { Pagination } from "./Pagination";

export function ListGrid({
  children,
  data,
  pageTitle,
  linkCard,
  linkPagination,
}) {
  return (
    <div className="p-5">
      <h1 className="font-black text-4xl mb-3">{pageTitle}</h1>
      {children}
      <div className="grid grid-cols-custom">
        {data.map((elem) => (
          <Card key={elem.id} {...elem} link={linkCard} />
        ))}
      </div>
      <PaginationProvider>
        <Pagination link={linkPagination} />
      </PaginationProvider>
    </div>
  );
}
