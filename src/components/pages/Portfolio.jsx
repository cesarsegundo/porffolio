import { motion } from "framer-motion";
import Proyect from "../proyects/proyect";
import foto from "../../assets/bg.jpg";
import todo from "../../assets/to-do.png";
import cripto from "../../assets/cripto.png";
import rickmorty from "../../assets/rickandmorty.png";

const Portfolio = () => {
  return (
    <div className="pt-8 px-12">
      <h2 className="mb-5 text-4xl font-bold text-col1">
        Portafolio de proyectos
      </h2>
      <motion.section
        initial={{ y: -200 }}
        animate={{ y: 1 }}
        transition={{ duration: 1 }}
        className="sm:mx-28 my-5 grid sm:grid-cols-3 gap-x-32 gap-y-10"
      >
        <Proyect
          image={cripto}
          title="Criptos"
          description="Aplicación de React de las 100 criptomonedas más populares"
          linkWeb="https://popularcriptos.vercel.app/"
          linkRepo="https://github.com/cesarsegundo/react-to-do"
        />
        <Proyect
          image={todo}
          title="To-do"
          description="Aplicación de React de un to-do con datos en localStorage"
          linkWeb="https://cesarsegundo.github.io/react-to-do/"
          linkRepo="https://github.com/cesarsegundo/react-to-do"
        />
        <Proyect
          image={rickmorty}
          title="Rick and Morty API"
          description="Grilla de los personajes de la serie Rick and Morty"
          linkWeb="https://cesarsegundo.github.io/react-rick-and-morty-api"
          linkRepo="https://github.com/cesarsegundo/react-rick-and-morty-api"
        />
        <Proyect
          image={foto}
          title="Ecommerce"
          description="Aplicación de Laravel de un ecommerce de una tienda de abarrotes"
          linkRepo="https://github.com/cesarsegundo/ecommerce"
        />
        <Proyect
          image={foto}
          title="Agenda"
          description="Aplicación de Laravel de una agenda para reservación de citas"
          linkRepo="https://github.com/cesarsegundo/ecommerce"
        />
      </motion.section>
    </div>
  );
};

export default Portfolio;
