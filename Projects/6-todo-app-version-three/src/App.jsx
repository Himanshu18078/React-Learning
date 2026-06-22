import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem.JSX";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  // const initialTodoItem = [{
  //   name: 'Buy Milk',
  //   dueDate: "4 / 10 / 2023"
  // },
  // {
  //   name: 'Go to College',
  //   dueDate: "4 / 10 / 2023",
  // },
  // {
  //   name: 'Go to College',
  //   dueDate: "4 / 10 / 2023",
  // }]
  // const [todoItem, setTodoItems] = useState(initialTodoItem);
  const initialTodoItem = []
  const [todoItem, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    const newTodoItem = [...todoItem,
    {
      name: itemName,
      dueDate: itemDueDate,
    }]
    setTodoItems(newTodoItem);
  };
  const handleDeleteButton = (todoItemName) => {
    const newTodoItem = todoItem.filter(item => item.name != todoItemName);
    setTodoItems(newTodoItem);
    console.log(`Item Deleted : ${todoItemName}`)
  }
  return (
    <center className="todo-container">
      <AppName />
      <AddTodo handleNewItem={handleNewItem} />
      {todoItem.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoItems={todoItem} onDeleteClick={handleDeleteButton}></TodoItems>
    </center>
  );
}

export default App;
