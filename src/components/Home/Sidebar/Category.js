import { BorderOutlined } from '@ant-design/icons'
import { Select } from 'antd'
import React from 'react'
import styled from 'styled-components'
import { BackgroundImage } from './CategoryList/BackgroundImage'
import { Name } from './CategoryList/Name'
import { TextStyle } from './CategoryList/TextStyle'
import { Time } from './CategoryList/Time'

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
  return (
    <WrappedStyled>
      <BackgroundImage />
      <TextStyle />
      <Name />
      <Time />
    </WrappedStyled>
  )
}
