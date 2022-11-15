import { DownOutlined } from "@ant-design/icons";
import { pacienteData } from "../styles.js";
import { InformacionGralPaciente } from "./index.js";

const DoctorMain = () => {
  return (
    <div className="w-[70%]">
      <div className="py-[1.03rem] border-b-[1px]">
        <div className="pl-7">
          <div className="flex">
            <h2 className="font-bold text-2xl mb-[3px] mr-3">Jhon Doe</h2>
            <img
              src="./img/edit-icon.svg"
              alt="edit-icon"
              className="my-auto w-4 cursor-pointer"
            />
          </div>

          <button className="flex text-xs px-[0.4rem] py-[0.2rem] rounded-md bg-primary text-secondary font-semibold">
            Hospitalización
            <img src="./img/under-icon.svg" alt="under-icon" className="my-auto ml-1" />
          </button>
        </div>
      </div>
      <div>
        <div className="pt-2">
          <ul className="flex border-b-[1px] pl-7">
            <li className={pacienteData.navLi}>Información general</li>
            <li className={pacienteData.navLi}>Datos de admisión</li>
            <li className={pacienteData.navLi}>Diagnósticos</li>
            <li className={pacienteData.navLi}>Relación aseguradora</li>
          </ul>
        </div>

        <InformacionGralPaciente />
      </div>
    </div>
  );
};

export default DoctorMain;
