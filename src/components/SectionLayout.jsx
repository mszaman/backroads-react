export default function SectionLayout({
  parentClassName = "",
  childClassName = "",
  bgColor = "bg-white",
  sectionTitle = "",
  children,
}) {
  const titleFirstPart = sectionTitle.substring(0, sectionTitle.indexOf(" "));
  const titleSecondPart = sectionTitle.substring(sectionTitle.indexOf(" "));

  return (
    <section id="about" className={`py-20 ${bgColor}`}>
      <div className="mb-16 text-center text-4xl font-extrabold uppercase tracking-[0.25rem] text-grey-2">
        <h1>
          {titleFirstPart}{" "}
          <span className="text-primary-5">{titleSecondPart}</span>
        </h1>
      </div>
      <div
        className={`mx-auto w-[90vw] lg:w-[95vw] lg:max-w-[1170px] ${childClassName}`}
      >
        {children}
      </div>
    </section>
  );
}
