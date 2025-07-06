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
  const [errors, setErrors] = useState<any>({}); // Guarda errores por campo

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
        throw errorData;
      }

      return response.json();
    },
    onSuccess: () => {
      setErrors({});
      navigate({ to: LoginRoute.to }); // Redirigir al login después de registrarse
    },
    onError: (error: any) => {
      // Errores de validación
      if (error?.errors) {
        setErrors(error.errors);
      } else {
        setErrors({ general: error.message || "Ocurrió un error" });
      }
    },
  });

  return (
    <div className="bg-[#E4BA36] min-h-screen flex flex-col items-center">
      <div className="mr-70">
        <img src={logo} alt="Logo" className="w-12 h-12" />
        <h1 className="font-roboto font-bold">Streakly</h1>
      </div>

      <span className="font-roboto text-4xl font-extrabold">¡Bienvenido!</span>

      {errors.general && (
        <div className="w-72 mt-4 bg-red-100 border-l-4 border-red-500 text-red-700 p-2 mb-2 rounded">
          {errors.general}
        </div>
      )}

      {/* Nombre */}
      <div className="w-72 h-12 bg-white rounded-xl mt-[80px]">
        <input
          type="text"
          placeholder="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className={`w-full h-full px-4 py-2 rounded-xl bg-white font-bold placeholder:font-normal text-gray-600 focus:outline-none
            ${errors.name ? "border border-red-500" : ""}`}
        />
        {errors.name && (
          <div className="text-red-500 text-xs px-2">{errors.name[0]}</div>
        )}
      </div>

      {/* Correo */}
      <div className="w-72 h-12 bg-white rounded-xl mt-[20px]">
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full h-full px-4 py-2 rounded-xl bg-white text-gray-600 focus:outline-none
            ${errors.email ? "border border-red-500" : ""}`}
        />
        {errors.email && (
          <div className="text-red-500 text-xs px-2">{errors.email[0]}</div>
        )}
      </div>

      {/* Usuario */}
      <div className="w-72 h-12 bg-white rounded-xl mt-[20px]">
        <input
          type="text"
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className={`w-full h-full px-4 py-2 rounded-xl bg-white text-gray-600 focus:outline-none
            ${errors.username ? "border border-red-500" : ""}`}
        />
        {errors.username && (
          <div className="text-red-500 text-xs px-2">{errors.username[0]}</div>
        )}
      </div>

      {/* Contraseña */}
      <div className="w-72 h-12 bg-white rounded-xl mt-[20px]">
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`w-full h-full px-4 py-2 rounded-xl bg-white text-gray-600 focus:outline-none
            ${errors.password ? "border border-red-500" : ""}`}
        />
        {errors.password && (
          <div className="text-red-500 text-xs px-2">{errors.password[0]}</div>
        )}
      </div>

      {/* Edad */}
      <div className="w-72 h-12 bg-white rounded-xl mt-[20px]">
        <input
          type="number"
          placeholder="Edad"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          className={`w-full h-full px-4 py-2 rounded-xl bg-white text-gray-600 focus:outline-none
            ${errors.age ? "border border-red-500" : ""}`}
        />
        {errors.age && (
          <div className="text-red-500 text-xs px-2">{errors.age[0]}</div>
        )}
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
