import "bulma/css/bulma.css";
import "./App.css";
import Course from "./Course";
import Angular from "./images/angular.jpg";
import Csharp from "./images/ccsharp.png";
import Bootstrap from "./images/bootstrap5.png";
import FullWeb from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        {/* <div className="hero-body" style={{ textAlign: "center" }}> */}
        <div className="hero-body">
          <p className="title">Courses</p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
     printer took a galley of type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged. "
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Frontend"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
     printer took a galley of type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
     printer took a galley of type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged."
              />
            </div>
            <div className="column">
              <Course
                image={FullWeb}
                title="Full Web"
                description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown 
     printer took a galley of type and scrambled it to make a type specimen book. It has survived not
      only five centuries, but also the leap into electronic typesetting, remaining essentially 
      unchanged."
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
