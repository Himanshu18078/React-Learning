import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem.JSX";
import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const todoItem = [{
    name: 'Buy Milk',
    dueDate: "4 / 10 / 2023"
  },
  {
    name: 'Go to College',
    dueDate: "4 / 10 / 2023",
  },
  {
    name: 'Go to College',
    dueDate: "4 / 10 / 2023",
  }]
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo />
      <TodoItems todoItems={todoItem}></TodoItems>
    </center>
  );
}

export default App;
