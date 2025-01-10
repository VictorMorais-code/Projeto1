import React, { useState } from "react";

function AddTask({ addTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col items-center">
      <input
        type="text"
        placeholder="Adicione o título da tarefa"
        className="border border-slate-400 outline-slate-400 py-2 rounded-md p-2 w-full"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Adicione a descrição da tarefa"
        className="border border-slate-400 outline-slate-400 py-2 rounded-md p-2 w-full"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <button
        onClick={() =>
          title.trim() === "" || description.trim() === ""
            ? alert("Por favor, preencha todos os campos")
            : addTask(title, description) && (setTitle(""), setDescription(""))
        }
        className="w-40 justify-center bg-slate-500 text-white p-2 rounded-md"
      >
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
