import React, { useEffect, useState } from 'react'

const Timer = ({initialvalue}) => {
   
    const [timeleft,settimeleft] = useState(initialvalue)
    const [count,setcount] = useState(0)
    useEffect(()=>{

        if(timeleft==0) {
            alert("you ran out of time ")
            return
        }
       
        const time = setInterval(()=>{
           settimeleft(timeleft-1)
        },1000)

        return function(){
            clearInterval(time)
        }

    },[timeleft])
    
    useEffect(()=>{
        // console.log("user restarted ")
        return function(){
            console.log('user restarted !! ')
        }
    },[count])


  return (
     
    <div>
        <div>Timer : {timeleft}</div>
        <h2> user Restarted : {count}</h2>
        <button
        onClick={()=>{
            settimeleft(initialvalue)
            setcount(count+1)
        }}
       

        > restart </button>
    </div>

  )
}

export default Timer