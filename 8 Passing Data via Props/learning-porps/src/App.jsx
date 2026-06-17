import './App.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
function App() {
  let foodItems = ['Sabji', 'Green Vegetable', 'Roti', 'Salad', 'Milk',"Ghee"];
  // let foodItems = [];
  return (
    <>
      <h1>Healthy food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems>
      {/* Props are immutable */}
      {/* Here item is the key and foodItem is the value(which is an array)  */}
    </>
  )
}

export default App
