import styles from "./Button.module.css"
function Button({buttons , onButtonClick}) {
  return <>
  {buttons.map((item) => <button
  key={item}
  className={`${styles.button}`}
  onClick={() => onButtonClick(item)}
  >{item}</button>)}
  </>
}
export default Button;
/*
// Function reference
// React calls onButtonClick when the button is clicked
onClick={onButtonClick}

// Anonymous function
// When clicked, call onButtonClick and pass item
onClick={() => onButtonClick(item)}
*/