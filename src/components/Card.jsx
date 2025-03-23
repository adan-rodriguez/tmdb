import { Link } from "react-router-dom";

export function Card({ id, image, name, type, vote_average }) {
  return (
    <Link
      className="flex flex-col relative rounded group overflow-hidden"
      to={`/${type}/${id}`}
    >
      <img
        src={
          image
            ? `https://image.tmdb.org/t/p/original${image}`
            : "/image404.avif"
        }
        alt={name}
        loading="lazy"
        className="aspect-[2/3] object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="z-10 p-3 grow flex flex-col justify-end absolute top-2/4 bottom-0 right-0 left-0 bg-gradient-to-t from-black to-transparent ">
        <h2 className="font-bold text-nowrap overflow-hidden text-ellipsis">
          {name}
        </h2>
        {vote_average && ( // person no tiene vote_average
          <div className="flex gap-x-3 items-center">
            <svg
              width="16"
              height="16"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="yellow"
            >
              <path d="M12 20.1l5.82 3.682c1.066.675 2.37-.322 2.09-1.584l-1.543-6.926 5.146-4.667c.94-.85.435-2.465-.799-2.567l-6.773-.602L13.29.89a1.38 1.38 0 0 0-2.581 0l-2.65 6.53-6.774.602C.052 8.126-.453 9.74.486 10.59l5.147 4.666-1.542 6.926c-.28 1.262 1.023 2.26 2.09 1.585L12 20.099z"></path>
            </svg>
            <span>{vote_average}</span>
          </div>
        )}
      </div>
    </Link>
  );
}
