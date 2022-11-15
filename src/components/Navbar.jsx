import { navMain } from "../styles";

const Navbar = () => {
  return (
    <nav className="w-[95%] mx-auto h-20">
      <ul className="flex justify-between h-full">
        <div className="flex my-auto">
          <div>
            <li>
              <img src="./img/logo.svg" alt="logo" className="lg:h-16 h-8" />
            </li>
          </div>

          <div className="flex lg:ml-10 ml-5 my-auto">
            <li className={navMain.item}>Inicio</li>
            <li className={navMain.item}>Pacientes</li>
            <li className={navMain.item}>Episodios</li>
            <li className={navMain.item}>Citas agendadas</li>
          </div>
        </div>
        <div className="my-auto">
          <li className="flex">
            <div className="text-end">
              <p className="m-0 font-bold lg:text-lg text-xs">Bienvenido Dr. Gregory</p>
              <p className="m-0 text-slate-400 lg:text-lg text-xs">Cardiólogo</p>
            </div>

            <img src="./img/profile-doctor.svg" alt="profile" className="my-auto ml-3 lg:h-12 h-7" />
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
