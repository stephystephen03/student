import React, { useEffect, useState } from "react";
// import './App.css';

import DigitCalc from "./components/time/DigitCalc";
import CalculateTime from "./components/time/CalculateTime";

function App() {
  const [time, setTime] = useState()
  const [isSubmit, setIsSubmit] = useState(false)
  const [hr,setHr] = useState(59)
  const [count, setCount] = useState(54)

  useEffect(() => {
    const interval = setInterval(() => {
        setCount(count + 1);
        if(count+1 === 60){
          if(hr+1 === 60){
            setTime(parseInt(time)+1)
            setHr(0)
          } else{
            setHr(hr+1)
          }
          setCount(0)
        }
    }, 1000);   

      //Clearing the interval
      return () => clearInterval(interval);
  }, [count]);

  function counter() {
    return `${hr}:${count}`
  }

  return (
    <div className="App">
      <div className="time">
        Enter Indian Time: <input type="time" id="appt" name="appt" onChange={(e)=>setTime(e.target.value)}/>&nbsp;&nbsp;
        <button type="submit" onClick={()=>{setIsSubmit(true)}}>Submit</button><br/>
      </div>

      
      
      {isSubmit && <>
        {/* <DigitCalc indianTime={time} difference="3" country="Australia" fn={counter}/>
        <DigitCalc indianTime={time} difference="4" country="UAE" fn={counter}/>
        <DigitCalc indianTime={time} difference="5" country="Canada" fn={counter}/> */}
       
        <CalculateTime indianTime={time} timeDifference="4:30" operationMode="+" country="Australia"/>
      </>}
      
    </div>
  );
}

export default App;
