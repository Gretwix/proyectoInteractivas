import Layout from "../ui/Layout";
import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";

export default function EditarPerfil() {
  const navigate = useNavigate();
  const [name, setName] = useState("Alejandro");
  const [age, setAge] = useState("20");


  return (
    <Layout>
      <div className="flex flex-col items-center justify-between min-h-screen px-6 py-10">
        <div className="w-full max-w-sm flex flex-col items-center">
          <img
            src="public/AvatarImg.png"
            alt="Avatar"
            className="w-36 h-36 rounded-full mb-6"
          />

          <h1 className="text-2xl font-bold font-roboto mb-10">Editar perfil</h1>

          {/* Nombre  */}
          <div className="w-full mb-4">
            <label className="block text-sm font-semibold mb-1 text-black">Nombre</label>
            <input
              type="text" value={name}  onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black text-sm font-roboto"
            />

          </div>
          {/* Edad  */}
          <div className="w-full mb-4">
            <label className="block text-sm font-semibold mb-1 text-black">Edad</label>
            <input
              type="text" value={age} onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-black text-sm font-roboto"
            />
        
          </div>
            {/* Botones  */}
          
            <button
              className="w-full h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[40px] cursor-pointer"
              onClick={() => navigate({ to: "/profile" })}
            >
              Guardar cambios
            </button>

            <button
              className="w-full h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[40px] cursor-pointer"
              onClick={() => navigate({ to: "/profile" })}
            >
              Cancelar
            </button>
          
          
        </div>
      </div>
    </Layout>
  );
}
