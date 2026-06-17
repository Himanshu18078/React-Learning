import styles from "./Item.module.css"
// here we get styles as object and all the class are key of the object.
const Item = ({foodItem}) => {
  return <>
  {/* 
  {} lets us write JavaScript inside JSX.

  `${}` inserts a JavaScript value into a template string.

  [] is used to access an object's property by its name as a string.

  styles['items'] gets the value of the 'items' class
  from the CSS Module object.
  */}
  <li  className= {`${styles['items']} list-group-item items`}><span className={`${styles['h-span']}`}>{foodItem}</span></li>

  </>
}
export default Item;