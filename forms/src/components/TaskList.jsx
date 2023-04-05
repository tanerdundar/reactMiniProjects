import TaskShow from "./TaskShow";

function TaskList(props) {
  return (
    <div className="tasks-list">
      {props.tasks.map((task, index) => {
        //  ==>> bir array geldiği için key olarak direkt arraydeki indexi kullanabiliriz
        return (
          <TaskShow
            key={index}
            task={task}
            onDelete={props.onDelete}
            onUpdate={props.onUpdate}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
