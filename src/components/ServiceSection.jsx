export default function SeviceSection() {
  return (
    <section id="services" className="bg-grey-10 py-20">
      <div className="mb-16 text-center text-4xl font-extrabold uppercase tracking-[0.25rem] text-grey-2">
        <h1>
          our <span className="text-primary-5">services</span>
        </h1>
      </div>
      <div className="mx-auto w-[90vw] gap-8 xs:grid xs:grid-cols-2 lg:w-[95vw] lg:max-w-[1170px] lg:grid-cols-3">
        <article className="mb-12 text-center xs:mb-0 xl:flex xl:text-left">
          <span className="mb-6 inline-block bg-primary-5 p-2 text-[2rem] text-primary-1">
            <i className="fa-solid fa-wallet w-[1.25em] text-center"></i>
          </span>
          <div className="xl:pl-4">
            <h4 className="mb-3 text-sm font-bold capitalize tracking-[0.25rem] text-grey-1">
              saving money
            </h4>
            <p className="x mx-auto mb-5 max-w-80 text-sm text-grey-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
        <article className="mb-12 text-center xs:mb-0 xl:flex xl:text-left">
          <span className="mb-6 inline-block bg-primary-5 p-2 text-[2rem] text-primary-1">
            <i className="fa-solid fa-tree w-[1.25em] text-center"></i>
          </span>
          <div className="xl:pl-4">
            <h4 className="mb-3 text-sm font-bold capitalize tracking-[0.25rem] text-grey-1">
              endless hiking
            </h4>
            <p className="x mx-auto mb-5 max-w-80 text-sm text-grey-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
        <article className="mb-12 text-center xs:mb-0 xl:flex xl:text-left">
          <span className="mb-6 inline-block bg-primary-5 p-2 text-[2rem] text-primary-1">
            <i className="fa-solid fa-socks w-[1.25em] text-center"></i>
          </span>
          <div className="xl:pl-4">
            <h4 className="mb-3 text-sm font-bold capitalize tracking-[0.25rem] text-grey-1">
              amazing comfort
            </h4>
            <p className="x mx-auto mb-5 max-w-80 text-sm text-grey-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
