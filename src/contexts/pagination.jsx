import { createContext } from "react";
import { useParams } from "react-router-dom";

export const PaginationContext = createContext();

export function PaginationProvider({ children }) {
  const { page } = useParams();

  return (
    <PaginationContext.Provider
      value={{
        page,
      }}
    >
      {children}
    </PaginationContext.Provider>
  );
}
