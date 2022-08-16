import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { default as addressReducer } from "../../../../redux/addressSlice";

export const Address = () => {
  const dispatch = useDispatch();
  const { address } = useSelector(state => state.address)
  const handleChangeAddress = (e) => {
    dispatch(addressReducer.actions.inputAddress(e.target.value));
  };


  return (
    <div className="d-flex flex-column align-items-center">
      <div className="text-dark fs-4">Input address</div>
      <Input  onChange={handleChangeAddress} value={address} spellCheck={false} style={{marginBottom: '40px'}}/>
    </div>
  );
};