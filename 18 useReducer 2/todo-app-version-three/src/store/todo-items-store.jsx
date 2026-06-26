import { createContext } from "react";
import { useReducer } from "react";

// Context banao — default values sirf tab use hongi jab
// koi component Provider ke bahar ho (humara case nahi)
export const TodoItemsContext = createContext({
  todoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});

// Reducer function — saari state update logic yahan hai
// currentTodoItems → React khud pass karta hai (current state)
// action → dispatch karne pe jo object bheja tha
const todoItemsReducer = (currentTodoItems, action) => {

  // Shuru mein purani state copy kar lo
  // Agar koi case match na ho toh yahi wapas jayegi
  let newTodoItems = currentTodoItems;

  if (action.type === "NEW_ITEM") {
    // Purani list copy karo aur naya item add karo
    newTodoItems = [
      ...currentTodoItems,
      {
        name: action.payload.itemName,
        dueDate: action.payload.itemDueDate
      }
    ];

  } else if (action.type === "DELETE_ITEM") {
    // Jis item ka naam match kare usse list se hata do
    newTodoItems = currentTodoItems.filter(
      (item) => item.name !== action.payload.itemName
    );
  }

  // Updated state return karo
  // React isse store karega aur UI re-render karega
  return newTodoItems;
};

// TodoItemsContextProvider — ek component hai jo:
// 1. State sambhalta hai (useReducer se)
// 2. Logic rakhta hai (addNewItem, deleteItem)
// 3. Saare children ko context deta hai
const TodoItemsContextProvider = ({ children }) => {
  // children → App.jsx ke saare components
  // (AppName, AddTodo, WelcomeMessage, TodoItems)

  // useReducer hook — todoItemsReducer ko use karta hai
  // todoItems        → current state (abhi list mein kya hai)
  // dispatchTodoItems → action bhejne ka function
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  // Naya todo item add karne ka function
  // AddTodo component context se yeh function lega
  const addNewItem = (itemName, itemDueDate) => {
    const newItemAction = {
      type: "NEW_ITEM",       // Reducer mein NEW_ITEM case chalega
      payload: {
        itemName,             // Form se aaya naam
        itemDueDate           // Form se aayi date
      }
    };
    // React dispatch karega → reducer chalega → state update hogi
    dispatchTodoItems(newItemAction);
  };

  // Todo item delete karne ka function
  // TodoItem component context se yeh function lega
  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",    // Reducer mein DELETE_ITEM case chalega
      payload: {
        itemName: todoItemName  // Konsa item delete karna hai
      }
    };
    // React dispatch karega → reducer chalega → state update hogi
    dispatchTodoItems(deleteItemAction);
  }

  // Provider ke through saare children ko teen cheezein de rahe hain:
  // 1. todoItems  → current todo list
  // 2. addNewItem → naya item add karne ka function
  // 3. deleteItem → item delete karne ka function
  // Koi bhi child useContext(TodoItemsContext) se seedha le sakta hai
  return (
    <TodoItemsContext.Provider value={{
      todoItems,
      addNewItem,
      deleteItem,
    }}>
      {children}
    </TodoItemsContext.Provider>
  );
}

export default TodoItemsContextProvider;