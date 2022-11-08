import pdf from "../../assets/cesar-cv.pdf";
import SvgJavaScript from "../../assets/javascript.svg";
import SvgTypescript from "../../assets/typescript.svg";
import SvgPhp from "../../assets/php.svg";
import SvgCss from "../../assets/css.svg";
import SvgReact from "../../assets/react.svg";
import SvgLaravel from "../../assets/php.svg";
import SvgMysql from "../../assets/mysql.svg";
import SvgTailwind from "../../assets/tailwindcss.svg";
import SvgGit from "../../assets/git-icon.svg";

const AboutMe = () => {
  return (
    <div className="pt-8 px-12">
      <h2 className="mb-5 text-4xl font-bold text-col1">Acerca de mí</h2>
      <div className="grid grid-cols-2 gap-40">
        <section className="col-span-1 tracking-wide leading-loose text-justify">
          <p className="font-bold my-3">
            Soy Cesar, Desarrollador web / Licenciado en Informática
          </p>
          <p className="text-gray-700 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            molestias omnis ad tenetur eaque, laborum eligendi temporibus alias
            officiis, numquam nostrum voluptate. Repellat eum rem, et provident
            in cumque ea. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Labore nulla id reprehenderit
          </p>
          <p className="text-gray-700 mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, ad
            perferendis. Repellendus, hic quia? Iure, quam. Eligendi, provident
            officia? Dolorem in culpa distinctio provident impedit ut nemo
            tempora, quod consequuntur. amet.
          </p>
          <a
            className=" bg-col2 text-white p-3 rounded-md hover:bg-col1"
            href={pdf}
            rel="noopener noreferrer"
            download="Dev Cesar CV"
          >
            Descargar CV
          </a>
        </section>
        <section className="col-span-1">
          <h3 className="my-3 font-bold">Mis habilidades</h3>
          <div className="grid grid-cols-3 justify-items-center gap-y-16">
            <div>
              <img
                src={SvgJavaScript}
                alt="javascript icon"
                className="w-24 h-24"
              />
              <p className="mt-2 text-center">Javascript</p>
            </div>
            <div>
              <img
                src={SvgTypescript}
                alt="typejavascript icon"
                className="w-24 h-24"
              />
              <p className="mt-2 text-center">Typescript</p>
            </div>
            <div>
              <img src={SvgPhp} alt="php icon" className="w-24 h-24" />
              <p className="mt-2 text-center">PHP</p>
            </div>
            <div>
              <img src={SvgReact} alt="react icon" className="w-24 h-24" />
              <p className="mt-2 text-center">React</p>
            </div>
            <div>
              <img src={SvgLaravel} alt="laravel icon" className="w-24 h-24" />
              <p className="mt-2text-center">Laravel</p>
            </div>
            <div>
              <img src={SvgMysql} alt="mysql icon" className="w-24 h-24" />
              <p className="mt-2 text-center">MySQL</p>
            </div>
            <div>
              <img src={SvgCss} alt="css icon" className="w-24 h-24" />
              <p className="mt-2 text-center">CSS</p>
            </div>
            <div>
              <img
                src={SvgTailwind}
                alt="tailwind icon"
                className="w-24 h-24"
              />
              <p className="mt-2 text-center">Tailwind CSS</p>
            </div>
            <div>
              <img src={SvgGit} alt="git icon" className="w-24 h-24" />
              <p className="mt-2 text-center">Git</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutMe;
