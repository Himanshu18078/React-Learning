import './App.css'
import FoodItems from './Components/FoodItems';
import ErrorMessage from './Components/ErrorMessage';
import Contianer from './Components/Container';
import FoodInput from './Components/FoodInput';
function App() { 
  let foodItems = ['Sabji', 'Green Vegetable', 'Roti', 'Salad', 'Milk', "Ghee"];
  let textToShow = "Food Item Entered by the user";
  const handleOnChange = (event) => {
    { console.log(event.target.value) }
    textToShow = event.target.value ;
  }
  return <>
    <Contianer>
      <h1 className='food-heading'>Healthy food</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodInput onChangeButton={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <FoodItems items={foodItems}></FoodItems>
    </Contianer>
    </>
}

export default App
