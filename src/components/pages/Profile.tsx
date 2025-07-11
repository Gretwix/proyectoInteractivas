import Layout from "../ui/Layout";
import { useNavigate } from "@tanstack/react-router";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";

import { TaskBadge } from "../ui/TaskBadge";
import { DayBadge } from "../ui/DayBadge";

export default function Profile() {
  const navigate = useNavigate();

  // Obtener token guardado al hacer login
  const token = localStorage.getItem("token");

  // Fetch para obtener el usuario autenticado
  const { data: user, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const response = await fetch("http://proyectofinal.test/api/user", {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });
      if (!response.ok) throw new Error("No se pudo cargar el usuario");
      return response.json();
    },
  });
  //appi logout
  const logoutMutation = useMutation({
    mutationFn: async () => {
      const response = await fetch("http://proyectofinal.test/api/v1/logout", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Error al cerrar sesión");
      }

      return response.json();
    },
    onSuccess: () => {
      localStorage.removeItem("token");
      navigate({ to: "/login" });
    },
    onError: (error: any) => {
      alert(error.message || "Error al cerrar sesión");
    },
  });

  // State para los badges
  const [taskBadgeCount, setTaskBadgeCount] = useState(0);
  const [dayBadgeCount, setDayBadgeCount] = useState(0);

  // Leer valores de localStorage al montar el componente
  useEffect(() => {
    const taskBadge = localStorage.getItem("taskBadge");
    const dayBadge = localStorage.getItem("dayBadge");

    setTaskBadgeCount(taskBadge ? parseInt(taskBadge, 10) : 0);
    setDayBadgeCount(dayBadge ? parseInt(dayBadge, 10) : 0);
  }, []);

  return (
    <Layout>
      <div className="flex flex-col items-center px-6 py-10 min-h-screen justify-between">
        <div className="flex flex-col items-center w-full">
          {/* Imagen de perfil */}
          <img
            src="/public/AvatarImg.png"
            alt="Spartan Avatar"
            className="w-36 h-36 rounded-full mb-6"
          />

          {/* Nombre y frase */}
          {error && (
            <p className="text-red-500 mb-2">Error al cargar usuario</p>
          )}
          <h1 className="text-3xl font-bold font-roboto mb-1">
            {isLoading ? "Cargando..." : user?.name}
          </h1>
          <p className="text-gray-800 font-roboto text-lg mb-8 text-center">
            Entrena como un espartano
          </p>

          {/* Tarjetas */}
          <div className="flex gap-4 mb-10 justify-center w-full max-w-md">
            <div className="w-24 h-20 rounded-xl overflow-hidden shadow-md border border-yellow-400 bg-white flex flex-col">
              <div className="bg-yellow-400 text-center py-1">
                <p className="font-bold text-sm text-black">Edad</p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-black font-bold text-sm">
                  {isLoading ? "..." : user?.age}
                </p>
              </div>
            </div>

            <div className="w-24 h-20 rounded-xl overflow-hidden shadow-md border border-yellow-400 bg-white flex flex-col">
              <div className="bg-yellow-400 text-center py-1">
                <p className="font-bold text-sm text-black">Racha</p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-black font-bold text-sm">5 días</p>
              </div>
            </div>

            <div className="w-24 h-20 rounded-xl overflow-hidden shadow-md border border-yellow-400 bg-white flex flex-col">
              <div className="bg-yellow-400 text-center py-1">
                <p className="font-bold text-sm text-black">Nivel</p>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <p className="text-black font-bold text-sm">Soldado</p>
              </div>
            </div>
          </div>
          {/* Insignias de logros */}
          <div className="flex flex-col items-center mb-10 w-full max-w-md bg-gray-200 p-6 rounded-lg shadow-md">
            <h2 className="text-lg font-bold mb-2 text-yellow-600">Insignias</h2>
            <div className="flex gap-5 justify-center">
              <TaskBadge count={taskBadgeCount} />
              <DayBadge count={dayBadgeCount} />
            </div>
          </div>

          {/* Botones */}
          <div className="flex flex-col gap-5 w-full max-w-sm mb-10">
            <button
              onClick={() => navigate({ to: "/editarperfil" })}
              className="flex justify-between items-center bg-black text-white px-5 py-4 rounded-full font-roboto w-full"
            >
              <span className="flex items-center gap-7.5 ">
                <div className="w-8 h-8 flex items-center justify-center ">
                  <img
                    src="/public/editar.png"
                    alt="Editar"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-lg">Editar perfil</span>
              </span>
              <span className="text-xl">{">"}</span>
            </button>

            <button
              onClick={() => navigate({ to: "/Inicio" })}
              className="flex justify-between items-center bg-black text-white px-5 py-4 rounded-full font-roboto w-full"
            >
              <span className="flex items-center gap-10">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src="/public/home.png"
                    alt="Inicio"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-lg">Inicio</span>
              </span>
              <span className="text-xl">{">"}</span>
            </button>

            <button
              onClick={() => logoutMutation.mutate()}
              className="flex justify-between items-center bg-black text-white px-5 py-4 rounded-full font-roboto w-full"
              disabled={logoutMutation.isPending}
            >
              <span className="flex items-center gap-10">
                <div className="w-6 h-6 flex items-center justify-center">
                  <img
                    src="/public/exit.png"
                    alt="Cerrar sesión"
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <span className="text-lg">
                  {logoutMutation.isPending ? "Cerrando..." : "Cerrar sesión"}
                </span>
              </span>
              <span className="text-xl">{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
