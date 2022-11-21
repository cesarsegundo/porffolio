import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRef } from "react";
import github from "../../assets/github-icon.svg";
import linkedin from "../../assets/linkedin-icon.svg";

const Contact = () => {
  const [send, setSend] = useState(false);

  const serviceId = import.meta.env.VITE_SERVICE_ID;
  const templeteId = import.meta.env.VITE_TEMPLETE_ID;
  const key = import.meta.env.VITE_PUBLIC_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(serviceId, templeteId, e.target, key)
      .then((response) => {
        console.log(response);
        form.current.reset();
        setSend(true);
      })
      .catch((error) => consol.log(error));
  };
  return (
    <section>
      <h2 className="mb-5 text-4xl font-bold text-col1 mt-8 ml-12">Contácto</h2>
      <div className="sm:grid sm:place-content-center text-lg mx-12">
        <form onSubmit={sendEmail} ref={form}>
          <div className="sm:flex">
            <div className="mb-4 mr-48">
              <label htmlFor="name">Nombre</label>
              <input
                className="bg-gray-50 border border-col1 text-gray-900 text-sm rounded-lg focus:ring-col1 focus:border-col1 block w-60 p-2.5"
                type="text"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Correo electrónico</label>
              <input
                className="bg-gray-50 border border-col1 text-gray-900 text-sm rounded-lg focus:ring-col1 focus:border-col1 block w-60 p-2.5"
                type="email"
                name="email"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="message">Mensaje</label>
            <textarea
              className="bg-gray-50 border border-col1 text-gray-900 text-sm rounded-lg focus:ring-col1 focus:border-col1 block w-full p-2.5"
              name="message"
              id=""
              cols="30"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="bg-col2 text-white p-3 rounded-md hover:bg-col1">
              Enviar
            </button>
          </div>
        </form>
        {send && (
          <div
            className="bg-green-100 rounded-lg py-5 px-6 mt-3 text-base text-green-700 mb-3"
            role="alert"
          >
            Mensaje enviado correctamente!, espere la respuesta por email.
          </div>
        )}
      </div>
      <div className="flex justify-around mt-5">
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
          href="https://github.com/cesarsegundo"
        >
          <motion.img
            whileHover={{ scale: 0.9 }}
            className="w-20"
            src={github}
            alt="icono github"
          />
          <p>Sigueme</p>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center"
          href="https://www.linkedin.com/in/cesar-uriel-segundo-lorenzo-0493a11aa/"
        >
          <motion.img
            whileHover={{ scale: 0.9 }}
            className="w-20"
            src={linkedin}
            alt="icono linkedin"
          />
          <p>Contáctame</p>
        </motion.a>
      </div>
    </section>
  );
};

export default Contact;
