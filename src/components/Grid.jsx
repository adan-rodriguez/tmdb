import { Card } from "./Card";

export function Grid({
  children,
  data,
  title,
  type,
  fetchNextPage,
  hasNextPage,
  isLoading,
}) {
  return (
    <div className="p-5">
      <h1 className="font-black text-4xl mb-3 inline-block bg-gradient-to-r from-light-green to-light-blue text-transparent bg-clip-text">
        {title}
      </h1>
      {children}
        <div className="grid grid-cols-custom gap-2">
          {isLoading
            ? Array.from({ length: 20 }, (_, i) => (
                  <div className="aspect-[2/3] bg-gray-300 rounded animate-pulse" key={i}></div>
              ))
            : data.map((item) => (
                <div key={item.id}>
                  <Card
                    id={item.id}
                    type={type}
                    name={item.name}
                    image={item.image}
                    vote_average={item.vote_average}
                  />
                </div>
              ))}
        </div>
      {hasNextPage && (
        <button onClick={fetchNextPage}>Cargar más resultados</button>
      )}
    </div>
  );
}
