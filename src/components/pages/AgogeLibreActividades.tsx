import { useState } from "react";
import Layout from "../ui/Layout";

export default function AgogeLibreActividades({
  onBack,
}: {
  onBack: () => void;
}) {
  // Estado dinámico para rutinas
  const [rutinas, setRutinas] = useState<{ titulo: string; descripcion: string }[]>([]);
  // Estado para controlar edición por rutina
  const [editando, setEditando] = useState<boolean[]>([]);
  // Estado para almacenar cambios temporales al editar
  const [tempRutinas, setTempRutinas] = useState<{ titulo: string; descripcion: string }[]>([]);

  // Agregar una rutina nueva (máximo 3)
  const handleAgregarRutina = () => {
    if (rutinas.length < 3) {
      setRutinas((prev) => [...prev, { titulo: "", descripcion: "" }]);
      setEditando((prev) => [...prev, true]);
      setTempRutinas((prev) => [...prev, { titulo: "", descripcion: "" }]);
    }
  };

  // Eliminar rutina
  const handleEliminarRutina = (idx: number) => {
    setRutinas((prev) => prev.filter((_, i) => i !== idx));
    setEditando((prev) => prev.filter((_, i) => i !== idx));
    setTempRutinas((prev) => prev.filter((_, i) => i !== idx));
  };

  // Editar rutina
  const handleEdit = (idx: number) => {
    setEditando((prev) => prev.map((e, i) => (i === idx ? true : e)));
    setTempRutinas((prev) => prev.map((r, i) => (i === idx ? { ...rutinas[i] } : r)));
  };

  // Guardar cambios de rutina
  const handleGuardar = (idx: number) => {
    setRutinas((prev) => prev.map((r, i) => (i === idx ? tempRutinas[i] : r)));
    setEditando((prev) => prev.map((e, i) => (i === idx ? false : e)));
  };

  // Cancelar edición de rutina
  const handleCancelar = (idx: number) => {
    setEditando((prev) => prev.map((e, i) => (i === idx ? false : e)));
    setTempRutinas((prev) => prev.map((r, i) => (i === idx ? { ...rutinas[i] } : r)));
  };

  // Cambiar valor de título o descripción de rutina
  const handleChange = (
    idx: number,
    field: "titulo" | "descripcion",
    value: string,
  ) => {
    setTempRutinas((prev) =>
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
          {rutinas.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <button
                className="px-5 py-2 bg-yellow-500 text-white rounded-lg font-roboto text-lg hover:bg-yellow-600 shadow"
                onClick={handleAgregarRutina}
              >
                Agregar rutina
              </button>
            </div>
          ) : (
            <>
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
                  {!editando[idx] ? (
                    <>
                      <div className="flex-1 p-4">
                        <h2 className="font-bold text-lg mb-1 font-roboto">
                          {rutina.titulo}
                        </h2>
                        <p className="text-sm text-gray-600 mb-2 font-roboto">
                          {rutina.descripcion}
                        </p>
                        <div className="flex gap-4 text-gray-500 mb-2">
                          {/* Puedes agregar aquí los íconos que desees, ejemplo: */}
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 object-contain">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322A1.012 1.012 0 012 12c0-.114.014-.225.036-.322C3.432 7.354 7.523 4.5 12 4.5c4.478 0 8.569 2.854 9.964 7.178.022.097.036.208.036.322 0 .114-.014.225-.036.322C20.568 16.646 16.477 19.5 12 19.5c-4.478 0-8.569-2.854-9.964-7.178z" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 object-contain">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 12v.008v-.008zm7.5 0v.008v-.008zm-7.5 0a7.5 7.5 0 0114.25-2.25m-14.25 2.25A7.5 7.5 0 0112 4.5m0 0a7.5 7.5 0 017.5 7.5m-7.5-7.5v15m0 0A7.5 7.5 0 014.5 12m7.5 7.5A7.5 7.5 0 0021 12" />
                          </svg>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 object-contain">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 font-roboto"
                            onClick={() => handleEdit(idx)}
                          >
                            Editar rutina
                          </button>
                          <button
                            className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 font-roboto"
                            onClick={() => handleEliminarRutina(idx)}
                          >
                            Eliminar rutina
                          </button>
                        </div>
                      </div>
                      <div className="bg-gray-200 w-32 flex flex-col items-center justify-center h-full py-6">
                        <span className="text-red-600 text-xl font-bold">
                          0%
                        </span>
                        <span className="text-black font-semibold text-sm">
                          Completado
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex-1 p-4">
                      <input
                        className="mb-2 p-2 rounded border border-gray-300 font-roboto text-lg font-bold focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                        placeholder={`Título de la rutina ${idx + 1}`}
                        value={tempRutinas[idx].titulo}
                        onChange={(e) => handleChange(idx, "titulo", e.target.value)}
                        maxLength={40}
                      />
                      <textarea
                        className="p-2 rounded border border-gray-300 font-roboto text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400 w-full"
                        placeholder="Descripción de la rutina"
                        value={tempRutinas[idx].descripcion}
                        onChange={(e) =>
                          handleChange(idx, "descripcion", e.target.value)
                        }
                        rows={3}
                        maxLength={200}
                      />
                      <div className="flex gap-2 mt-2">
                        <button
                          className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 font-roboto"
                          onClick={() => handleGuardar(idx)}
                        >
                          Guardar
                        </button>
                        <button
                          className="px-3 py-1 bg-gray-400 text-white rounded hover:bg-gray-500 font-roboto"
                          onClick={() => handleCancelar(idx)}
                        >
                          Cancelar
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))}
              {rutinas.length < 3 && (
                <div className="flex flex-col items-center justify-center py-3">
                  <button
                    className="px-5 py-2 bg-yellow-500 text-white rounded-lg font-roboto text-lg hover:bg-yellow-600 shadow"
                    onClick={handleAgregarRutina}
                  >
                    Agregar rutina
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}