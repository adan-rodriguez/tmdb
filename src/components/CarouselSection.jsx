import { Link } from "react-router-dom";
import { Card } from "./Card";

export function CarouselSection({ section, link, data }) {
  const linkCard = link.slice(0, link.indexOf("/"));
  return (
    <section className="overflow-hidden p-5">
      <Link to={`/${link}/1`}>
        <h2 className="inline-block font-black mb-2 text-xl bg-gradient-to-r from-light-green to-light-blue text-transparent bg-clip-text">
          {section}
        </h2>
      </Link>
      <div className="flex">
        {data.map((elem) => (
          <Card key={elem.id} {...elem} linkCard={linkCard} />
        ))}
      </div>
    </section>
  );
}
