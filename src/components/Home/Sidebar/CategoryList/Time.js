import { Input } from "antd";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { useDispatch, useSelector } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";


export const Time = () => {
    const { time } =  useSelector(state => state.time)
    const [startDate, setStartDate] = useState(time);

  return (
    <div className="d-flex flex-column align-items-center">
        <div className="text-dark fs-4">Input time</div>
        <DatePicker
            selected={startDate} 
            onChange={(date) => setStartDate(date)} 
            showTimeSelect
            dateFormat="dd MMM yyyy h:mm aa"
            className='border p-1'
        />
    </div>
  );
};
