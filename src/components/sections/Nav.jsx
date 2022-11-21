import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Nav = () => {
  return (
    <nav className="pt-7 h-20 text-lg bg-gradient-to-r from-black via-nav to-black">
      <ul className="flex justify-center text-white space-x-4">
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-col1" : "")}
          >
            Inicio
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            to="/acerca"
            className={({ isActive }) => (isActive ? "text-col1" : "")}
          >
            Acerca de mí
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            to="/portafolio"
            className={({ isActive }) => (isActive ? "text-col1" : "")}
          >
            Portafolio
          </NavLink>
        </motion.li>
        <motion.li whileTap={{ scale: 0.9 }}>
          <NavLink
            to="/contacto"
            className={({ isActive }) => (isActive ? "text-col1" : "")}
          >
            Contáctame
          </NavLink>
        </motion.li>
      </ul>
    </nav>
  );
};

export default Nav;
