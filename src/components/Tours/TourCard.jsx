export default function TourCard({
  id,
  title,
  description,
  img,
  date,
  location,
  duration,
  price,
}) {
  return (
    <article className="mb-8 shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition duration-300 ease-linear hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]">
      <div className="relative">
        <img
          src={img}
          alt="tour 1"
          className="block h-60 w-full object-cover"
        />
        <p className="absolute bottom-0 right-0 bg-primary-8 px-2 py-1 capitalize text-primary-1">
          {date}
        </p>
      </div>
      <div className="px-6 py-5">
        <div>
          <h4 className="mb-3 text-sm font-bold capitalize tracking-[0.25rem] text-grey-1">
            {title}
          </h4>
        </div>
        <p className="mb-5 text-sm text-grey-5">{description}</p>
        <div className="flex flex-wrap justify-between text-sm capitalize text-primary-5">
          <p>
            <span>
              <i className="fa-solid fa-map"></i>
            </span>
            {location}
          </p>
          <p>{duration}</p>
          <p>form ${price}</p>
        </div>
      </div>
    </article>
  );
}
