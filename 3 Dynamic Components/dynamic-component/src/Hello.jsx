function Hello(){
  let myName = "Himanshu";
  let fullName = () =>{
    return "Himanshu Bisht";
  }
  let number = 5446;
  return <div>
    <p>
    Message no: {number}
  </p>
  <h3>My Name is : {fullName()}</h3>
  </div>
}
export default Hello;