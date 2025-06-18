import { useNavigate } from "@tanstack/react-router";
import React, { useState } from "react";
//por alguna razón no puedo quitar el import react, pero si lo dejo me da error, entonces para eso esta el void React - A
void React;
import logo from "../../assets/logoW.png";

export default function Navigation() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="bg-black py-2 px-5 relative">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logo} alt="" className="w-10 h-10" />
          <p className="font-roboto font-bold text-white">Streakly</p>
        </div>
        {/*Menu hamburguesa generado con IA - A*/}
        <button
          className="text-white focus:outline-none cursor-pointer z-20"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Panel descendente generado con IA - A*/}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black bg-opacity-95 flex flex-col items-center justify-center gap-6 transition-transform duration-300 z-10 ${menuOpen ? 'translate-y-0' : '-translate-y-full'}`}
        style={{ pointerEvents: menuOpen ? 'auto' : 'none' }}
      >
        <img src="src/assets/logoW.png" alt="" className="w-15 h-15 mb-4" onClick={() => { setMenuOpen(false); navigate({ to: "/Inicio" }); }} />
        <button className="text-white hover:text-gray-400 text-2xl py-2 px-8 rounded transition cursor-pointer mb-10" onClick={() => { setMenuOpen(false); navigate({ to: "/actividades" }); }}>Categoria</button>
        <button className="text-white hover:text-gray-400 text-2xl py-2 px-8 rounded transition cursor-pointer mb-10" onClick={() => setMenuOpen(false)}>Progreso</button>
        <button className="text-white hover:text-gray-400 text-2xl py-2 px-8 rounded transition cursor-pointer" onClick={() => setMenuOpen(false)}>Perfil</button>
      </div>
    </nav>
  );
}