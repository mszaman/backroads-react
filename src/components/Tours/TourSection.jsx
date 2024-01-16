import TourCard from "./TourCard";

export default function ToursSection() {
  return (
    <section id="tours" className="bg-white py-20">
      <div className="mb-16 text-center text-4xl font-extrabold uppercase tracking-[0.25rem] text-grey-2">
        <h1>
          featured <span className="text-primary-5">tours</span>
        </h1>
      </div>
      <div className="mx-auto grid w-[90vw] grid-cols-1 gap-8 sm:grid-cols-2 lg:w-[95vw] lg:max-w-[1170px] xl:grid-cols-3">
        <TourCard />
      </div>
    </section>
  );
}
