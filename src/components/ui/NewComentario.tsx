

interface CommentCardProps {
  comment: string;
  date: string;
}

export default function NewComentario({ comment, date }: CommentCardProps) {
  return (
    <div className="bg-[#ededed] rounded-xl p-4 flex gap-3 items-start shadow-sm relative">
      <span className="text-2xl mt-1">💬</span>
      <div className="flex-1">
        <span className="text-xs text-gray-700 absolute top-4 right-4">{date}</span>
        <p className="mt-2 text-black text-sm">{comment}</p>
      </div>
    </div>
  );
}