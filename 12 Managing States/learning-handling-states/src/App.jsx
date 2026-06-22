import './App.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Contianer from './Components/Container';
import FoodInput from './Components/FoodInput';
import { useState } from 'react';
function App() { 
  // let foodItems = ['Sabji', 'Green Vegetable', 'Roti', 'Salad', 'Milk', "Ghee"];
  // let textStateArr = useState("Food Item Entered by the user");
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // This is array destructring
  // let [textToShow , setTextState] = useState();

  // let [foodItems , setFoodItems ] =  useState(["Salad","Green Vegetable","Roti"])
  let [foodItems , setFoodItems ] =  useState([])


  const handleOnKeyDown = (event) => {
    if(event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = "";
      console.log(`New food Item is : ${newFoodItem}`);
      // ... is the spread operator.
      // It is used to copy all elements from an existing array into a new array.

      // We should not directly modify (mutate) the state array using methods
      // like push(). Instead, create a new array and update the state with it.

      // newFoodItem is appended (added) to the end of the new array.
      let newItems = [...foodItems , newFoodItem];
      setFoodItems(newItems);
      
    }
  }
  return <>
    <Contianer>
      <h1 className='food-heading'>Healthy food</h1>
      <FoodInput onKeyDownButton={handleOnKeyDown}></FoodInput>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Contianer>
    </>
}

export default App
  /*
  useState is a React Hook used to create and manage state.

  const [textToShow, setTextState] = useState("Food Item Entered by the user");

  React returns an array with 2 elements:

  Index 0:
  - textToShow
  - Holds the current state value.
  - Initially: "Food Item Entered by the user"

  Index 1:
  - setTextState
  - A function provided by React.
  - Used to update the state value.

  Example:
  setTextState("Apple");

  After React updates the state:
  textToShow => "Apple"

  Whenever the state changes:
  - React re-renders the component that owns this state.
  - React also re-renders its child components.
  - React does NOT re-render the entire application.

  State is used for data that can change over time,
  such as user input, counters, selected items, etc.
*/