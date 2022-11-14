import { FilterOutlined, SearchOutlined } from "@ant-design/icons";

const FormBuscarPaciente = () => {
  return (
    <div className="border-2 rounded-md p-2 flex">
      <SearchOutlined className="text-lg text-slate-400" />
      <input
        type="text"
        placeholder="Buscar paciente"
        className="w-full focus:outline-none pl-2"
      />
      <FilterOutlined className="text-lg" />
    </div>
  );
};

export default FormBuscarPaciente;
