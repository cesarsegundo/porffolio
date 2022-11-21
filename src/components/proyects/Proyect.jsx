import { motion } from "framer-motion";
import { FaRegWindowMaximize, FaGithub } from "react-icons/fa";

const Proyect = ({ image, title, description, linkWeb = null, linkRepo }) => {
  return (
    <article className="rounded-lg border border-gray-200 shadow-md ">
      <motion.img
        whileHover={{ scale: 0.9 }}
        src={image}
        alt="imagen del proyecto"
      />
      <div className="m-2">
        <p className="font-bold mb-1">{title}</p>
        <p className="text-gray-700 mb-2 text-sm">{description}</p>
        <div className="flex justify-center text-sm">
          {linkWeb != null && (
            <a
              className="bg-col2 text-white p-2 rounded-md hover:bg-col1 mr-3"
              href={linkWeb}
              target="_blank"
            >
              <div className="flex items-center">
                <FaRegWindowMaximize />
                <p className="ml-1">Webside</p>
              </div>
            </a>
          )}
          <a
            className="bg-col2 text-white p-2 rounded-md hover:bg-col1"
            href={linkRepo}
            target="_blank"
          >
            <div className="flex items-center">
              <FaGithub />
              <p className="ml-1">Repositorio</p>
            </div>
          </a>
        </div>
      </div>
    </article>
  );
};

export default Proyect;
