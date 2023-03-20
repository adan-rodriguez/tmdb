import { useContext } from "react";
import { PaginationContext } from "../contexts/pagination";

export function usePagination() {
  let { page } = useContext(PaginationContext);
  return { page: Number(page) };
}
