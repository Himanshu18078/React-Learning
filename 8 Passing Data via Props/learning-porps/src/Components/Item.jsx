/*  
A React component is just a function, and props is the parameter that receives an object containing all the values passed to the component. ✅
*/

/*
const Item = (props) => {
  let {foodItem} = props; // array destructuring
  return <>
  <li  className="list-group-item">{foodItem}</li>
  </>
}
export default Item;
*/



const Item = ({foodItem}) => { // here we have directly destructured
  return <>
  <li  className="list-group-item">{foodItem}</li>
  </>
}
export default Item;





/* 
  Props are passed from a parent component to a child component
  as a single object called 'props'.

  In:
    <Item foodItem={item} />

  React creates a props object like:

    {
      foodItem: item
    }

  Here:
    - props    -> the object received by the child component
    - foodItem -> the key (property name) in the props object
    - item     -> the value assigned to that key

  The child component can access the value using:
    props.foodItem
*/
