import { navMain } from "../styles";

const Navbar = () => {
  return (
    <nav className="w-[95%] mx-auto h-20">
      <ul className="flex justify-between h-full">
        <div className="flex my-auto">
          <div>
            <li>
              <img src="./img/gesta-med-logo.PNG" alt="logo" className="h-10" />
            </li>
          </div>

          <div className="flex ml-10 my-auto">
            <li className={navMain.item}>Inicio</li>
            <li className={navMain.item}>Pacientes</li>
            <li className={navMain.item}>Episodios</li>
            <li className={navMain.item}>Citas agendadas</li>
          </div>
        </div>
        <div className="my-auto">
          <li className="flex">
            <div className="text-end">
              <p className="m-0 font-bold">Bienvenido Dr. Gregory</p>
              <p className="m-0 text-slate-400">Cardiólogo</p>
            </div>

            <img src="./vite.svg" alt="profile" className="ml-3" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
