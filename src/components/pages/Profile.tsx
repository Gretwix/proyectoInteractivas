import Layout from "../ui/Layout";
import { useNavigate } from "@tanstack/react-router";

export default function Profile() {
      const navigate = useNavigate();
      
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
          <h1 className="text-3xl font-bold font-roboto mb-1">Alejandro</h1>
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
      <p className="text-black font-bold text-sm">20</p>
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



          {/* Botones */}
          <div className="flex flex-col gap-5 w-full max-w-sm mb-10">
  <button className="flex justify-between items-center bg-black text-white px-5 py-4 rounded-full font-roboto w-full">
    <span className="flex items-center gap-7.5 ">
      <div className="w-8 h-8 flex items-center justify-center ">
        <img src="/public/editar.png" alt="Editar" className="max-w-full max-h-full object-contain"
        />
    </div>
    <span className="text-lg">Editar perfil</span>
    </span>
    <span className="text-xl">{">"}</span>
  </button>

  <button onClick={() => navigate({ to: "/Inicio" })} className="flex justify-between items-center bg-black text-white px-5 py-4 rounded-full font-roboto w-full">
    <span className="flex items-center gap-10">
      <div className="w-6 h-6 flex items-center justify-center">
        <img src="/public/home.png" alt="Inicio" className="max-w-full max-h-full object-contain"
        />
      </div>
      <span className="text-lg">Inicio</span>
    </span>
    <span className="text-xl">{">"}</span>
  </button>

  <button className="flex justify-between items-center bg-black text-white px-5 py-4 rounded-full font-roboto w-full">
    <span className="flex items-center gap-10">
      <div className="w-6 h-6 flex items-center justify-center">
        <img src="/public/exit.png" alt="Cerrar sesión" className="max-w-full max-h-full object-contain"
        />
      </div>
      <span className="text-lg">Cerrar sesión</span>
    </span>
    <span className="text-xl">{">"}</span>
  </button>
</div>
        </div>

        
      </div>
    </Layout>
  );
}



