import { Select } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { default as  imageReducer } from '../../../../redux/imageSlice'





export const BackgroundImage = () => {
    const dispatch = useDispatch()
    const {currentImage, images} = useSelector(state => state.image)
  const handleChange = (value) => {
    dispatch(imageReducer.actions.changeImage(value))
  }

  return (
    <div className="d-flex flex-column align-items-center">
        <div className="text-dark fs-4">Choose background</div>
        <Select onChange={handleChange} defaultValue={currentImage} className='round-1' >
            {
                images.map((img) => (
                    <Select.Option key={img.id} value={img.image}>{img.id}</Select.Option>
                ))
            }
        </Select>
    </div>
  );
};


