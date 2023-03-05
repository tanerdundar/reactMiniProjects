import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  const handleClick = () => {
    setValue(value + 1);
  };
  return (
    <div className="App">
      <button onClick={handleClick}>Add Course</button>
      <div>Course Number:{value}</div>
    </div>
  );
}

export default App;
