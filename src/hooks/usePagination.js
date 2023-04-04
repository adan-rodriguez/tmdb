import { useParams } from "react-router-dom";

export function usePagination() {
  const { page } = useParams();
  window.scrollTo(0, 0);
  return { page: Number(page) };
}
