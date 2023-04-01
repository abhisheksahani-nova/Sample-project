import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/todos")
      .then((response) => setTodos([...response.data]))
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <div className="App">
      <h1>Todo App</h1>

      <ul className="lists-container">
        {todos.map((todo, index) => {
          return (
            <div className="list-wrapper">
              <input
                className="checkbox"
                type="checkbox"
                checked={todo.isCompleted}
              ></input>

              <li className="list" id={index}>
                {todo.name}
              </li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
