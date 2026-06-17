const ErrorMessage = ({items}) =>{ //here we have recieved a prop but we have directly destructured the object ,  the array is now stored in new variable item
  
  return <>
  {items.length === 0 && <h3>I am still Hungry</h3>}
  </>
}
export default ErrorMessage;