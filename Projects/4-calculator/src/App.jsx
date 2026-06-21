import Display from "./Components/Display"
import ButtonsContainer from "./Components/ButtonContainer"
import styles from "./App.module.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return <div className={`${styles.calculator}`} >
    <Display></Display>
    <ButtonsContainer></ButtonsContainer>
  </div>
}

export default App
