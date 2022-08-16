import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { default as  timeReducer } from '../../../../redux/timeSlice'


export const Time = () => {
    const { time } =  useSelector(state => state.time)
    const dispatch = useDispatch()

    const handleChangeTime = (date) =>  {
      dispatch(timeReducer.actions.changeTime(date))
    }

  return (
    <div className="d-flex flex-column align-items-center">
        <div className="text-dark fs-4">Input time</div>
        <DatePicker
            selected={time} 
            onChange={handleChangeTime} 
            showTimeSelect
            dateFormat="dd MMM yyyy h:mm aa"
            className='border p-1'
            onKeyDown={(e) => {
              e.preventDefault();
           }}
        />
    </div>
  );
};
