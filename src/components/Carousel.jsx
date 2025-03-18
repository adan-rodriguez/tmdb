import { useRef } from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";
import { useEffect } from "react";

export function Carousel({ title, type, topic, data }) {
  const carouselSection = useRef(null);
  const carousel = useRef(null);

  const handleClickPrev = () => {
    carousel.current.style.translate = `${
      (parseInt(carousel.current.style.translate) || 0) +
      carousel.current.firstElementChild.scrollWidth +
      parseInt(getComputedStyle(carousel.current).columnGap)
    }px`;
  };

  const handleClickNext = () => {
    carousel.current.style.translate = `${
      (parseInt(carousel.current.style.translate) || 0) -
      carousel.current.firstElementChild.scrollWidth -
      parseInt(getComputedStyle(carousel.current).columnGap)
    }px`;
  };

  useEffect(() => {
    if (carouselSection.current === null || data.length === 0) {
      return;
    }

    const firstCard =
      carouselSection.current.firstElementChild.nextElementSibling
        .firstElementChild;

    const lastCard =
      carouselSection.current.firstElementChild.nextElementSibling
        .lastElementChild;

    const btnPrev =
      carouselSection.current.lastElementChild.previousElementSibling;

    const btnNext = carouselSection.current.lastElementChild;

    const observer = new IntersectionObserver(
      (entries) => {
        const data = entries[0];

        if (
          data.intersectionRatio === 1 &&
          !data.target.previousElementSibling
        ) {
          btnPrev.hidden = true;
        } else if (
          data.intersectionRatio === 1 &&
          data.target.previousElementSibling
        ) {
          btnNext.hidden = true;
        } else if (
          data.intersectionRatio !== 1 &&
          !data.target.previousElementSibling
        ) {
          btnPrev.hidden = false;
        } else if (
          data.intersectionRatio !== 1 &&
          data.target.previousElementSibling
        ) {
          btnNext.hidden = false;
        }
      },
      { root: carouselSection.current, threshold: [0, 1] }
    );

    [firstCard, lastCard].forEach((card) => observer.observe(card));
  }, [carouselSection, data]);

  return (
    <section ref={carouselSection} className="overflow-hidden p-5 relative">
      <Link to={`/${type + "/" + topic}/1`}>
        <h2 className="inline-block font-black mb-2 text-xl bg-gradient-to-r from-light-green to-light-blue text-transparent bg-clip-text">
          {title}
        </h2>
      </Link>
      <div
        ref={carousel}
        style={{
          // transform: `translateX(${translate}px)`,
          // translate: 0,
          transitionDuration: ".5s",
        }}
        className="flex gap-x-1"
      >
        {data.map((elem) => (
          <div
            key={elem.id}
            className="min-w-52 max-w-52 transition-transform opacity-80 hover:opacity-100 relative flex"
          >
            <Card {...elem} type={type} />
          </div>
        ))}
      </div>
      <>
        <button
          className="absolute left-8 top-1/2 font-black text-4xl hover:scale-[1.1] cursor-pointer w-16 h-16 rounded-full bg-slate-900 bg-opacity-70"
          onClick={handleClickPrev}
          // hidden={translate === 0}
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
    </section>
  );
}
