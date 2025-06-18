import {useState} from 'react';
interface AgogeInicioProps {
  title: string;
  description: string;
  onClick?: () => void;
}

export default function AgogeInicio({ title, description, onClick }: AgogeInicioProps) {
    const [isChecked, setIsChecked] = useState(false);
    const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    if (onClick) onClick();
  };
   return (
    <div
      className="bg-black text-white px-6 py-4 rounded-lg w-full text-left cursor-pointer"
      onClick={handleCheckboxChange}
    >
      <div className="flex items-center justify-between w-full">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold m-0 font-roboto">{title}</h2>
          <p className="text-sm text-blue-100 mt-1 mb-0 font-roboto">{description}</p>
        </div>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
          className="w-10 h-10 cursor-pointer ml-4"
        />
      </div>
      {/*<label>{isChecked ? "Marcado" : "Desmarcado"}</label>*/}
    </div>
  );
}
