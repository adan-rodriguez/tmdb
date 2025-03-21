import { Card } from "./Card";

export function Grid({
  children,
  data,
  title,
  type,
  fetchNextPage,
  hasNextPage,
}) {
  return (
    <div className="p-5">
      <h1 className="font-black text-4xl mb-3 inline-block bg-gradient-to-r from-light-green to-light-blue text-transparent bg-clip-text">
        {title}
      </h1>
      {children}
      {data.length > 0 && (
        <div className="grid grid-cols-custom gap-2">
          {data.map((item) => (
            <div
              key={item.id}
              className="min-w-[200px] hover:scale-[1.02] transition-transform max-w-xl opacity-80 hover:opacity-100 relative flex"
            >
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
      )}
      {hasNextPage && (
        <button onClick={fetchNextPage}>Cargar más resultados</button>
      )}
    </div>
  );
}
