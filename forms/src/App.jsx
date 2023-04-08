import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useContext } from "react";
import TasksContext from "./context/tasks";

function App() {
  const { fetchTasks } = useContext(TasksContext);
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="App">
      {<TaskCreate /*onCreate={createTask}*/ />}
      <h1>Tasks</h1>
      <TaskList
      // tasks={tasks}
      // onDelete={deleteTaskById}
      // onUpdate={updateTaskById}
      />
    </div>
  );
}

export default App;

/**json-server --watch api/db.json*/
