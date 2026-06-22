import Button from "./Button"
import styles from './ButtonContainer.module.css'
function ButtonsContainer ({onButtonClick}){
  let buttons = ['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.']
  return <div>
    <div className={`${styles.buttonsContainer}`}>
      <Button buttons = {buttons} onButtonClick = {onButtonClick}></Button>
    </div>
  </div>
}
export default ButtonsContainer;