import { useState } from "react";
import TaskCreate from "./TaskCreate";
import { useContext } from "react";
import TasksContext from "../context/tasks";

function TaskShow(props) {
  const { deleteTaskById, updateTaskById } = useContext(TasksContext);
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    deleteTaskById(props.task.id);
  };

  const handleUpdate = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedDescription) => {
    setShowEdit(false);
    //  setShowEdit(!showEdit);
    updateTaskById(id, updatedTitle, updatedDescription);
  };

  return (
    <div className="task-show">
      {showEdit ? (
        <>
          <TaskCreate
            task={props.task}
            taskFormUpdate={true}
            onUpdate={handleSubmit}
          />
        </>
      ) : (
        <div>
          <h3 className="task-title">Your Task</h3>
          <p>{props.task.title}</p>
          <h3 className="task-title">Task Description</h3>
          <p>{props.task.taskDescription}</p>
          <div>
            <button className="tasks-delete" onClick={handleDelete}>
              Delete
            </button>
            <button className="tasks-update" onClick={handleUpdate}>
              Update
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskShow;
