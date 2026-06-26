import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import WelcomeMessage from "./components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";
import "./App.css";
import { useReducer } from "react";

/*
  REDUCER FUNCTION — Saari state update ki logic yahan hai
  
  2 arguments leta hai:
  1. currentTodoItems — React khud pass karta hai (abhi state mein kya hai)
  2. action — dispatch karne pe jo object bheja tha wo aata hai
              action ke 2 parts hote hain:
              - type    : kya karna hai (NEW_ITEM, DELETE_ITEM)
              - payload : karne ke liye kya data chahiye
*/
const todoItemsReducer = (currentTodoItems, action) => {

  // Shuru mein purani state copy kar lo
  let newTodoItems = currentTodoItems;

  if (action.type === "NEW_ITEM") {
    // Purani list mein naya item add karo
    // action.payload.itemName    → naye item ka naam
    // action.payload.itemDueDate → naye item ki due date
    newTodoItems = [
      ...currentTodoItems,  // Purane saare items copy karo
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate
      }
    ];

  } else if (action.type === "DELETE_ITEM") {
    // Jis item ka naam match kare usse list se hata do
    // action.payload.itemName → konsa item delete karna hai
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  // Updated state return karo — React isse store karega aur UI re-render karega
  return newTodoItems;
}

function App() {

  /*
    useReducer hook 2 arguments leta hai:
    1. todoItemsReducer — function jisme saari logic hai
    2. []              — initial value (shuru mein empty array)

    useReducer 2 cheezein return karta hai:
    1. todoItems        — current state (abhi list mein kya hai)
    2. dispatchTodoItems — function jo action lekar reducer ko bhejta hai
  */
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);


  // Naya todo item add karne ka function
  const addNewItem = (itemName, itemDueDate) => {

    // Action object banao — reducer ko batao kya karna hai
    const newItemAction = {
      type: "NEW_ITEM",       // Reducer mein NEW_ITEM case chalega
      payload: {
        itemName,             // Form se aaya naam
        itemDueDate           // Form se aayi date
      }
    };

    // Dispatch karo — React reducer ko call karega current state ke saath
    dispatchTodoItems(newItemAction);
  };


  // Todo item delete karne ka function
  const deleteItem = (todoItemName) => {

    // Action object banao — reducer ko batao kya karna hai
    const deleteItemAction = {
      type: "DELETE_ITEM",    // Reducer mein DELETE_ITEM case chalega
      payload: {
        itemName: todoItemName  // Konsa item delete karna hai
      }
    };

    // Dispatch karo — React reducer ko call karega current state ke saath
    dispatchTodoItems(deleteItemAction);
  }

  return (
    /*
      Context Provider ke through teen cheezein saare components ko de rahe hain:
      1. todoItems  — current todo list (TodoItems component use karega)
      2. addNewItem — naya item add karne ka function (AddTodo component use karega)
      3. deleteItem — item delete karne ka function (TodoItem component use karega)
      
      Ab kisi bhi component ko props ki zaroorat nahi — seedha context se lenge!
    */
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <WelcomeMessage />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;

/*
  ============================================================
  useReducer vs useState — Kyun Better Hai Is App Mein?
  ============================================================

  useState ke saath problems thi:
  - addNewItem ki logic App.jsx mein thi
  - deleteItem ki logic App.jsx mein thi
  - Jaise jaise features badhte, App.jsx bada hota jaata
  - Saari logic bikhari hui thi — dhundhna mushkil

  useReducer ke fayde:
  - Saari state update logic ek jagah hai — todoItemsReducer mein
  - App.jsx clean hai — sirf dispatch hai, logic nahi
  - Reducer alag file mein bhi le ja sakte hain
  - Action ka naam dekh ke pata chal jaata hai kya ho raha hai
    jaise: dispatch({type: "DELETE_ITEM"}) — seedha samajh aata hai
    lekin: setTodoItems(...) — samajhna padta hai kya ho raha hai

  Simple rule:
  - useState  → Simple state, 1-2 operations  (jaise: isOpen, count)
  - useReducer → Complex state, kai operations (jaise: Todo list, Cart)
  ============================================================
*/