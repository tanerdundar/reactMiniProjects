import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./components/Courses";
import Loading from "./components/Loading";

function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  const deleteCourse = (id) => {
    const afterDeletedCourses = courses.filter((course) => course.id != id);
    setCourses(afterDeletedCourses);
  };

  const fetchCourses = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/courses");
      setCourses(response.data);
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {" "}
          {courses.length === 0 ? (
            <div className="refresh">
              <h2>All courses deleted...</h2>
              <button
                className="cardDeleteBtn"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Refresh
              </button>
            </div>
          ) : (
            <Courses course={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
