import Item from "./Item";
//  const handleBuyButtonClick = (event) => {
//     console.log(event);
//     console.log(`${item} being bought`)
//   }

const FoodItems = ({items}) =>{
  return <>
   <ul className="list-group">
    {items.map((item) => <Item 
    key={item} 
    foodItem = {item} 
    handleBuyButton={() => console.log(`${item} being bought`)}></Item>)}
      </ul>
  </>
}
export default FoodItems;