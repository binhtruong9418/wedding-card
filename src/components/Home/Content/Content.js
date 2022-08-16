import { Image, Col, Row, Button } from "antd";
import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const WrappedStyled = styled.div`
  width: 100%;
  height: 100%;

  .ant-image-img {
    margin: auto;
  }

  .ant-image {
    display: flex;
  }


`

const BorderBox = styled.div`
  border-top: 2px solid #000;
  border-bottom: 2px solid #000;
  width: 70%;
  position: absolute;
  left: 50%;
  transform: translate(-50%);
  display: flex
  justify-content: center;
  align-items: center;
`

export default function Content() {

  const {currentImage} = useSelector(state => state.image)
  const {currentFont} = useSelector(state => state.font)
  const { brideName, groomName } = useSelector(state => state.name)
  const { time } = useSelector(state => state.time)
  const { address } = useSelector(state => state.address)
  
  return (
    <WrappedStyled id="pdf-convert">
      <div className="w-100 m-auto position-relative" >
        <Image 
          src={currentImage}
          preview={false}
          className='w-75' 
        >
        </Image>
        <div className="position-absolute d-flex align-items-center flex-column" 
          style={
            {
              top: '15%',
              left: "50%",
              transform: "translate(-50%)",
              width: "60%",
            }
            }
        >
          <div className="text-center text-nowrap">
            <h3 style={{fontFamily: "Quicksand"}}>You are invited to the</h3>
            <h2 style={{fontFamily: `${currentFont}`, fontWeight: '500'}} className='mb-5'>Wedding</h2>
          </div>
          <h1 style={{fontFamily: `${currentFont}`}}>{brideName}</h1>
          <h1 style={{fontFamily: `${currentFont}`}}>&</h1>
          <h1 style={{fontFamily: `${currentFont}`}}>{groomName}</h1>
          <div style={
            {
              marginTop: '50px',
              fontFamily:"Quicksand",
              fontSize:"30px",
              fontWeight:'700', 
              textTransform:'uppercase'
            }
            }>{format(time, "MMMM")}</div>
          <Row style={{
            fontFamily:"Quicksand",
            fontSize:"30px",
            fontWeight:'700', 
            textTransform:'uppercase',
            width:"100%",
            margin: "20px 0",
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            <Col span={10} className='position-relative'>
              <BorderBox>
                <div className="text-center">{format(time, "iiii")}</div>
              </BorderBox>
            </Col>
            <Col span={4}>
              <div className="text-center">{format(time, "dd")} </div>
            </Col>
            <Col span={10} className='position-relative'>
              <BorderBox>
                <div className="text-center">AT {format(time, "h:mm aa")}</div>
              </BorderBox>
            </Col>
          </Row>
          <div style={
            {
              fontFamily:"Quicksand",
              fontSize:"30px",
              fontWeight:'700', 
              textTransform:'uppercase'
            }
            }>{format(time, "yyyy")}</div>
          <div style={
            {
              marginTop: '50px',
              fontFamily:"Quicksand",
              fontSize:"30px",
              fontWeight:'500', 
              textTransform:'uppercase',
              textAlign: "center",
            }
            }>{address}</div>
        </div>
      </div>
      </WrappedStyled>
  );
}
