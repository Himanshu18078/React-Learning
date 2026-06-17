import './App.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
function App() {
  let foodItems = ['Sabji', 'Green Vegetable', 'Roti', 'Salad', 'Milk',"Ghee"];
  return (
    <>
      <h1 className='food-heading'>Healthy food</h1>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems>
    </>
  )
}

export default App
