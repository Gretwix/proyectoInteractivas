import { useNavigate } from "@tanstack/react-router";
import logo from "../../assets/logoW.png";

export default function Navigation() {
    return(
        <nav className="bg-black py-2 px-5">
  <div className="flex items-center justify-between">
    {/* Logo + Streakly */}
    <div className="flex items-center space-x-3">
      <img src={logo} alt="" className="w-10 h-10" />
      <p className="font-roboto font-bold text-white">Streakly</p>
    </div>

    {/* Menú hamburguesa */}
    <button className="text-white focus:outline-none">
      {/* Aquí puedes usar un ícono SVG o caracteres */}
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
</nav>
    )
}