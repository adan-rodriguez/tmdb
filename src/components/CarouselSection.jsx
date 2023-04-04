import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export function CarouselSection({ section, linkSection, linkCard, data }) {
  const carouselRef = useRef();
  const [translate, setTranslate] = useState(0);
  const [hiddenCarousel, setHiddenCarousel] = useState(0);

  const handleClickPrev = () => {
    setTranslate(translate + (translate > -204 ? -translate : 204));
  };

  const handleClickNext = () => {
    setTranslate(() => {
      if (translate === -hiddenCarousel) {
        return 0;
      }
      return (
        translate -
        (-translate > hiddenCarousel - 204 ? hiddenCarousel + translate : 204)
      );
    });
  };

  // useEffect(() => {
  //   setHiddenCarousel(
  //     Number(document.querySelector(".carousel").scrollWidth) -
  //       Number(document.querySelector(".carousel").clientWidth) +
  //       20
  //   );
  // }, [data]);

  useEffect(() => {
    setHiddenCarousel(
      Number(carouselRef.current.scrollWidth) -
        Number(carouselRef.current.clientWidth) +
        20
    );
  }, [data]);

  return (
    <section ref={carouselRef} className="overflow-hidden p-5 relative">
      <Link to={`/${linkSection}/1`}>
        <h2 className="inline-block font-black mb-2 text-xl bg-gradient-to-r from-light-green to-light-blue text-transparent bg-clip-text">
          {section}
        </h2>
      </Link>
      <div
        style={{
          transform: `translateX(${translate}px)`,
          transitionDuration: ".5s",
        }}
        className="flex gap-x-1"
      >
        {data.map((elem) => (
          <div
            key={elem.id}
            className="min-w-[200px] hover:scale-[1.02] transition-transform max-w-[200px] opacity-80 hover:opacity-100 relative flex"
          >
            <Card {...elem} link={linkCard} />
          </div>
        ))}
      </div>
      {hiddenCarousel > 20 && (
        <>
          <button
            className="absolute left-8 top-1/2 font-black text-4xl hover:scale-[1.1] cursor-pointer w-16 h-16 rounded-full bg-slate-900 bg-opacity-70"
            onClick={handleClickPrev}
            disabled={translate === 0}
            aria-label="Previous"
          >
            &lt;
          </button>
          <button
            className="absolute right-8 top-1/2 font-black text-4xl hover:scale-[1.1] cursor-pointer w-16 h-16 rounded-full bg-slate-900 bg-opacity-70"
            onClick={handleClickNext}
            aria-label="Next"
          >
            &gt;
          </button>
        </>
      )}
    </section>
  );
}
