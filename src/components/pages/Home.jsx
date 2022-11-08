import Foto from "../../assets/foto.jpg";
const Home = () => {
  return (
    <>
      <section className="h-[calc(100vh_-_5rem)] flex p-9 justify-center items-center  relative bg-black/75">
        <div className="bg-bgp bg-[url('https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTEwfHxwcm9ncmFtbWluZ3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] bg-fixed bg-cover bg-center h-full w-full absolute z-1"></div>
        <picture className="m-10">
          <img className="w-60 rounded-xl" alt="foto perfil" src={Foto} />
        </picture>
        <div className="text-white text-5xl flex flex-col items-center">
          <span className="mb-5">Hola!</span>
          <h1 className="text-col1 mb-5">Soy Cesar Uriel</h1>
          <span className="mb-5">Desarrollador web</span>
        </div>
      </section>
    </>
  );
};

export default Home;
