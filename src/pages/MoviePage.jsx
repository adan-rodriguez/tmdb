import useGetMovie from "../hooks/useGetMovie";

export default function MoviePage() {
  const { title, image, description, isLoading } = useGetMovie();

  return (
    <>
      {isLoading ? (
        <p>Cargando...</p>
      ) : (
        <div>
          <img src={`https://image.tmdb.org/t/p/w500${image}`} alt={title} />
          <h2 className="font-bold">{title}</h2>
          <p>{description}</p>
        </div>
      )}
    </>
  );
}
