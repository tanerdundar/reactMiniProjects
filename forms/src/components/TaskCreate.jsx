import { useState } from "react";

function TaskCreate(props) {
  const [title, setTitle] = useState(props.task ? props.task.title : "");
  const [taskDescription, setTaskDescription] = useState(
    props.task ? props.task.taskDescription : ""
  );

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDescription(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.taskFormUpdate) {
      //props.onUpdate(props.task.id, props.title, props.taskDescription);
      props.onUpdate(props.task.id, title, taskDescription);
    } else {
      props.onCreate(title, taskDescription);
    }
    setTitle("");
    setTaskDescription("");
  };
  return (
    <div>
      {props.taskFormUpdate ? (
        <div className="task-update">
          <h3>Please Update Task!</h3>
          <form className="task-form">
            <label className="task-label">Update Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Update Task...</label>
            <textarea
              value={taskDescription}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button
              className="task-button update-button"
              onClick={handleSubmit}
            >
              Update
            </button>
          </form>
        </div>
      ) : (
        <div className="task-create">
          <h3>Please Add New Task!</h3>
          <form className="task-form">
            <label className="task-label">Title</label>
            <input
              value={title}
              onChange={handleChange}
              className="task-input"
            />
            <label className="task-label">Type Task...</label>
            <textarea
              value={taskDescription}
              onChange={handleTaskChange}
              className="task-input"
              rows={5}
            />
            <button className="task-button" onClick={handleSubmit}>
              Add
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
