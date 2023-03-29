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
  return (
    <div className="p-4 bg-zinc-900">
      <h2 className="text-4xl font-black">{name}</h2>
      <div className="mt-4 flex flex-col lg:flex-row gap-4">
        <img
          className="w-full max-w-md inline"
          src={`https://image.tmdb.org/t/p/original${image}`}
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
