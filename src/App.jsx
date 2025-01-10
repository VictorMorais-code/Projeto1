import { useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar React",
      day: "2021-09-01",
      isComplited: false,
    },
    {
      id: 2,
      title: "Estudar React Native",
      day: "2021-09-02",
      isComplited: false,
    },
    {
      id: 3,
      title: "Estudar Node.js",
      day: "2021-09-03",
      isComplited: false,
    },
  ]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, isComplited: !task.isComplited };
      }
      return task;
    });

    setTasks(newTasks);
  }

  function deleteTask(taskId) {
    const delTask = tasks.filter((task) => task.id !== taskId);

    setTasks(delTask);
  }

  function addTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title,
      description,
      isComplited: false,
    };

    setTasks([...tasks, newTask]);
  }

  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask addTask={addTask} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}

export default App;
