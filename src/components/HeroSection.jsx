import heroImage from "../assets/images/main.jpeg";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative -z-20 flex min-h-screen items-center justify-center bg-primary-5 text-white"
    >
      {/* Hero Image */}
      <img
        src={heroImage}
        alt="Hero Image"
        className="hidden sm:absolute sm:top-0 sm:-z-40 sm:block sm:h-screen sm:w-full sm:bg-cover sm:bg-center sm:object-cover"
      />
      {/* Hero Gradient */}
      <div className="hidden sm:absolute sm:top-0 sm:-z-30 sm:block sm:h-screen sm:w-full sm:bg-gradient-to-b sm:from-primary-5 sm:to-black sm:opacity-70"></div>
      {/* Hero Content */}
      <div className="mx-20 py-10 text-center">
        <h1 className="mb-4 text-6xl font-bold uppercase tracking-widest">
          continue exploring
        </h1>
        <p className="mb-8 text-[1rem] tracking-[0.25rem]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a
          href="#tours"
          className="bg-white px-8 py-4 text-2xl uppercase tracking-widest text-primary-5"
        >
          explore tours
        </a>
      </div>
    </section>
  );
}
