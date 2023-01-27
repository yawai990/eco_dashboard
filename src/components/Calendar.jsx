import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarCom = ({ date,handleSetOrderDate }) => {
  return (

      <Calendar className='w-full' onChange={handleSetOrderDate} value={date} maxDate={new Date()} />

  )
}

export default CalendarCom;