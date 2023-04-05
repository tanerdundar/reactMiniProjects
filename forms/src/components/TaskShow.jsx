import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow(props) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = () => {
    props.onDelete(props.task.id);
  };

  const handleUpdate = () => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id, updatedTitle, updatedDescription) => {
    setShowEdit(false);
    //  setShowEdit(!showEdit);
    props.onUpdate(id, updatedTitle, updatedDescription);
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
