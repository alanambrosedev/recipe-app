import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React Hooks", completed: true },
    { id: 2, text: "Build a To-Do App", completed: true },
    { id: 3, text: "Master State Management", completed: true },
  ]);

  const addTodo = (newText) => {
    const newTodo = {
      id: Date.now(),
      text: newText,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  return (
    <div className="App">
      <h1>My React To-do List</h1>
      <TodoForm onAddTodo={addTodo}></TodoForm>
      <TodoList todos={todos}></TodoList>
    </div>
  );
}
