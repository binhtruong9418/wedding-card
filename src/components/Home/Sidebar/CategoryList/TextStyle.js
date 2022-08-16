import { Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { default as  fontReducer } from '../../../../redux/fontSlice'




export const TextStyle = () => {
    const dispatch = useDispatch()
    const {currentFont, fonts} = useSelector(state => state.font)
  const handleChange = (value) => {
    dispatch(fontReducer.actions.changeFont(value))
  }

  return (
    <div className="d-flex flex-column align-items-center">
        <div className="text-dark fs-4">Choose font text</div>
        <Select onChange={handleChange} defaultValue={currentFont} className='round-1' >
            {
                fonts.map((font) => (
                    <Select.Option key={font.font} value={font.font}>{font.font}</Select.Option>
                ))
            }
        </Select>
    </div>
  );
};