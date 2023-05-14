import React,{ useState,useEffect } from 'react'

const Clock = () => {
     const [ clock, setClock ] = useState({ hour : 0, minute :0, second : 0, ampm:'AM'});
     const date = new Date();
     const hours = date.getHours();
     const minutes = date.getMinutes();
     const seconds = date.getSeconds();
     var ampm = date.getHours() > 12 ? "pm" : "am";

     const handleClock = () =>{
          const minute = minutes < 10 ? "0"+ minutes : minutes;
          const second = seconds < 10 ? "0"+ seconds : seconds;
          let hour = hours < 10 ? "0"+ hours : hours;
          hour = hours > 12 ? hours - 12 : hours;
          setClock({...clock,hour,second,minute,ampm});
     };
     useEffect(() =>{
          const timer = setInterval(() => handleClock(),1000);
          return () => clearInterval(timer);
     }, [date]);

  return (
     <div className='text-primary text-2xl uppercase font-semibold'>
          <span>{clock.hour}:{clock.minute}:{clock.second}
          <span> {clock.ampm}</span>
          </span></div>
  )
}

export default Clock