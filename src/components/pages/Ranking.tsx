
import { useQuery } from "@tanstack/react-query";
// Ejemplo de datos (puedes cambiar por props)
{/*const ranking = [
  { position: 1, name: "Jeikol", points: 127, avatar: "" },
  { position: 2, name: "Ana", points: 119, avatar: "" },
  { position: 3, name: "Luis", points: 100, avatar: "" },
  { position: 4, name: "María", points: 94, avatar: "" },
  { position: 5, name: "Carlos", points: 85, avatar: "" },
  { position: 6, name: "Lucía", points: 79, avatar: "" },
  { position: 7, name: "Pedro", points: 75, avatar: "" },
  { position: 8, name: "Sofía", points: 60, avatar: "" },
  { position: 9, name: "Diego", points: 50, avatar: "" },
  { position: 10, name: "Emma", points: 30, avatar: "" },
];*/}

export default function Ranking() {
  const token = localStorage.getItem("token");
  const { data: rankings, isLoading, error } = useQuery({
    queryKey: ["rankings"],
    queryFn: async () => {
      const response = await fetch("http://proyectofinal.test/api/v1/rankings", {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error("No se pudo cargar el ranking");
      return response.json();
    },
  });

  type RankingUser = {
    position: number;
    name: string;
    username: string;
    points: number;
  };
  let rankingList: RankingUser[] = [];
  if (rankings) {
    rankingList = [...rankings]
      .sort((a: any, b: any) => b.puntos - a.puntos)
      .map((item: any, idx: number) => ({
        position: idx + 1,
        name: item.user.name,
        username: item.user.username,
        points: item.puntos,
      }));
  }

  return (
    <div className="min-h-screen bg-[#deb038] flex flex-col items-center py-8">
      <div className="w-full max-w-4xl flex flex-col items-center">
        <h1 className="text-4xl font-bold text-black mb-8 mt-4">Ranking</h1>

        <div className="bg-black/90 rounded-2xl shadow-lg p-6 w-full max-w-2xl">
          {isLoading && <p className="text-white">Cargando ranking...</p>}
          {error && <p className="text-red-500">Error al cargar ranking</p>}
          {!isLoading && !error && (
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left text-lg text-[#deb038]">#</th>
                  <th className="text-left text-lg text-[#deb038]">Usuario</th>
                  <th className="text-left text-lg text-[#deb038]">Puntos</th>
                </tr>
              </thead>
              <tbody>
                {rankingList.map((user) => (
                  <tr key={user.position} className="border-b border-[#deb038]/20 last:border-b-0 group hover:bg-[#deb038]/20 transition">
                    <td className="py-4 px-2 font-bold text-white w-12">
                      <span className={`text-2xl ${user.position === 1 ? "text-yellow-400" : user.position === 2 ? "text-gray-300" : user.position === 3 ? "text-orange-400" : ""}`}>
                        {user.position}
                      </span>
                    </td>
                    <td className="py-4 px-2 flex items-center gap-4 font-medium text-white">
                      {/* Avatar */}
                      <div className="w-10 h-10 rounded-full bg-[#deb038]/70 flex items-center justify-center text-black font-bold text-lg shadow-md">
                        {user.username[0]}
                      </div>
                      {user.username} {/*<span className="text-xs text-gray-300 ml-2">@{user.username}</span>*/}
                    </td>
                    <td className="py-4 px-2 text-white font-semibold text-lg">{user.points}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
