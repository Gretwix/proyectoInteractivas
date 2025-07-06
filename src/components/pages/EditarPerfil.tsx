import Layout from "../ui/Layout";
import { useNavigate } from "@tanstack/react-router";
import { useState, useEffect } from "react"; // <-- Importa useEffect aquí
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export default function EditarPerfil() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const queryClient = useQueryClient();

  // Obtener los datos actuales del usuario
  const { data: user, isLoading } = useQuery({
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

  // Estados locales, se inicializan cuando user está disponible
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  // Cuando llegan los datos del usuario, actualiza los estados
  useEffect(() => {
    if (user) {
      setName(user.name || "");
      setAge(user.age ? String(user.age) : "");
    }
  }, [user]);


  // Mutación para actualizar datos
  const mutation = useMutation({
    mutationFn: async (data: { name: string; age: number }) => {
      const response = await fetch("http://proyectofinal.test/api/user/edit", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error("No se pudo actualizar el perfil");
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["user"] });
      navigate({ to: "/profile" });
    },
    onError: () => {
      alert("Error al actualizar el perfil");
    }
  });

  return (
    <Layout>
      <div className="flex flex-col items-center justify-between min-h-screen px-6 py-10">
        <div className="w-full max-w-sm flex flex-col items-center">
          <img
            src="/public/AvatarImg.png"
            alt="Avatar"
            className="w-36 h-36 rounded-full mb-6"
          />

          <h1 className="text-2xl font-bold font-roboto mb-10">Editar perfil</h1>

          {/* Nombre  */}
          <div className="w-full mb-4">
            <label className="block text-sm font-semibold mb-1 text-black">
              Nombre
            </label>
            <input
              type="text"
              value={isLoading ? "Cargando..." : name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black text-sm font-roboto"
              disabled={isLoading}
            />
          </div>
          {/* Edad  */}
          <div className="w-full mb-4">
            <label className="block text-sm font-semibold mb-1 text-black">
              Edad
            </label>
            <input
              type="number"
              value={isLoading ? "" : age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black text-sm font-roboto"
              disabled={isLoading}
              min={0}
              max={150}
            />
          </div>
          {/* Botones  */}
          <button
            className="w-full h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[40px] cursor-pointer"
            onClick={() => mutation.mutate({ name, age: Number(age) })}
            disabled={isLoading || mutation.isPending}
          >
            {mutation.isPending ? "Guardando..." : "Guardar cambios"}
          </button>

          <button
            className="w-full h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[20px] cursor-pointer"
            onClick={() => navigate({ to: "/profile" })}
            disabled={mutation.isPending}
          >
            Cancelar
          </button>
        </div>
      </div>
    </Layout>
  );
}
