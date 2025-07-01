import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";
import logo from "../../assets/logo.png";
import { Route as LoginRoute } from "../../routes/login";

export default function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const registerMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("http://proyectofinal.test/api/v1/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          username,
          email,
          password,
          age: parseInt(age),
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData?.message || "Error al registrar");
      }

      return response.json();
    },
    onSuccess: () => {
      navigate({ to: LoginRoute.to }); // Redirigir al login después de registrarse
    },
    onError: (error: any) => {
      alert(error.message || "Ocurrió un error");
    },
  });

  return (
    <div className="bg-[#E4BA36] min-h-screen flex flex-col items-center">
      <div className="mr-70">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="font-roboto font-bold">Streakly</h1>
      </div>

      <span className="font-roboto text-4xl font-extrabold">¡Bienvenido!</span>

      <div className="w-72 h-12 bg-white rounded-xl mt-[80px]">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full h-full px-4 py-2 rounded-xl bg-white font-bold placeholder:font-normal text-gray-600 focus:outline-none"
        />
      </div>

      <div className="w-72 h-12 bg-white rounded-xl mt-[20px]">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-full px-4 py-2 rounded-xl bg-white text-gray-600 focus:outline-none"
        />
      </div>

      <div className="w-72 h-12 bg-white rounded-xl mt-[20px]">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full h-full px-4 py-2 rounded-xl bg-white text-gray-600 focus:outline-none"
        />
      </div>

      <div className="w-72 h-12 bg-white rounded-xl mt-[20px]">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full h-full px-4 py-2 rounded-xl bg-white text-gray-600 focus:outline-none"
        />
      </div>

      <div className="w-72 h-12 bg-white rounded-xl mt-[20px]">
        <input
          type="number"
          placeholder="Edad"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className="w-full h-full px-4 py-2 rounded-xl bg-white text-gray-600 focus:outline-none"
        />
      </div>

      <button
        className="w-72 h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[40px]"
        onClick={() => registerMutation.mutate()}
        disabled={registerMutation.isPending}
      >
        {registerMutation.isPending ? "Registrando..." : "Registrarse"}
      </button>

      <div className="w-72 h-12 font-roboto italic text-lg mt-[20px] text-center">
        "Un día más en tu camino a la victoria"
      </div>

      <footer className="bg-black w-full text-white font-roboto text-center py-4 mt-auto">
        © 2025 Streakly. Todos los derechos reservados.
      </footer>
    </div>
  );
}
