import logo from "../../assets/logo.png";
import { useNavigate } from "@tanstack/react-router";
export default function Register() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#E4BA36] min-h-screen flex flex-col items-center">
      
  <div className="mr-70">
      <img src={logo} alt="" className="w-12 h-12" />
      <h1 className="font-roboto font-bold">Streakly</h1>
    </div>

    <span className="font-roboto text-4xl font-extrabold ">¡Bienvenido!</span>
  
      
      <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[80px]">
        <input
          type="text"
          placeholder="Nombre"
          className="w-full h-full px-4 py-2 bg-white font-bold placeholder:font-normal text-gray-600 focus:outline-none rounded-xl"
        />
      </div>

      <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[20px]">
        <input
          type="email"
          placeholder="Correo electrónico"
          className="w-full h-full px-4 py-2 bg-white text-gray-600 focus:outline-none rounded-xl"
        />
      </div>
      <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[20px]">
        <input
          type="text"
          placeholder="Usuario"
          className="w-full h-full px-4 py-2 bg-white text-gray-600 focus:outline-none rounded-xl"
        />
      </div>
      <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[20px]">
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full h-full px-4 py-2 bg-white text-gray-600 focus:outline-none rounded-xl"
        />
      </div>

      <button className="w-72 h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[40px] cursor-pointer" onClick={() => navigate({ to: "/Inicio" })}>
        Registrarse
      </button>

      <div
        className="w-72 h-12 font-roboto italic text-lg mt-[20px] text-center"
      >
        "Un día más en tu camino a la victoria"
      </div>

      <footer className="bg-black w-full text-white font-roboto text-center py-4 mt-auto">
        © 2025 Streakly. Todos los derechos reservados.
      </footer>
    </div>
  );
}