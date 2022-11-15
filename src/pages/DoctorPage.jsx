import { DoctorAside, DoctorMain, Navbar } from "../components";

const Doctor = () => {
  return (
    <>
      <Navbar />
      <section className="border-t-[1px] flex box-border font-lato">
        <DoctorAside />
        <DoctorMain />
      </section>
    </>
  );
};

export default Doctor;
