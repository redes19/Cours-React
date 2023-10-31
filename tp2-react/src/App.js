import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
// import { Link, Routes, Route } from "react-router-dom";
import Todo from "./todo/todo";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/">Home</Link>
      </header>
      <div className="todo">
        <Routes>
          <Route path="/" element={<Todo />}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
