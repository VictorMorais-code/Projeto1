import { ChevronLeft } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 p-6 space-y-4">
      <div>
        <h1 className="text-slate-100 text-3xl font-bold text-center">
          Detalhes da Tarefa
        </h1>
      </div>

      <button
        className="bg-slate-600 text-white p-2 rounded-md"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft />
      </button>

      <div className="bg-slate-400 p-4 rounded-md shadow ">
        <h1 className="text-xl text-white font-bold">{title}</h1>
        <p className="text-white">{description}</p>
      </div>
    </div>
  );
}

export default TaskPage;
