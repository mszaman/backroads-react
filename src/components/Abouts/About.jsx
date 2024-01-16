import aboutImage from "../../assets/images/about.jpeg";
import Description from "../Atoms/Description";

export default function About() {
  return (
    <>
      <div className="mb-8 lg:mb-0 xl:relative">
        <div className="xl:before:absolute xl:before:-left-6 xl:before:-top-6 xl:before:-z-10 xl:before:box-border xl:before:h-full xl:before:w-full xl:before:border-8 xl:before:border-primary-4 xl:before:bg-gray-700">
          <img src={aboutImage} alt="" className="block w-full" />
        </div>
      </div>
      <div>
        <h2 className="mb-3 text-[1.75rem] font-extrabold capitalize tracking-[0.25rem] text-grey-2">
          explore the difference
        </h2>
        <Description mb="mb-5" spacing="" size="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </Description>
        <Description mb="mb-8" spacing="" size="text-base">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
          quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
          unde dolor?
        </Description>
        <a
          href="#"
          className="border-4 border-primary-5 bg-primary-5 px-3 py-[6px] text-sm uppercase tracking-[0.25rem] text-white shadow transition duration-300 ease-linear hover:border-primary-8 hover:bg-primary-8 hover:text-primary-1"
        >
          read more
        </a>
      </div>
    </>
  );
}
