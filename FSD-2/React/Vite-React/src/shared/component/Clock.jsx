import {useEffect, useState} from 'react'

function Clock() {
    const[time,setTime] = useState(new Date())
    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(new Date())

        },1000)
        return ()=> clearInterval(interval)
    },[])
    
 
    return (
        <div>
             <div className="container">
        <div className="banner">Your Local Time</div>
        <div id="clock">{time.toLocaleTimeString()}</div>
    </div>

            
        </div>
    );
}

export default Clock;