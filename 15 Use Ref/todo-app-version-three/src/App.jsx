import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem.JSX";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItem, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    
   setTodoItems((currentValue) => {
  // React khud currentValue mein purani todo list pass karta hai
  // e.g. currentValue = [{name: "Homework", dueDate: "12/12"}]

  const newTodoItem = [
    ...currentValue,        // Purani list ke saare items copy karo (spread operator)
    {
      name: itemName,       // Naye item ka naam (function parameter se aaya)
      dueDate: itemDueDate, // Naye item ki due date (function parameter se aaya)
    }
  ];
  // Ab newTodoItem = [...purane items, naya item]

  return newTodoItem;
  // React ko nayi list return karo
  // React isse state mein store karega aur UI re-render karega
});
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
