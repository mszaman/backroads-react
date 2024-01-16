import { services } from "../../data";
import Description from "../Atoms/Description";
import SmallTitle from "../Atoms/SmallTitle";

export default function Service() {
  return (
    <>
      {services.map((s) => (
        <article
          key={s.id}
          className="mb-12 text-center xs:mb-0 xl:flex xl:text-left"
        >
          <span className="mb-6 inline-block bg-primary-5 p-2 text-[2rem] text-primary-1">
            <i className={`fa-solid ${s.icon} w-[1.25em] text-center`}></i>
          </span>
          <div className="xl:pl-4">
            <SmallTitle>{s.title}</SmallTitle>
            <Description mx="mx-auto" width="max-x-80" spacing="">
              {s.description}
            </Description>
          </div>
        </article>
      ))}
    </>
  );
}
