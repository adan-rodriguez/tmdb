import { Card } from "../components/Card";
import { useSearch } from "../hooks/useSearch";

export function SearchPage() {
  const { type, query, data } = useSearch();

  return (
    <div className="p-5">
      <h1 className="font-bold text-xl">{`${type[0].toUpperCase()}${type.slice(
        1
      )}`}</h1>
      <h2>Results for &quot;{query}&quot;</h2>
      <div className="grid grid-cols-custom">
        {data.map((elem) => (
          <Card key={elem.id} {...elem} linkCard={type} />
        ))}
      </div>
    </div>
  );
}
