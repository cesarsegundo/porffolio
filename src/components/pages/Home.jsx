import { motion } from "framer-motion";
import Foto from "../../assets/foto.jpg";

const Home = () => {
  return (
    <>
      <section className="h-[calc(100vh_-_5rem)] flex p-9 justify-center items-center  relative bg-black/75">
        <div className="bg-bgp bg-[url('/src/assets/fondo.webp')] bg-fixed bg-cover bg-center h-full w-full absolute z-1"></div>
        <picture className="m-10">
          <motion.img
            className="w-60 rounded-xl"
            alt="foto perfil"
            src={Foto}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          />
        </picture>
        <motion.div
          className="text-white text-5xl flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <span className="mb-5">Hola!</span>
          <h1 className="text-col1 mb-5">Soy Cesar Uriel</h1>
          <span className="mb-5">Desarrollador web</span>
        </motion.div>
      </section>
    </>
  );
};
export default Home;
