import Course from "./Course";

function Courses(props) {
  //   console.log(props.course);

  return (
    <div className="courseMainDiv">
      <div>
        <h2>Courses</h2>
      </div>
      <div className="cardDiv">
        {props.course.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={props.removeCourse}
            />
          );
          // course={course}
        })}
      </div>
    </div>
  );
}

export default Courses;
