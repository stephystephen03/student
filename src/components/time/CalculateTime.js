import React, { useEffect, useState } from 'react'
import moment from 'moment';
import 'react-moment';

const CalculateTime = ({indianTime, timeDifference, operationMode, country}) => {
    const [time, setTime] = useState()  

    useEffect(()=>{
      const [hoursDiff, minsDiff] = timeDifference.split(":");
      console.log("hoursDiff, minsDiff", hoursDiff, minsDiff)
      const indian = moment(indianTime, 'hh:mm');
      console.log("indian", indian)

      // let h = indian.add(hoursDiff, 'hours').hours(); 
      // const m = indian.add(minsDiff, 'minutes').minutes(); 


      const time = indian.add(hoursDiff, 'hours').add(minsDiff, 'minutes');
      console.log("Testing ",time)
      setTime(time);
 

    }, [])   

    return (
      <div className="container-time">
        <div className="time-row  m-30" >              
            <div className="course-content m-left">
              <h4>{country}</h4>
              <p className='time-font'>
                {/* Digit {time} */}
              </p>
            </div>
        </div>

       
      </div>
    )
}

export default CalculateTime
