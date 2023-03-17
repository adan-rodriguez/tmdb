import { useGetPerson } from "../hooks/useGetPerson";

export function PersonPage() {
  const {
    name,
    image,
    biography,
    birthday,
    deathday,
    website,
    known_for,
    place_of_birth,
  } = useGetPerson();
  return (
    <div>
      <span>{name}</span>
      <img src={`https://image.tmdb.org/t/p/original${image}`} alt={name} />
      <p>{biography}</p>
      <span>Birthday: {birthday}</span>
      {deathday && <span>Deathday: {deathday}</span>}
      <a
        href={website}
        title={`Visit ${name} Website`}
        target="_blank"
        rel="noreferrer"
      >
        Website
      </a>
      <span>Know for: {known_for}</span>
      <span>Place of birth: {place_of_birth}</span>
    </div>
  );
}
