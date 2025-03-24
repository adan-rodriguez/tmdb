import { Link } from "react-router-dom";
import { Card } from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

export function Carousel({ title, type, topic, data, isLoading }) {
  return (
    <section className="py-5 pl-5">
      <Link to={`/${type + "/" + topic}`}>
        <h2 className="inline-block font-black mb-2 text-xl bg-gradient-to-r from-light-green to-light-blue text-transparent bg-clip-text">
          {title}
        </h2>
      </Link>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={8}
        slidesPerView={"auto"}
        loop={true}
        freeMode={true}
        navigation
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
        grabCursor={true}
      >
        {isLoading
          ? Array.from({ length: 20 }, (_, i) => (
              <SwiperSlide key={i} style={{ width: "200px" }}>
                <div className="aspect-[2/3] bg-gray-300 rounded animate-pulse"></div>
              </SwiperSlide>
            ))
          : data.map((item) => (
              <SwiperSlide key={item.id} style={{ width: "200px" }}>
                <Card
                  id={item.id}
                  type={type}
                  name={item.name}
                  image={item.image}
                  vote_average={item.vote_average}
                />
              </SwiperSlide>
            ))}
      </Swiper>
    </section>
  );
}
