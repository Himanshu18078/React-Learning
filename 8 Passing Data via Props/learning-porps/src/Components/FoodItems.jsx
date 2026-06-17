import Item from "./Item";

const FoodItems = ({items}) =>{
  return <>
   <ul className="list-group">
    {/* here think of it as passing arguments to the Item component. ✅ */}
    {items.map((item) => <Item key={item} foodItem = {item}></Item>)}
    {/* 
  PROP (short for "property") is a mechanism used to pass data
  from a parent component to a child component.
  A prop has:
    - a name (e.g., foodItem)
    - a value (e.g., item)
  Example:
    <Item foodItem={item} />
  Here, 'foodItem' is the prop name and 'item' is the value
  being passed to the Item component.
  Inside the child component, it can be accessed as:
    props.foodItem
  Props are read-only and are used to make components reusable
  by providing them with different data.
*/}
      </ul>
  </>
}
export default FoodItems;