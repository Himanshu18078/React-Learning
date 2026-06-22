import { useState } from "react";
import Item from "./Item";
//  const handleBuyButtonClick = (event) => {
//     console.log(event);
//     console.log(`${item} being bought`)
//   }

const FoodItems = ({items}) =>{
  let [activeItems , setActiveItems] = useState([]);
  let onBuyButton = (item , event) => {
    let newItems = [...activeItems , item];
    setActiveItems(newItems);
  }
  return <>
   <ul className="list-group">
    {items.map((item) => <Item 
    key={item} 
    foodItem = {item} 
    bought={activeItems.includes(item)}
    handleBuyButton={(event) => onBuyButton(item , event)}></Item>)}
      </ul>
  </>
}
export default FoodItems;
/*
  When the Buy button is clicked:

  1. React triggers handleBuyButton.

  2. handleBuyButton is an anonymous function that receives the
     click event from React and calls onBuyButton(item, event).

  3. item comes from the current item being rendered in map().

  4. onBuyButton creates a new array:
     - copies all existing items from activeItems
     - adds the clicked item to the end

  5. setActiveItems(newItems) updates the state with the new array.

  6. React re-renders the FoodItems component.

  7. During re-render:
     bought={activeItems.includes(item)}
     checks whether the current item exists in activeItems.

  8. If the item exists, bought becomes true.

  9. Inside Item component:
     ${bought && 'active'}
     adds the "active" CSS class to the list item.

  10. The clicked item is now displayed with the active styling.
*/