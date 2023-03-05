import Angular from "./images/angular.jpg";
import Ccsharp from "./images/ccsharp.png";
import Bootstrap from "./images/bootstrap5.png";
import FullWeb from "./images/kompleweb.jpg";
import "./Course.css";

const courseMap = {
  Angular, // Angular, =>  Angular:Angular,
  Bootstrap,
  Ccsharp,
  FullWeb,
};

function Course({ courseName }) {
  // console.log(Angular);
  // console.log(courseName);

  return (
    <div className="courseDiv">
      <img className="course" src={courseMap[courseName]} alt="course" />
    </div>
  );
}

export default Course;
