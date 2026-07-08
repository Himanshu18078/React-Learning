import { useEffect } from "react";
import { useState } from "react";

let CurrentTime = () =>{
const [Time,settime] = useState(new Date());
useEffect(() => {
  console.log("Interval has been set up");
  const intervalID = setInterval(()=>{
    settime(new Date);
  },1000);
  return() =>{
    clearInterval(intervalID);
    console.log("Cancled the interval");
  }
} ,[])
return <p className="lead">
  This is the current time :{Time.toLocaleDateString()} - {Time.toLocaleTimeString()} </p>
}
export default CurrentTime;