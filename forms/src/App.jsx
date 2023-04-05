import { useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState([]);

  const createTask = (title, taskDescription) => {
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 9999999),
        title,
        taskDescription,
      },
    ];

    setTasks(createdTasks);
  };

  const deleteTaskById = (id) => {
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });

    setTasks(afterDeletingTasks);
  };

  const updateTaskById = (id, updatedTitle, updatedDescription) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDescription: updatedDescription };
      }
      return task;
    });

    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Tasks</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={updateTaskById}
      />
    </div>
  );
}

export default App;
