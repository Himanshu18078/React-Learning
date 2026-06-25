import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem.JSX";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import "./App.css";
import { useState } from "react";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (itemName, itemDueDate) => {
    // Pehle nayi array banao bahar
    const newTodoItem = [...todoItems, {
      name: itemName,
      dueDate: itemDueDate,
    }];

    // Phir setTodoItems mein pass karo
    setTodoItems(newTodoItem);
  };

  const deleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter(item => item.name != todoItemName);
    setTodoItems(newTodoItem);
  }
  return (
    /*
    <TodoItemsContext.Provider value={
      {
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem
      }}>
    */
    <TodoItemsContext.Provider value={
      {
        todoItems,
        addNewItem,
        deleteItem,
      }}>
      <center className="todo-container">
        <AppName/>
        <AddTodo/>
        <WelcomeMessage></WelcomeMessage>
        <TodoItems></TodoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
