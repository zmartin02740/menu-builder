import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MenuSections from './MenuSections';
import OptionChoices from './OptionChoices';
import SectionItems from './SectionItems';
import ItemOptions from './ItemOptions';

export function MenuTable() {
  return (
    <Container>
      <Row>
        <Col>
          <MenuSections />
        </Col>
        <Col>
          <SectionItems />
        </Col>
        <Col>
          <ItemOptions />
        </Col>
        <Col>
          <OptionChoices />
        </Col>
      </Row>
    </Container>

  )
}

export default MenuTable