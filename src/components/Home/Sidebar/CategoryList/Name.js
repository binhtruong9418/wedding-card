import { Input } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { default as nameReducer } from "../../../../redux/nameSlice";

export const Name = () => {
  const dispatch = useDispatch();
  const { groomName, brideName } = useSelector(state => state.name)
  const handlebrideChange = (e) => {
    dispatch(nameReducer.actions.inputName({brideName: e.target.value, groomName: groomName }));
  };
  const handlegroomChange = (e) => {
    dispatch(nameReducer.actions.inputName({brideName: brideName, groomName: e.target.value }));
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div className="text-dark fs-4">Input bride name</div>
      <Input  onChange={handlebrideChange} value={brideName} spellCheck={false} style={{marginBottom: '40px'}}/>
      <div className="text-dark fs-4 ">Input groom name</div>
      <Input  onChange={handlegroomChange} value={groomName} spellCheck={false}/>
    </div>
  );
};
