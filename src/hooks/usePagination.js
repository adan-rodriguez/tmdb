import { useContext } from "react";
import { PaginationContext } from "../contexts/pagination";

export function usePagination() {
  let { page } = useContext(PaginationContext);
  window.scrollTo(0, 0);
  return { page: Number(page) };
}
