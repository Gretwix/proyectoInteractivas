// import { Link } from "@tanstack/react-router";
import logo from '../../assets/logo.png';

export default function LogIn() {
  return (
   <div className='bg-[#E4BA36] min-h-screen flex flex-col items-center'>

  <img src={logo} alt="" className='mx-auto w-36 h-36' />
  
  <h1 className='text-center text-3xl font-roboto font-bold'>Streakly</h1>

  <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[100px]">
    <input 
      type="text" 
      placeholder="Usuario" 
      className="w-full h-full px-4 py-2 bg-white font-bold placeholder:font-normal text-gray-600 focus:outline-none rounded-xl"
    /> 
  </div>

  <div className="w-72 h-12 mx-auto bg-white rounded-xl mt-[20px]">
    <input 
      type="password" 
      placeholder="Contraseña" 
      className="w-full h-full px-4 py-2 bg-white text-gray-600 focus:outline-none rounded-xl"
    /> 
  </div>

  <button className='w-72 h-12 bg-black text-white rounded-2xl font-roboto font-extrabold text-lg mt-[40px] cursor-pointer'>
    Iniciar sesión    
  </button>

  <button className='w-72 h-12 rounded-xl font-roboto font-extrabold text-lg mt-[10px] cursor-pointer'>
    Registrarse   
  </button>

  <footer className='bg-black w-full text-white font-roboto text-center py-4 mt-auto'>
    © 2025 Streakly. Todos los derechos reservados.
  </footer>

</div>

  );
}
/* <div className="w-96 h-[667px] relative bg-amber-400 overflow-hidden">
      <div className="w-96 h-[667px] left-0 top-0 absolute" />
      <img
        className="w-36 h-36 left-[116px] top-[16px] absolute"
        src={logo}
      />
      <div className="w-72 h-12 left-[40px] top-[322px] absolute bg-white rounded-xl" />
      <div className="w-72 h-12 left-[40px] top-[392px] absolute bg-white rounded-xl" />
      <div className="w-28 h-9 left-[128px] top-[158px] absolute justify-start text-black text-3xl font-bold font-['Roboto']">
        Streakly
      </div>
      <div className="w-20 h-5 left-[144px] top-[546px] absolute justify-start text-black text-base font-bold font-['Roboto']">
        Registrarse
      </div>
      <div className="w-14 h-5 left-[56px] top-[340px] absolute justify-start text-black/50 text-base font-normal font-['Roboto']">
        Usuario
      </div>
      <div className="w-20 h-5 left-[56px] top-[408px] absolute justify-start text-black/50 text-base font-normal font-['Roboto']">
        Contraseña
      </div>
      <div className="w-72 h-11 left-[40px] top-[482px] absolute bg-black rounded-2xl" />
      <div className="w-24 h-5 left-[131px] top-[494px] absolute justify-start text-white text-base font-extrabold font-['Roboto']">
        Iniciar sesión
      </div>
      <div className="w-96 h-16 left-0 top-[600px] absolute bg-black" />
      <div className="left-[57px] top-[627px] absolute justify-start text-white text-xs font-bold font-['Roboto']">
        © 2025 Streakly. Todos los derechos reservados.
      </div>
    </div>*/