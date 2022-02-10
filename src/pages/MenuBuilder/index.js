import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MenuTable from './MenuTable'

export default () => {
  return (
    <Container>
      <Row>
        <Col>
          <MenuTable />
        </Col>
      </Row>
    </Container>
  )
}