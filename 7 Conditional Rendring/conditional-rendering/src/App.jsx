import './App.css'
function App() {
  // let foodItems = ['Dal', 'Green Vegetable', 'Roti', 'Salad', 'Milk',"Ghee"];
  let foodItems = [];
  /*
  React components are functions.
  When a return statement executes, the function stops immediately.
  If foodItems is empty, this return runs and the JSX below is never rendered.
  if (foodItems.length === 0) {
    return <h3>I am Still hungry</h3>;
}
  }
  */
  let emptyMessage = foodItems.length === 0 ? <h1>I am still hungry</h1> : null;
  return (
    <>
      <h1>Healthy food</h1>
      <ul className="list-group">
        {/* {emptyMessage}  here i am using the result of ternery operator*/}
        

        {/* 
          The && (logical AND) operator first evaluates the left side.
          If the left side is false, it returns that value and skips the right side.
          If the left side is true, it evaluates and returns the right side.
          React renders the returned JSX when the condition is true.
        */}
        {foodItems.length === 0 && <h3>I am still Hungry</h3>}
        {foodItems.map((item) => <li key={item} className="list-group-item">{item}</li>)}
        {/* Here it is returning explictly , which is a feature of arrow method*/}
      </ul>
    </>
  )
}

export default App
