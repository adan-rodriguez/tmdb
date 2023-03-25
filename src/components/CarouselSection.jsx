import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export function CarouselSection({ section, linkSection, linkCard, data = [] }) {
  const [position, setPosition] = useState(0);
  const [carousel, setCarousel] = useState(0);

  const handleClickPrev = () => {
    setPosition(position + 204);
    setCarousel(carousel + 204);
  };

  const handleClickNext = () => {
    setPosition(position - 204);
    setCarousel(carousel - 204);
  };

  useEffect(() => {
    setCarousel(
      Number(document.querySelector(".carousel").scrollWidth) -
        Number(document.querySelector(".carousel").clientWidth)
    );
  }, [data]);

  return (
    <section className="carousel overflow-hidden p-5">
      <Link to={`/${linkSection}/1`}>
        <h2 className="inline-block font-black mb-2 text-xl bg-gradient-to-r from-light-green to-light-blue text-transparent bg-clip-text">
          {section}
        </h2>
      </Link>
      <div
        style={{
          // transform: `translateX(${position * -100}%)`,
          transform: `translateX(${position}px)`,
          transitionDuration: ".5s",
        }}
        className="flex gap-x-1"
      >
        {data.map((elem) => (
          <Card key={elem.id} {...elem} link={linkCard} />
        ))}
      </div>
      <button
        className="carousel-button prev"
        onClick={handleClickPrev}
        disabled={position === 0}
      >
        Prev
      </button>
      <button
        className="carousel-button next"
        onClick={handleClickNext}
        disabled={carousel < 0}
      >
        Next
      </button>
    </section>
  );
}
