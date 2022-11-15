import { FormBuscarPaciente, ListadoPacientes } from "./index.js";

const DoctorAside = () => {
  return (
    <div className="w-[30%] border-r-[1px] aside-height">
      <div className="lg:px-7 xl:px-10 px-4 py-5">
        <FormBuscarPaciente />
      </div>
      <hr />
      <ListadoPacientes />
      <div className="lg:w-[80%] xl:w-[70%] w-[90%] mx-auto xl:mt-5 mt-[20%]">
        <button className="bg-secondary w-full h-16 rounded-2xl text-white hover:bg-primary hover:text-secondary text-xl">
          Agregar paciente
        </button>
      </div>
    </div>
  );
};

export default DoctorAside;
