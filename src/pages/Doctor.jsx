import { DownOutlined } from "@ant-design/icons";
import {
  FormBuscarPaciente,
  InformacionGralPaciente,
  ListadoPacientes,
  Navbar,
} from "../components";
import { pacienteData } from "../styles";

const Doctor = () => {
  return (
    <>
      <Navbar />

      <section className="border-t-2 flex box-border">
        <div className="w-[30%]">
          <div className="lg:px-7 xl:px-10 px-4 py-5">
            <FormBuscarPaciente />
          </div>
          <hr />
          <ListadoPacientes />
          <div className="lg:w-[80%] xl:w-[70%] w-[90%] mx-auto mt-5">
            <button className="bg-secondary w-full h-14 rounded-lg text-white">
              Agregar paciente
            </button>
          </div>
        </div>

        <div className="w-[70%] pl-5">
          <div className="py-5">
            <div className="flex">
              <h2 className="font-bold text-[20px] mb-0 mr-3">Jhon Doe</h2>
              <img src="./img/edit-icon.svg" alt="edit-icon" className="my-auto w-4 cursor-pointer" />
            </div>

            <button className="text-[10px] px-[0.4rem] py-[0.2rem] rounded-md bg-primary text-secondary font-semibold">
              Hospitalización
              <DownOutlined className="ml-1" />
            </button>
          </div>
          <div>
            <div>
              <ul className="flex">
                <li className={pacienteData.navLi}>Información general</li>
                <li className={pacienteData.navLi}>Datos de admisión</li>
                <li className={pacienteData.navLi}>Diagnósticos</li>
                <li className={pacienteData.navLi}>Relación aseguradora</li>
              </ul>
            </div>

            <InformacionGralPaciente />
          </div>
        </div>
      </section>
    </>
  );
};

export default Doctor;
