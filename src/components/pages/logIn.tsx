// import { Link } from "@tanstack/react-router}";
import { useNavigate } from "@tanstack/react-router";
import logo from "../../assets/logo.png";

export default function LogIn() {
  const navigate = useNavigate();
  return (
    <div className="bg-[#E4BA36] min-h-screen flex flex-col items-center">
      <img src={logo} alt="" className="mx-auto w-36 h-36" />

      <h1 className="text-center text-3xl font-roboto font-bold">Streakly</h1>

      <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[100px]">
        <input
          type="text"
          placeholder="Usuario"
          className="w-full h-full px-4 py-2 bg-white font-bold placeholder:font-normal text-gray-600 focus:outline-none rounded-xl"
        />
      </div>

      <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[20px]">
        <input
          type="password"
          placeholder="Contraseña"
          className="w-full h-full px-4 py-2 bg-white text-gray-600 focus:outline-none rounded-xl"
        />
      </div>

      <button className="w-72 h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[40px] cursor-pointer">
        Iniciar sesión
      </button>

      <button
        className="w-72 h-12 rounded-xl font-roboto font-extrabold text-lg mt-[10px] cursor-pointer"
        onClick={() => navigate({ to: "/register" })}
      >
        Registrarse
      </button>

      <footer className="bg-black w-full text-white font-roboto text-center py-4 mt-auto">
        © 2025 Streakly. Todos los derechos reservados.
      </footer>
    </div>
  );
}
