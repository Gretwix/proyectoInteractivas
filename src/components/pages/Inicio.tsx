import React from 'react';
import AgogeInicio from '../ui/AgogeInicio';
import Layout from '../ui/Layout';

interface Boton {
  title: string;
  description: string;
}

interface InicioProps {
  botones: Boton[];
}

export default function Inicio({ botones }: InicioProps) {
  // Componente para mostrar el día de la semana
  // Generado con IA - A
  const DiaDeLaSemana: React.FC = () => {
    const dias = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const fechaActual = new Date();
    const diaActual = dias[fechaActual.getDay()];
    return <span className="text-3xl font-bold mb-6 font-roboto">{diaActual}</span>;
  }
  return (
    <Layout>
      <main className="bg-[#E4BA36] min-h-screen">
        <img src="/image16.png" alt="" className="w-full max-w-screen-sm h-auto mx-auto block" />
        <div className="max-w-4xl mx-auto p-6 space-y-4 ">
          <div className="flex justify-between gap-4 w-full">
            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">D</label>
              <input type="checkbox" className="w-8 h-8 cursor-pointer" />
            </div>

            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">L</label>
              <input type="checkbox" className="w-8 h-8 cursor-pointer" />
            </div>
            
            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">M</label>
              <input type="checkbox" className="w-8 h-8 cursor-pointer" />
            </div>
            
            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">X</label>
              <input type="checkbox" className="w-8 h-8 cursor-pointer" />
            </div>
            
            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">J</label>
              <input type="checkbox" className="w-8 h-8 cursor-pointer" />
            </div>
            
            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">V</label>
              <input type="checkbox" className="w-8 h-8 cursor-pointer" />
            </div>
            <div className="flex flex-col items-center">
              <label className="text-lg font-bold">S</label>
              <input type="checkbox" className="w-8 h-8 cursor-pointer" />
            </div>
          </div>
          <h1 className=""/><DiaDeLaSemana />
          {botones.map((btn, i) => (
            <AgogeInicio
              key={i}
              title={btn.title}
              description={btn.description}
              onClick={() => console.log(`Click en ${btn.title}`)}
            />
          ))}
        </div>
      </main>
    </Layout>
  );
}
