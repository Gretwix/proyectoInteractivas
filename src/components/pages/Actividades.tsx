import Layout from '../ui/Layout';
import { useState, Suspense, lazy } from 'react';
const AgogeFisicoActividades = lazy(() => import('./AgogeFisicoActividades'));
const AgogeIntelectualActividades = lazy(() => import('./AgogeIntelectualActividades'));
const AgogeLibreActividades = lazy(() => import('./AgogeLibreActividades'));

export default function Actividades() {
  const [section, setSection] = useState<'inicio' | 'fisico' | 'intelectual' | 'libre'>('inicio');

  if (section === 'fisico') {
    return (
      <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
        <AgogeFisicoActividades onBack={() => setSection('inicio')} />
      </Suspense>
    );
  }
  if (section === 'intelectual') {
    return (
      <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
        <AgogeIntelectualActividades onBack={() => setSection('inicio')} />
      </Suspense>
    );
  }
  if (section === 'libre') {
    return (
      <Suspense fallback={<div className="text-center mt-10">Cargando...</div>}>
        <AgogeLibreActividades onBack={() => setSection('inicio')} />
      </Suspense>
    );
  }

  return (
    <Layout> 
      <div>
        <h1 className="text-3xl font-bold mb-6 font-roboto text-center mt-8">Actividades</h1>
        <div className="max-w-4xl mx-auto p-6 space-y-4">
          <div className="bg-[#E4BA36] p-4 rounded-3xl font-roboto flex items-center justify-between mb-9">
            <div className="w-full max-w-xs">
              <h2 className="text-xl font-bold mb-2 text-white">Agoge Físico</h2>
              <button
                className="bg-black text-center p-2 rounded-4xl cursor-pointer w-full"
                onClick={() => setSection('fisico')}
              >
                <span className="text-white">Empezar ya</span>
              </button>
            </div>
            <img src="/agogeFisico.png" alt="" className=" max-h-24" />
          </div>
                <div className="bg-[#5C637D] p-4 rounded-3xl font-roboto flex items-center justify-between mb-9">
                    <div className="w-full max-w-xs">
                        <h2 className="text-xl font-bold mb-2 text-white">Agoge Intelectual</h2>
                        <button className="bg-black text-center p-2 rounded-4xl cursor-pointer w-full" onClick={() => setSection('intelectual')}>
                            <span className="text-white">Empezar ya</span>
                        </button>
                    </div>
                    <img src="/agogeIntelectual.png" alt="" className=" max-h-24" />
                </div>
                <div className="bg-[#A60303] p-4 rounded-3xl font-roboto flex items-center justify-between">
                    <div className="w-full max-w-xs">
                        <h2 className="text-xl font-bold mb-2 text-white ">Agoge Libre</h2>
                        <button className="bg-black text-center p-2 rounded-4xl cursor-pointer w-full" onClick={() => setSection('libre')}>
                            <span className="text-white">Empezar ya</span>
                        </button>
                    </div>
                    <img src="/agogeLibre.png" alt="" className=" max-h-24" />
                </div>
            </div>
        </div>
        </Layout>
    );
}