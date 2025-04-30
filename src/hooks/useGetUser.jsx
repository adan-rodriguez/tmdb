import { getUser } from "@/services/users";
import { useEffect, useState } from "react";

export const useGetUser = ({ sessionId }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!sessionId) {
      setIsLoading(false);
      return;
    }

    getUser({ sessionId })
      .then((result) => {
        console.log({ result });

        if (result.success === false) {
          setIsError(true);
          console.error(result.status_message);
          return;
        }
        setUser(result);
      })
      .catch((e) => {
        setIsError(true);
        console.error(e);
      })
      .finally(setIsLoading(false));
  }, [sessionId]);

  return { user, isLoading, isError };
};
