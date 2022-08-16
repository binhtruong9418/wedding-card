import React from 'react'
import styled from 'styled-components'
import { BackgroundImage } from './CategoryList/BackgroundImage'
import { Name } from './CategoryList/Name'
import { TextStyle } from './CategoryList/TextStyle'
import { Time } from './CategoryList/Time'
import { Address } from './CategoryList/Address'
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Button } from 'antd'

const WrappedStyled = styled.div`
    width: 100%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 20px; 
    gap: 40px 0;   
`


export default function Category() {

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
  return (
    <WrappedStyled>
      <BackgroundImage />
      <TextStyle />
      <Name />
      <Time />
      <Address />
      <Button onClick={exportPDF} className='m-auto'>Export PDF</Button>
    </WrappedStyled>
  )
}
