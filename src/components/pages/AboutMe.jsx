import { motion } from "framer-motion"

import pdf from "../../assets/cesarCV.pdf"
import SvgJavaScript from "../../assets/javascript.svg"
import SvgTypescript from "../../assets/typescript.svg"
import SvgPhp from "../../assets/php.svg"
import SvgCss from "../../assets/css.svg"
import SvgReact from "../../assets/react.svg"
import SvgLaravel from "../../assets/laravel.svg"
import SvgMysql from "../../assets/mysql.svg"
import SvgTailwind from "../../assets/tailwindcss.svg"
import SvgGit from "../../assets/git-icon.svg"

const AboutMe = () => {
  return (
    <div className="pt-8 px-12">
      <h2 className="mb-5 text-4xl font-bold text-col1">Acerca de mí</h2>
      <div className="grid sm:grid-cols-2  gap-40">
        <section className="col-span-1  tracking-wide leading-loose text-justify">
          <p className="font-bold my-3">
            Soy Cesar, Desarrollador web / Licenciado en Informática
          </p>
          <p className="text-gray-700 mb-4">
            Soy un programador que ha desarrollando websites y aplicaciones web.
            Me especializo en JavaScript y tengo mayor experiencia trabajando
            con React.
          </p>
          <p className="text-gray-700 mb-5">
            También he realizado proyectos con PHP utilizando el framework
            Laravel haciendo conexiones a Bases de Datos como MySQL y Postgres.
          </p>
          <p className="text-gray-700 mb-5">
            Me considero una persona que constantemente esta buscando mejorar
            mis habilidades y seguir creciendo profesionalmente. Además, trabajo
            muy bien con equipos de trabajo teniendo una buena comunicación y
            ayudando con dudas.
          </p>
          <a
            className="bg-col2 text-white p-3 rounded-md hover:bg-col1"
            href={pdf}
            rel="noopener noreferrer"
            download="Dev Cesar CV"
          >
            Descargar CV
          </a>
        </section>
        <section className="col-span-1">
          <h3 className="my-3 font-bold">Mis habilidades</h3>
          <div className="grid sm:grid-cols-3 grid-cols-2 justify-items-center gap-y-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.15 }}
            >
              <img
                src={SvgJavaScript}
                alt="javascript icon"
                className="w-24 h-24"
              />
              <p className="mt-2 text-center">Javascript</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={SvgTypescript}
                alt="typejavascript icon"
                className="w-24 h-24"
              />
              <p className="mt-2 text-center">Typescript</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
            >
              <img src={SvgPhp} alt="php icon" className="w-24 h-24" />
              <p className="mt-2 text-center">PHP</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <img src={SvgReact} alt="react icon" className="w-24 h-24" />
              <p className="mt-2 text-center">React</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.75 }}
            >
              <img src={SvgLaravel} alt="laravel icon" className="w-24 h-24" />
              <p className="mt-2text-center">Laravel</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9 }}
            >
              <img src={SvgMysql} alt="mysql icon" className="w-24 h-24" />
              <p className="mt-2 text-center">MySQL</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.05 }}
            >
              <img src={SvgCss} alt="css icon" className="w-24 h-24" />
              <p className="mt-2 text-center">CSS</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2 }}
            >
              <img
                src={SvgTailwind}
                alt="tailwind icon"
                className="w-24 h-24"
              />
              <p className="mt-2 text-center">Tailwind CSS</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.35 }}
            >
              <img src={SvgGit} alt="git icon" className="w-24 h-24" />
              <p className="mt-2 text-center">Git</p>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default AboutMe
