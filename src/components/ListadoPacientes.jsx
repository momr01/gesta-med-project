import { pacientesList } from "../data/pacientesList";
import { RightOutlined } from "@ant-design/icons";

const ListadoPacientes = () => {
  return (
    <div className="h-[80%] lg:h-auto font-lato">
      {pacientesList.map((paciente) => (
        <button className="w-full border-b-[1px]" key={paciente.id}>
          <div className="flex justify-between py-3 hover:bg-[#DFE8F9]">
            <div className="lg:w-[80%] w-[90%] mx-auto flex justify-between">
              <div className="flex">
                <div className="lg:mr-2 mr-1">
                  <img
                    src={`${paciente.img_url}`}
                    alt="img-profile"
                    className="w-12"
                  />
                </div>

                <div className="my-auto">
                  <div className="flex">
                    <span className="font-bold mr-2 lg:text-sm text-xs my-auto">
                      {paciente.nombre}
                    </span>
                    <span
                      className={`lg:text-[9px] text-[8px] px-[0.4rem] py-[0.2rem] rounded-md my-auto ${
                        paciente.clase_episodio === "Hospitalización" &&
                        "text-secondary bg-primary"
                      } ${
                        paciente.clase_episodio === "Urgencias" &&
                        "text-[#FF1D1D] bg-red-100"
                      }  font-semibold ${
                        paciente.clase_episodio === "Inhaloterapia" &&
                        "text-[#8E1DFF] bg-[#F3CAF9]"
                      }`}
                    >
                      {paciente.clase_episodio}
                    </span>
                  </div>
                  <p className="lg:text-[11px] text-[8px] text-start mb-0">
                    {`No. paciente: ${paciente.nro_paciente}`}
                  </p>
                </div>
              </div>

              <div className="my-auto">
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
