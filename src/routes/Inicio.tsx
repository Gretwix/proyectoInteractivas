import Inicio from "../components/pages/Inicio";

export const Route = createFileRoute({
  component: () => {
    const botonesData = [
      {
        title: "Agoge 1",
        description: "Primer botón",
      },
      {
        title: "Agoge 2",
        description: "Segundo botón",
      },
      {
        title: "Agoge 3",
        description: "Tercer botón",
      },
    ];

    return <Inicio botones={botonesData} />;
  },
});
