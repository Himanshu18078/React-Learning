import styles from "./Item.module.css"
const Item = ({ foodItem , bought , handleBuyButton}) => {
  // const handleBuyButtonClick = (event) => {
  //   console.log(event);
  //   console.log(`${foodItem} being bought`)
  // }
  return <>
    <li className={`${styles['items']} list-group-item items ${bought && 'active'}`}><span className={`${styles['h-span']}`}>{foodItem}</span>
      <button className={`${styles.button} btn btn-info`}
        // onClick={(event) => handleBuyButtonClick(event)}
        onClick={handleBuyButton}
        >Buy</button>
        {/* 
      `event` is the React SyntheticEvent object.
      When the button is clicked, React automatically creates
      and passes this object to the event handler.
      It contains information about the interaction, such as:
      - event.target      -> The element that triggered the event
                             (the button that was clicked)
      - event.type        -> The type of event ("click")
      - event.preventDefault()
                           -> Prevents the browser's default action
      - event.stopPropagation()
                           -> Stops the event from bubbling up
                              to parent elements
      Example:
      console.log(event.type);   // "click"
      console.log(event.target); // <button>Buy</button>
        
        */}
    </li>

  </>
}
export default Item;