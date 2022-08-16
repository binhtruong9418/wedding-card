import { Image, Col, Row, Button } from "antd";
import { format } from "date-fns";
import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

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

export default function Content() {

  const exportPDF = () => {
    const input = document.getElementById("pdf-convert")
    html2canvas(input, {logging: true, letterRendering: 1, useCORS: true}).then(canvas => {
        const imgData = canvas.toDataURL('img.png')
        const pdf = new jsPDF('p', 'mm', 'a2')
        pdf.addImage(imgData, 'PNG', 0, 0)
        pdf.save("wedding-card.pdf")
        console.log(canvas);
    })
  }


  const {currentImage} = useSelector(state => state.image)
  const {currentFont} = useSelector(state => state.font)
  const { brideName, groomName } = useSelector(state => state.name)
  const { time } = useSelector(state => state.time)
  
  return (
    <>
    <WrappedStyled id="pdf-convert">
      <div className="w-100 m-auto position-relative" >
        <Image 
          src={currentImage}
          preview={false}
          className='w-75' 
        >
        </Image>
        <div className="position-absolute d-flex align-items-center flex-column" style={{top: '15%', left: "50%" ,transform: "translate(-50%)"}}>
          <h3 style={{fontFamily: "Quicksand"}}>You are invited to the</h3>
          <h2 style={{fontFamily: `${currentFont}`, fontWeight: '500'}} className='mb-5'>Wedding</h2>
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
            width:"200%",
          }}>
            <Col span={10} className="border-top-2">
              <div className="text-center">{format(time, "iiii")}</div>
            </Col>
            <Col span={4}>
              <div className="text-center">{format(time, "dd")} </div>
            </Col>
            <Col span={10}>
              <div className="text-center">AT {format(time, "h aa")}</div>
            </Col>
          </Row>
          <div></div>
        </div>
      </div>
      </WrappedStyled>
      <Button onClick={exportPDF}>Export PDF</Button>
      </>
  );
}
