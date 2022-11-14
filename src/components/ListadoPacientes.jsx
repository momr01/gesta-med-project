import { pacientesList } from "../data/pacientesList";
import { RightOutlined } from "@ant-design/icons";

const ListadoPacientes = () => {
  return (
    <div className="h-[85%]">
      {pacientesList.map((paciente) => (
        <button className="w-full" key={paciente.id}>
          <div className="flex justify-between py-4 hover:bg-primary">
            <div className="w-[80%] mx-auto flex justify-between">
              <div className="flex">
                <div className="mr-2">
                  <img src={`${paciente.img_url}`} alt="img-profile" />
                </div>

                <div>
                  <span className="font-bold mr-2">{paciente.nombre}</span>
                  <span className="text-[10px] px-1 rounded-md bg-primary">
                    {paciente.clase_episodio}
                  </span>
                  <br />
                  <p className="text-[10px] text-start mb-0">
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
