import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AddButton from '../../common/AddButton'
import ModalForm from '../../common/ModalForm'
import Section from '../../common/Section';
import ObjectCreation from '../../common/ObjectCreation'

export function MenuSections() {
  const [showModal, setShowModal] = useState(false)
  let menuSelectionId = useSelector(state => state.menuSelectionId)
  let name = useSelector(state => state.name)
  let currentId = useSelector(state => state.currentId)
  let sections = useSelector(state => state.sections)
  const dispatch = useDispatch()

  // Open Modal
  const handleClick = () => {
    setShowModal(true)
  }

  // Selects the id of the chosen item / sets the other sections ids lower in the hierarchy to null 
  const handleSelectID = (id) => {
    dispatch({ type: 'SELECT_MENU_SECTION_ID', payload: id })
    dispatch({ type: 'SELECT_ITEM_OPTIONS_ID', payload: null })
    dispatch({ type: 'SELECT_OPTION_CHOICES_ID', payload: null })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    const dispatchType = "ADD_TO_MENU_SECTION"
    const submissionArr = ObjectCreation(dispatchType, currentId, name)

    if (submissionArr[1].length > 0) {
      return dispatch({ type: 'UPDATE_NAME_WARNING', payload: submissionArr[1] })
    }
    dispatch({ type: 'UPDATE_NAME_WARNING', payload: '' })
    dispatch({ type: 'UPDATE_ID' })
    dispatch({ type: dispatchType, payload: submissionArr[0] })
    dispatch({ type: 'UPDATE_NAME', payload: '' })
    setShowModal(false)
  }
  return (
    <Col>
      <Row>
        Menu Sections
       <AddButton name="Add" handleClick={handleClick} />
      </Row>
      <Row>
        <Section
          handleSelectID={handleSelectID}
          items={sections}
          id={menuSelectionId}
        />
      </Row>
      <ModalForm
        nameDispatch="UPDATE_NAME"
        dispatchType="ADD_TO_MENU_SECTION"
        formName="Menu Section"
        inputName="Section Name"
        inputNameHint="What section would you like to add to the menu ex: Breakfast Section"
        name={name}
        handleSubmission={handleSubmission}
        showModal={showModal}
        setShowModal={setShowModal}
      />

    </Col>
  )
}

export default MenuSections