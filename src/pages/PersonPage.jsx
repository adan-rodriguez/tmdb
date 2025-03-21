import { useParams } from "react-router-dom";
import { useGetPerson } from "../hooks/useGetPerson";

export function PersonPage() {
  const { id } = useParams();
  const { isLoading, isError, person } = useGetPerson({ id });

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="p-4 bg-zinc-900 lg:min-h-dvh]">
      <h2 className="text-4xl font-black">{person.name}</h2>
      <div className="mt-4 flex flex-col lg:flex-row lg:items-start gap-4">
        <img
          className="w-full aspect-[2/3] lg:w-60 lg:min-w-[15rem] max-w-md object-cover"
          src={
            person.image
              ? `https://image.tmdb.org/t/p/original${person.image}`
              : "/image404.avif"
          }
          alt={person.name}
        />
        <div className="flex flex-col gap-y-5">
          <p>{person.biography}</p>
          <span>Birthday: {person.birthday || "unknown"}</span>
          {person.deathday && <span>Deathday: {person.deathday}</span>}
          <span>Know for: {person.known_for}</span>
          <span>Place of birth: {person.place_of_birth || "unknown"}</span>
        </div>
      </div>
    </div>
  );
}
