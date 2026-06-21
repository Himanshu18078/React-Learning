import './App.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Contianer from './Components/Container';
function App() {
  let foodItems = ['Sabji', 'Green Vegetable', 'Roti', 'Salad', 'Milk', "Ghee"];
  return <>
    <Contianer>
      <h1 className='food-heading'>Healthy food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </Contianer>
    <Contianer>
      <p>Above is the list of healthy food.</p>
    </Contianer>
    </>
}

export default App
