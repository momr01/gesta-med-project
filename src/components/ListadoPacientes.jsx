import { pacientesList } from "../data/pacientesList";
import { RightOutlined } from "@ant-design/icons";

const ListadoPacientes = () => {
  return (
    <div className="h-[80%] lg:h-auto">
      {pacientesList.map((paciente) => (
        <button className="w-full" key={paciente.id}>
          <div className="flex justify-between py-4 hover:bg-[#DFE8F9]">
            <div className="lg:w-[80%] w-[90%] mx-auto flex justify-between">
              <div className="flex">
                <div className="lg:mr-2 mr-1">
                  <img
                    src={`${paciente.img_url}`}
                    alt="img-profile"
                    className="w-12"
                  />
                </div>

                <div>
                  <span className="font-bold xl:mr-2 mr-1 lg:text-base text-xs">
                    {paciente.nombre}
                  </span>
                  <span
                    className={`lg:text-[10px] text-[8px] px-[0.4rem] py-[0.2rem] rounded-md ${
                      paciente.clase_episodio === "Hospitalización" &&
                      "text-secondary bg-primary"
                    } ${
                      paciente.clase_episodio === "Urgencias" &&
                      "text-[#FF1D1D] bg-red-100"
                    }  font-semibold ${
                      paciente.clase_episodio === "Inhaloterapia" &&
                      "text-[#8E1DFF] bg-[#F3CAF9]"
                    }`   }
                  >
                    {paciente.clase_episodio}
                  </span>
                  <br />
                  <p className="lg:text-[10px] text-[8px] text-start mb-0">
                    {`No. paciente: ${paciente.nro_paciente}`}
                  </p>
                </div>
              </div>

              <div>
                <RightOutlined />
              </div>
            </div>
          </div>
        </button>
      ))}
    </div>
  );
};

export default ListadoPacientes;
