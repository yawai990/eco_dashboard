import React from 'react';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const CalendarCom = ({ date,handleSetOrderDate }) => {
  return (

      <Calendar className='w-full' onClickDay={handleSetOrderDate} value={date !== 'all' ? date:new Date()} maxDate={new Date()} />

  )
}

export default CalendarCom;