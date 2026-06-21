import styles from "./Button.module.css"
function Button({buttons}) {
  return <>
  {buttons.map((item) => <button className={`${styles.button}`}>{item}</button>)}
    
  </>
}
export default Button;