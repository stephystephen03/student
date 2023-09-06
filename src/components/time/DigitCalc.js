import React, { useEffect, useState } from 'react'
import './../../time.css'

const DigitCalc = ({indianTime, difference, country, fn}) => {

  const [time, setTime] = useState()
  useEffect(()=>{
    const t = parseInt(indianTime)+ parseInt(difference);
    console.log("fn()", fn())
    setTime(t)
  },[indianTime])
    
  return (
    <div className="container-time">
      <div className="time-row  m-30" >              
          <div className="course-content m-left">
            <h4>{country}</h4>
            <p className='time-font'>
              Time {time}:{fn()}<br/>
            </p>
          </div>
      </div>
    </div>
  )
}

export default DigitCalc
