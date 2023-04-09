function Course(props) {
  //   console.log(props.course.id);
  //   console.log(props.course.content);

  //   console.log(props.id);
  //   console.log(props.content);

  return (
    <div className="card">
      <div className="cardTitlePrice">
        <h2 className="cardTitle">{props.title}</h2>
        <h4 className="cardPrice">{props.price + " "}TL</h4>
      </div>
      <p>{props.content}</p>
      <button
        className="cardDeleteBtn"
        onClick={() => {
          props.removeOneCourse(props.id);
        }}
      >
        Delete
      </button>
    </div>
  );
}

export default Course;
