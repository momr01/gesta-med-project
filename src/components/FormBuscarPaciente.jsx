import { FilterOutlined, SearchOutlined } from "@ant-design/icons";

const FormBuscarPaciente = () => {
  return (
    <div className="border-2 rounded-md p-2 flex">
      <img src="./img/search-icon.svg" alt="search-icon" className="w-4"  />
      <input
        type="text"
        placeholder="Buscar paciente"
        className="w-full focus:outline-none pl-2"
      />
      <img src="./img/filter-icon.svg" alt="filter-icon" className="w-4" />
    </div>
  );
};

export default FormBuscarPaciente;
