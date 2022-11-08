import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="pt-7 h-20 text-lg bg-gradient-to-r from-black via-nav to-black">
      <ul className="flex justify-center text-white space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-col1" : "")}
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/acerca"
            className={({ isActive }) => (isActive ? "text-col1" : "")}
          >
            Acerca de mí
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portafolio"
            className={({ isActive }) => (isActive ? "text-col1" : "")}
          >
            Portafolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "text-col1" : "")}
          >
            Contáctame
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
