import React, { useState } from "react";
import CommentCard from "../ui/NewComentario";

function getTodayFormatted() {
  const fecha = new Date();
  const dia = fecha.getDate();
  const mes = fecha.toLocaleString("es-ES", { month: "long" });
  const anio = fecha.getFullYear();
  return `${dia} ${mes} ${anio}`;
}
export default function ComentariosPage() {
  const [comments, setComments] = useState<{ comment: string; date: string }[]>(
    () => {
      const storedComments = localStorage.getItem("comments");
      return storedComments ? JSON.parse(storedComments) : [];
    }
  );
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;
    const newComments = [
      ...comments,
      { comment: input.trim(), date: getTodayFormatted() },
    ];
    setComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
    setInput("");
  };

  return (
    <div className="w-full max-w-sm mx-auto pt-10 pb-6 px-2">
      <h2 className="text-2xl font-bold text-center mb-6">Comentarios</h2>

      <div className="flex flex-col gap-6">
        {comments.map((c, i) => (
          <CommentCard key={i} comment={c.comment} date={c.date} />
        ))}
      </div>

      <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-4">
        <input
          type="text"
          className="w-full rounded-xl border border-gray-300 px-4 py-2 text-black placeholder-gray-400 outline-none focus:ring-2 focus:ring-black transition"
          placeholder="Escribe un comentario..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-black text-white rounded-xl py-3 font-medium hover:bg-gray-900 transition"
        >
          Publicar comentario
        </button>
      </form>
    </div>
  );
}
