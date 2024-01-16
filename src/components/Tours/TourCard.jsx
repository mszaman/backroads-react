import { tours } from "../../data";
import Description from "../Atoms/Description";
import SmallTitle from "../Atoms/SmallTitle";

export default function TourCard() {
  return (
    <>
      {tours.map((t) => (
        <article
          key={t.id}
          className="mb-8 shadow-[0_5px_15px_rgba(0,0,0,0.1)] transition duration-300 ease-linear hover:scale-[1.02] hover:shadow-[0_5px_15px_rgba(0,0,0,0.2)]"
        >
          <div className="relative">
            <img
              src={t.img}
              alt="tour 1"
              className="block h-60 w-full object-cover"
            />
            <p className="absolute bottom-0 right-0 bg-primary-8 px-2 py-1 capitalize text-primary-1">
              {t.date}
            </p>
          </div>
          <div className="px-6 py-5">
            <div>
              <SmallTitle>{t.title}</SmallTitle>
            </div>
            <Description spacing="">{t.description}</Description>
            <div className="flex flex-wrap justify-between text-sm capitalize text-primary-5">
              <p>
                <span className="mr-2">
                  <i className="fa-solid fa-map"></i>
                </span>
                {t.location}
              </p>
              <p>{t.duration}</p>
              <p>form ${t.price}</p>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
