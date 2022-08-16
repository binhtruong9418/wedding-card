import React from 'react'
import { Row, Col } from 'antd'
import Sidebar from './Sidebar/Sidebar'
import Content from './Content/Content'

export default function Home() {
  return (
    <Row style={{minHeight: '100vh'}}>
        <Col span={6} className='py-3 px-3 '>
            <Sidebar />
        </Col>
        <Col span={18}>
            <Content />
        </Col>
    </Row>
  )
}
