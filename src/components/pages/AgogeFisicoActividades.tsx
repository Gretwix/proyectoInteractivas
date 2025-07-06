import Layout from "../ui/Layout";

const actividades = [
  {
    titulo: "Entrenamiento de fuerza",
    descripcion:
      "Aprender ejercicios de fuerza y resistencia para mejorar tus habilidades físicas.",
    completado: 0,
    icon: "/agogeFisico.png",
  },
  {
    titulo: "Cardio",
    descripcion:
      "Realizar ejercicios de cardio para mejorar tu condición física y aumentar tu resistencia cardiovascular.",
    completado: 0,
    icon: "/agogeFisico.png",
  },
  {
    titulo: "Flexibilidad",
    descripcion:
      "Practicar ejercicios de flexibilidad para mejorar tu coordinación y flexibilidad muscular.",
    completado: 0,
    icon: "/agogeFisico.png",
  },
];

const icons = [
  <svg
    key="eye"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.036 12.322A1.012 1.012 0 012 12c0-.114.014-.225.036-.322C3.432 7.354 7.523 4.5 12 4.5c4.478 0 8.569 2.854 9.964 7.178.022.097.036.208.036.322 0 .114-.014.225-.036.322C20.568 16.646 16.477 19.5 12 19.5c-4.478 0-8.569-2.854-9.964-7.178z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
  </svg>,
  <svg
    key="share"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.25 12v.008v-.008zm7.5 0v.008v-.008zm-7.5 0a7.5 7.5 0 0114.25-2.25m-14.25 2.25A7.5 7.5 0 0112 4.5m0 0a7.5 7.5 0 017.5 7.5m-7.5-7.5v15m0 0A7.5 7.5 0 014.5 12m7.5 7.5A7.5 7.5 0 0021 12"
    />
  </svg>,
  <svg
    key="trash"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>,
  <svg
    key="chat"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-5 h-5"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 8.25h9m-9 3.75h6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>,
];

export default function AgogeFisicoActividades({
  onBack,
}: {
  onBack: () => void;
}) {
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
              Agoge Físico
            </h1>
            <div className="w-10"></div>
          </div>
          {actividades.map((act) => (
            <div
              key={act.titulo}
              className="flex items-center bg-white rounded-2xl shadow-md mb-6 overflow-hidden"
            >
              <div className="flex flex-col items-center justify-center w-1/5 min-w-[64px] py-4">
                <img
                  src={act.icon}
                  alt="icono"
                  className="w-14 h-14 object-contain"
                />
              </div>
              <div className="flex-1 p-4">
                <h2 className="font-bold text-lg mb-1 font-roboto">
                  {act.titulo}
                </h2>
                <p className="text-sm text-gray-600 mb-2 font-roboto">
                  {act.descripcion}
                </p>
                <div className="flex gap-4 text-gray-500">
                  {icons.map((icon, i) => (
                    <span key={i}>{icon}</span>
                  ))}
                </div>
                <button
                  className="mt-2 px-3 py-1 bg-yellow-600 text-white rounded hover:bg-yellow-700 font-roboto"
                  onClick={() => {
                    const stored = localStorage.getItem("agogeInicioRutinas");
                    let rutinas = stored ? JSON.parse(stored) : [];
                    // Evita duplicados por título
                    if (!rutinas.some((r: any) => r.titulo === act.titulo)) {
                      rutinas.push({ titulo: act.titulo, descripcion: act.descripcion });
                      localStorage.setItem("agogeInicioRutinas", JSON.stringify(rutinas));
                    }
                  }}
                >
                  Agregar a inicio
                </button>
              </div>
              <div className="bg-gray-200 w-32 flex flex-col items-center justify-center h-full py-6">
                <span className="text-red-600 text-xl font-bold">
                  {act.completado}%
                </span>
                <span className="text-black font-semibold text-sm">
                  Completado
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
