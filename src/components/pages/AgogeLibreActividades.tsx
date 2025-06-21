import React, { useState } from "react";
import Layout from "../ui/Layout";

export default function AgogeLibreActividades({
  onBack,
}: {
  onBack: () => void;
}) {
  const [rutinas, setRutinas] = useState([
    { titulo: "", descripcion: "" },
    { titulo: "", descripcion: "" },
    { titulo: "", descripcion: "" },
  ]);

  const handleChange = (
    idx: number,
    field: "titulo" | "descripcion",
    value: string,
  ) => {
    setRutinas((prev) =>
      prev.map((r, i) => (i === idx ? { ...r, [field]: value } : r)),
    );
  };

  return (
    <Layout>
      <div className="min-h-screen bg-white flex flex-col justify-between">
        <div className="pt-6 pb-4 px-4">
          <div className="flex items-center mb-6">
            <button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-gray-200 mr-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <h1 className="text-2xl font-bold font-roboto text-center flex-grow">
              Agoge Libre
            </h1>
            <div className="w-10"></div>
          </div>
          <h2 className="text-2xl font-bold mb-6 text-center font-roboto">
            Rutinas personalizadas
          </h2>
          {rutinas.map((rutina, idx) => (
            <div
              key={idx}
              className="flex items-center bg-white rounded-2xl shadow-md mb-6 overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center w-1/5 min-w-[64px] py-4">
                <img
                  src="/agogeLibre.png"
                  alt="icono"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex-1 p-4">
                <input
                  className="mb-2 p-2 rounded border border-gray-300 font-roboto text-lg font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                  placeholder={`Título de la rutina ${idx + 1}`}
                  value={rutina.titulo}
                  onChange={(e) => handleChange(idx, "titulo", e.target.value)}
                  maxLength={40}
                />
                <textarea
                  className="p-2 rounded border border-gray-300 font-roboto text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                  placeholder="Descripción de la rutina"
                  value={rutina.descripcion}
                  onChange={(e) =>
                    handleChange(idx, "descripcion", e.target.value)
                  }
                  rows={3}
                  maxLength={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
