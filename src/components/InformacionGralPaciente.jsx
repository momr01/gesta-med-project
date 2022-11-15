import { pacienteData } from "../styles";

const InformacionGralPaciente = () => {
  return (
    <div className="text-sm">
      <div>
        <Paciente />
      </div>

      <div className="mt-5 text-sm">
        <Direccion />
      </div>

      <div className="mt-5 text-sm">
        <UltimaVisita />
      </div>
    </div>
  );
};

const Paciente = () => {
  return (
    <>
      <h2 className="font-bold mb-0 lg:text-base text-xs">Paciente</h2>
      <hr className="mb-4" />
      <div className="flex">
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Nombre (s):</p>
          <p className={pacienteData.data}>Jhon</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Apellido Materno</p>
          <p className={pacienteData.data}>Doe</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Apellido Paterno</p>
          <p className={pacienteData.data}>-----</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Sexo</p>
          <p className={pacienteData.data}>Masculino</p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Fecha de nacimiento</p>
          <p className={pacienteData.data}>20/Noviembre/1989</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Correo electrónico</p>
          <p className={pacienteData.data}>jhondoe@syncronik.com</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Número de teléfono</p>
          <p className={pacienteData.data}>+529371303699</p>
        </div>
      </div>
    </>
  );
};

const Direccion = () => {
  return (
    <>
      <h2 className="font-bold mb-0 lg:text-base text-xs">Dirección</h2>
      <hr className="mb-4" />
      <div className="flex">
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Calle</p>
          <p className={pacienteData.data}>
            Cerrada La Huasteca, Lote 4, Colonia Melchor Ocampo.
          </p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>País</p>
          <p className={pacienteData.data}>México</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Distrito</p>
          <p className={pacienteData.data}>Tabasco</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Región</p>
          <p className={pacienteData.data}>Cárdenas</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>CP</p>
          <p className={pacienteData.data}>86520</p>
        </div>
      </div>
    </>
  );
};

const UltimaVisita = () => {
  return (
    <>
      <h2 className="font-bold mb-0 lg:text-base text-xs">Última visita</h2>
      <hr className="mb-4" />
      <div className="flex">
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Ingreso</p>
          <p className={pacienteData.data}>
            30 de Agosto del 2022 a las 11:32 HRS.
          </p>
        </div>
      </div>
      <div className="flex mt-5">
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Clase episodio</p>
          <p className={pacienteData.data}>Hospitalizado</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Clase Admisión</p>
          <p className={pacienteData.data}>Admisión por Tratamiento</p>
        </div>
        <div className={pacienteData.div}>
          <p className={pacienteData.label}>Médico en admisión</p>
          <p className={pacienteData.data}>Gregory House (8500001)</p>
        </div>
      </div>
    </>
  );
};

export default InformacionGralPaciente;
