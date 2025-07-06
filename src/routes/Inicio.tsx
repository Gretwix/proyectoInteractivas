import Inicio from "../components/pages/Inicio";

export const Route = createFileRoute({
  component: () => {
    // Leer rutinas para inicio desde localStorage
    let botonesData: { title: string; description: string }[] = [];
    if (typeof window !== "undefined") {
      const data = localStorage.getItem("agogeInicioRutinas");
      if (data) {
        try {
          const rutinas = JSON.parse(data);
          if (Array.isArray(rutinas)) {
            botonesData = rutinas.map((r: any, i: number) => ({
              title: r.titulo || `Rutina ${i + 1}`,
              description: r.descripcion || "Sin descripción",
            }));
          }
        } catch {}
      }
    }
    // Si no hay rutinas, muestra mensaje y botón
    return (
      <Inicio
        botones={botonesData}
        agregarRutina={() => {
          window.location.href = "/agoge-libre";
        }}
      />
    );
  },
});
