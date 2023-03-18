import { Link } from "react-router-dom";
import { Card } from "./Card";

export function CarouselSection({ section, link, data }) {
  const linkCard = link.slice(0, link.indexOf("/"));
  return (
    <section className="overflow-hidden p-5">
      <Link to={`/${link}`}>
        <h2 className="font-bold text-xl">{section}</h2>
      </Link>
      <div className="flex">
        {data.map((elem) => (
          <Card key={elem.id} {...elem} linkCard={linkCard} />
        ))}
      </div>
    </section>
  );
}
