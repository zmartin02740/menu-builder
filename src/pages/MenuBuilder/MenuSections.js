import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import AddButton from '../../common/AddButton'
import ModalForm from '../../common/ModalForm'
import Section from '../../common/Section';
import ObjectCreation from '../../common/ObjectCreation'

export function MenuSections() {
  const [showModal, setShowModal] = useState(false)
  let name = useSelector(state => state.name)
  let nameWarning = useSelector(state => state.nameWarning)
  let currentId = useSelector(state => state.currentId)
  let sections = useSelector(state => state.sections)
  const dispatch = useDispatch()

  const handleClick = () => {
    setShowModal(true)
  }

  const handleSelectID = (id) => {
    dispatch({ type: 'SELECT_MENU_SECTION_ID', payload: id })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    // if (nameWarning.length > 0) return
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
    <Row>
      Menu Sections
       <AddButton name="Add" handleClick={handleClick} />
      <Section
        handleSelectID={handleSelectID}
        items={sections}
      />
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

    </Row>
  )
}

export default MenuSections