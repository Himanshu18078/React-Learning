import styles from "./FoodInput.module.css"
const FoodInput = ({onKeyDownButton}) => {
  return <input
    type="text"
    placeholder="Enter Food Item Here"
    className={`${styles.foodInput}`}
    onKeyDown={onKeyDownButton} />
    /*
    Here you're passing a function reference, not calling the function.

    So you don't pass any parameters. React will call the function later and provide the event parameter automatically.

    if you were calling the function yourself, you'd write:
    
    */
}
export default FoodInput;