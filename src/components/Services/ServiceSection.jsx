import SectionLayout from "../Layouts/SectionLayout";
import Service from "./Service";

export default function SeviceSection() {
  return (
    <>
      <SectionLayout
        bgColor="bg-grey-10"
        sectionTitle="our services"
        childClassName="mx-auto gap-8 xs:grid xs:grid-cols-2 lg:grid-cols-3"
      >
        <Service />
      </SectionLayout>
    </>
  );
}
