import { useParams } from "react-router-dom";
import { useGetPerson } from "../hooks/useGetPerson";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper/modules";

export function PersonPage() {
  const { id } = useParams();
  const { isLoading, isError, person } = useGetPerson({ id });

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;

  return (
    <div className="bg-zinc-900">
      <div className="flex flex-col md:flex-row">
        <div className="relative h-[calc(100vh-60px)] aspect-[2/3] after:absolute after:inset-0 after:top-1/2 md:after:bg-gradient-to-b after:from-transparent after:to-[#18181b]">
          <div className="z-10 absolute w-full p-4 bg-gradient-to-b from-black to-transparent">
            <h2 className="text-3xl font-black">{person.name}</h2>
            <div className="text-sm opacity-80 ">
              <time>{person.birthday}</time>{" "}
              {person.deathday && (
                <>
                  <span aria-hidden="true">|</span>{" "}
                  <time>{person.deathday}</time>
                </>
              )}
            </div>
          </div>
          <img
            className="h-full w-full object-cover [mask-image:linear-gradient(to_bottom,#18181b_50%,transparent_100%)] md:[mask-image:linear-gradient(to_right,#18181b_50%,transparent_100%)]"
            src={
              person.image
                ? `https://image.tmdb.org/t/p/original${person.image}`
                : "/image404.avif"
            }
            alt={person.name}
          />
        </div>
        <div className="p-4 flex flex-col gap-5">
          <p>{person.biography}</p>

          {/* <span>Know for: {person.known_for}</span> */}
          {/* <span>Place of birth: {person.place_of_birth || "unknown"}</span> */}
        </div>
      </div>
      <div className="p-4">
        <Swiper
          modules={[Navigation, A11y]}
          spaceBetween={8}
          slidesPerView={"auto"}
          loop={true}
          freeMode={true}
          navigation
          grabCursor={true}
        >
          {person.images.map((image) => (
            <SwiperSlide key={image} style={{ width: "200px" }}>
              <img
                className="w-full aspect-[2/3] rounded"
                src={`https://image.tmdb.org/t/p/w185${image}`}
                alt={`Image of ${person.name}`}
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
