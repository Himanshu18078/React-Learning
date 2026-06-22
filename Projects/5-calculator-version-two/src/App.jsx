import Display from "./Components/Display"
import ButtonsContainer from "./Components/ButtonContainer"
import styles from "./App.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from "react"

function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);

    if(buttonText ==='C'){
      setCalVal("");

    }else if(buttonText === '='){
      setCalVal(eval(calVal));
    }
    else{
      const NewDisplayValue = calVal + buttonText;
      setCalVal(NewDisplayValue);
    }
  };


  return <div className={`${styles.calculator}`} >
    <Display displayValue={calVal}></Display>
    <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
  </div>
}

export default App
