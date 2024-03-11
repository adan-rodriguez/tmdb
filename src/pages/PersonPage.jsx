import { useEffect, useState } from "react";
import { useGetPerson } from "../hooks/useGetPerson";

export function PersonPage() {
  const {
    name,
    image,
    biography,
    birthday,
    deathday,
    known_for,
    place_of_birth,
  } = useGetPerson();

  const [heightHeader, setHeightClient] = useState(0);

  useEffect(() => {
    setHeightClient(document.querySelector("header").clientHeight);
  }, []);

  return (
    <div className={`p-4 bg-zinc-900 lg:min-h-[calc(100vh-${heightHeader}px)]`}>
      <h2 className="text-4xl font-black">{name}</h2>
      <div className="mt-4 flex flex-col lg:flex-row lg:items-start gap-4">
        <img
          className="w-full aspect-[2/3] lg:w-60 lg:min-w-[15rem] max-w-md object-cover"
          src={
            image
              ? `https://image.tmdb.org/t/p/original${image}`
              : "/image404.avif"
          }
          alt={name}
        />
        <div className="flex flex-col gap-y-5">
          <p>{biography}</p>
          <span>Birthday: {birthday || "unknown"}</span>
          {deathday && <span>Deathday: {deathday}</span>}
          <span>Know for: {known_for}</span>
          <span>Place of birth: {place_of_birth || "unknown"}</span>
        </div>
      </div>
    </div>
  );
}
