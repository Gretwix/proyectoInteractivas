import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import logo from "../../assets/logo.png";
import { Route as InicioRoute } from "../../routes/Inicio";

export default function LogIn() {
  const navigate = useNavigate();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<any>({});

  const loginMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("http://proyectofinal.test/api/v1/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ login, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw data; // Lanza todo el error para el onError
      }

      return data;
    },
    onSuccess: (data) => {
      setErrors({});
      localStorage.setItem("token", data.token);
      navigate({ to: InicioRoute.to }); // Redirige a la página principal
    },
    onError: (error: any) => {
      // Si es validación (faltan datos)
      if (error?.errors) {
        setErrors(error.errors);
      }
      // Si es credenciales incorrectas u otro error
      else if (error?.message) {
        // El mensaje lo ponemos en errors.password para mostrarlo abajo de la contraseña
        setErrors({ password: [error.message] });
      } else {
        setErrors({ password: ["Ocurrió un error inesperado"] });
      }
    },
  });

  return (
    <div className="bg-[#E4BA36] min-h-screen flex flex-col items-center">
      <img src={logo} alt="Logo de Streakly" className="mx-auto w-36 h-36 mt-6" />
      <h1 className="text-center text-3xl font-roboto font-bold">Streakly</h1>

      {/* Usuario/correo */}
      <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[100px]">
        <input
          type="text"
          placeholder="Usuario o correo"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          className={`w-full h-full px-4 py-2 bg-white font-bold placeholder:font-normal text-gray-600 focus:outline-none rounded-xl
            ${errors.login ? "border border-red-500" : ""}`}
        />
        {errors.login && (
          <div className="text-red-500 text-xs px-2">{errors.login[0]}</div>
        )}
      </div>

      {/* Contraseña */}
      <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[20px]">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full h-full px-4 py-2 bg-white text-gray-600 focus:outline-none rounded-xl
            ${errors.password ? "border border-red-500" : ""}`}
        />
        {/* Siempre muestra el error aquí, sea de validación o credenciales */}
        {errors.password && (
          <div className="text-red-500 text-xs px-2">{errors.password[0]}</div>
        )}
      </div>

      <button
        className="w-72 h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[40px] cursor-pointer"
        onClick={() => loginMutation.mutate()}
        disabled={loginMutation.isPending}
      >
        {loginMutation.isPending ? "Cargando..." : "Iniciar sesión"}
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
