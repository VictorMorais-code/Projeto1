function AddTask(props) {
  return (
    <div className="space-y-4 p-6 bg-slate-200 rounded-md shadow flex flex-col mb-3 items-center">
      <input
        type="text"
        placeholder="Adicione o título da tarefa"
        className="border border-slate-400 outline-slate-400 py-2 rounded-md p-2 w-full"
      />
      <input
        type="text"
        placeholder="Adicione a descrição da tarefa"
        className="border border-slate-400 outline-slate-400 py-2 rounded-md p-2 w-full"
      />
      <button className="w-40 justify-center bg-slate-500 text-white p-2 rounded-md">
        Adicionar
      </button>
    </div>
  );
}

export default AddTask;
