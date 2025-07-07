import React, { useState } from "react";
import AgogeInicio from "../ui/AgogeInicio";
import Layout from "../ui/Layout";

interface Boton {
  title: string;
  description: string;
}

interface InicioProps {
  botones: Boton[];
  agregarRutina?: () => void;
}

async function actualizarPuntos(userId: number, puntos: number, token: string) {
  const response = await fetch(
    `http://proyectofinal.test/api/v1/rankings/${userId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: JSON.stringify({ puntos }),
    }
  );

  if (!response.ok) throw new Error("No se pudo actualizar los puntos");
  return response.json();
}

export default function Inicio({ botones, agregarRutina }: InicioProps) {
  // Estado para manejar los checkboxes, inicializado desde localStorage
  const [checkboxState, setCheckboxState] = useState(() => {
    const savedState = localStorage.getItem("checkboxState");
    return savedState
      ? JSON.parse(savedState)
      : { D: false, L: false, M: false, X: false, J: false, V: false, S: false };
  });

  // Componente para mostrar el día de la semana
  // Generado con IA - A
  const DiaDeLaSemana: React.FC = () => {
    const dias = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miércoles",
      "Jueves",
      "Viernes",
      "Sábado",
    ];
    const fechaActual = new Date();
    const diaActual = dias[fechaActual.getDay()];
    return (
      <span className="text-3xl font-bold mb-6 font-roboto">{diaActual}</span>
    );
  };

  const handleCheckboxChange = (day: keyof typeof checkboxState, puntos: number) => {
    const updatedState = {
      ...checkboxState,
      [day]: !checkboxState[day],
    };
    setCheckboxState(updatedState);
    localStorage.setItem("checkboxState", JSON.stringify(updatedState));

    if (!checkboxState[day]) {
      handleActualizar(puntos);
      incrementBadge("dayBadge");
    }
  };

  const handleButtonClick = (puntos: number) => {
    handleActualizar(puntos);
    incrementBadge("taskBadge");
  };

  const incrementBadge = (badgeType: string) => {
    const currentCount = parseInt(localStorage.getItem(badgeType) || "0", 10);
    localStorage.setItem(badgeType, (currentCount + 1).toString());
  };

  //la parte de actualizar puntos al usuario logueado la tuve que hacer con IA porque no me salía
  // Generado con IA - A
  const handleActualizar = async (puntos: number) => {
    const token = localStorage.getItem("token");
    if (!token) {
      alert("No se encontró el token de autenticación");
      return;
    }

    try {
      // Obtener el usuario autenticado
      const userResponse = await fetch("http://proyectofinal.test/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!userResponse.ok) {
        throw new Error("No se pudo obtener el usuario autenticado");
      }

      const user = await userResponse.json();
      const userId = user.id;

      const resultado = await actualizarPuntos(userId, puntos, token);
      console.log("Respuesta de la API:", resultado);
    } catch (error) {
      console.error("Error al actualizar puntos:", error);
      alert("Error al actualizar puntos");
    }
  };

  return (
    <Layout>
      <main className="bg-[#E4BA36] min-h-screen">
        <img
          src="/image16.png"
          alt=""
          className="w-full max-w-screen-sm h-auto mx-auto block"
        />
        <div className="max-w-4xl mx-auto p-6 space-y-4 ">
          <div className="flex justify-between gap-4 w-full">
            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">D</label>
              <input
                type="checkbox"
                className="w-8 h-8 cursor-pointer"
                checked={checkboxState.D}
                onChange={() => handleCheckboxChange("D", 10)}
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">L</label>
              <input
                type="checkbox"
                className="w-8 h-8 cursor-pointer"
                checked={checkboxState.L}
                onChange={() => handleCheckboxChange("L", 10)}
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">M</label>
              <input
                type="checkbox"
                className="w-8 h-8 cursor-pointer"
                checked={checkboxState.M}
                onChange={() => handleCheckboxChange("M", 20)}
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">X</label>
              <input
                type="checkbox"
                className="w-8 h-8 cursor-pointer"
                checked={checkboxState.X}
                onChange={() => handleCheckboxChange("X", 20)}
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">J</label>
              <input
                type="checkbox"
                className="w-8 h-8 cursor-pointer"
                checked={checkboxState.J}
                onChange={() => handleCheckboxChange("J", 20)}
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">V</label>
              <input
                type="checkbox"
                className="w-8 h-8 cursor-pointer"
                checked={checkboxState.V}
                onChange={() => handleCheckboxChange("V", 20)}
              />
            </div>

            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">S</label>
              <input
                type="checkbox"
                className="w-8 h-8 cursor-pointer"
                checked={checkboxState.S}
                onChange={() => handleCheckboxChange("S", 20)}
              />
            </div>
          </div>
          <h1 className="" />
          <DiaDeLaSemana />

          {botones.map((btn, i) => (
            <AgogeInicio
              key={i}
              title={btn.title}
              description={btn.description}
              onClick={() => handleButtonClick(5)} // Cambia los puntos según sea necesario
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
