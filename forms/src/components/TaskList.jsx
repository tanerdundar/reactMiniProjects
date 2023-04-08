import TaskShow from "./TaskShow";
import { useContext } from "react";
import TasksContext from "../context/tasks";

function TaskList() {
  const { tasks } = useContext(TasksContext);

  return (
    <div className="tasks-list">
      {tasks.map((task, index) => {
        //  ==>> bir array geldiği için key olarak direkt arraydeki indexi kullanabiliriz
        return <TaskShow key={index} task={task} />;
      })}
    </div>
  );
}

export default TaskList;
