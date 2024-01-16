import About from "./About";
import SectionLayout from "../Layouts/SectionLayout";

export default function AboutSection() {
  return (
    <>
      <SectionLayout
        sectionTitle="about us"
        childClassName={`lg:grid lg:grid-cols-2 lg:gap-x-10`}
      >
        <About />
      </SectionLayout>
    </>
    // <section id="about" className="py-20">
    //   <div className="mb-16 text-center text-4xl font-extrabold uppercase tracking-[0.25rem] text-grey-2">
    //     <h1>
    //       about <span className="text-primary-5">us</span>
    //     </h1>
    //   </div>
    //   <div className="mx-auto w-[90vw] lg:grid lg:w-[95vw] lg:max-w-[1170px] lg:grid-cols-2 lg:gap-x-10">
    //     <About />
    //     {/* <div className="mb-8 lg:relative lg:mb-0">
    //       <div className="xl:before:absolute xl:before:-left-6 xl:before:-top-6 xl:before:-z-10 xl:before:box-border xl:before:h-full xl:before:w-full xl:before:border-8 xl:before:border-primary-4 xl:before:bg-gray-700">
    //         <img src={aboutImage} alt="" className="block w-full" />
    //       </div>
    //     </div>
    //     <div>
    //       <h2 className="mb-3 text-[1.75rem] font-extrabold capitalize tracking-[0.25rem] text-grey-2">
    //         explore the difference
    //       </h2>
    //       <p className="mb-5 text-base tracking-widest text-grey-5">
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
    //         quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
    //         unde dolor?
    //       </p>
    //       <p className="mb-8 text-base tracking-widest text-grey-5">
    //         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
    //         quisquam harum nam cumque temporibus explicabo dolorum sapiente odio
    //         unde dolor?
    //       </p>
    //       <a
    //         href="#"
    //         className="border-4 border-primary-5 bg-primary-5 px-3 py-[6px] text-sm uppercase tracking-[0.25rem] text-white shadow transition duration-300 ease-linear hover:border-primary-8 hover:bg-primary-8 hover:text-primary-1"
    //       >
    //         read more
    //       </a>
    //     </div> */}
    //   </div>
    // </section>
  );
}
