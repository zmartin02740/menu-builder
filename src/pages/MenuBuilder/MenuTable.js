import React from 'react'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Section from '../../common/Section';
import { useDispatch, useSelector } from 'react-redux'
import AddButton from '../../common/AddButton';
import MenuSections from './MenuSections';
import OptionChoices from './OptionChoices';
import SectionItems from './SectionItems';
import ItemOptions from './ItemOptions';

export function MenuTable() {
  const sections = useSelector((state) => state.sections)
  const dispatch = useDispatch()
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