import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import AddButton from '../../common/AddButton'
import ModalForm from '../../common/ModalForm'
import ObjectCreation from '../../common/ObjectCreation'
import Section from '../../common/Section';

export function ItemOptions() {
  const [showModal, setShowModal] = useState(false)

  let currentId = useSelector(state => state.currentId)
  let itemOptionsId = useSelector(state => state.itemOptionsId)
  let name = useSelector(state => state.name)
  let sections = useSelector(state => state.sections)
  let itemsId = useSelector(state => state.itemsId)
  let menuSelectionId = useSelector(state => state.menuSelectionId)

  const dispatch = useDispatch()



  let showItemOptions = sections.length > 0 &&
    menuSelectionId !== null &&
    itemsId !== null

  let itemOptions
  if (showItemOptions) {
    let items = sections.find(section => section.id === menuSelectionId)
    itemOptions = items.items.find(item => item.id === itemsId).options
  }

  // Open Modal
  const handleClick = () => {
    setShowModal(true)
  }

  // Selects the id of the chosen item
  const handleSelectID = (id) => {
    dispatch({ type: 'SELECT_ITEM_OPTIONS_ID', payload: id })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    const dispatchType = 'ADD_TO_ITEM_OPTIONS'
    const submissionArr = ObjectCreation(dispatchType, currentId, name)

    if (submissionArr[1].length > 0) {
      return dispatch({ type: 'UPDATE_NAME_WARNING', payload: submissionArr[1] })
    }

    dispatch({ type: 'UPDATE_NAME_WARNING', payload: '' })
    dispatch({ type: 'UPDATE_NAME', payload: '' })
    dispatch({ type: 'UPDATE_ID' })
    dispatch({ type: dispatchType, payload: { itemOption: submissionArr[0], itemsId, menuSelectId: menuSelectionId } })
    setShowModal(false)

  }

  return (
    <Col>
      <Row>
        Item Options
        {showItemOptions &&
          <AddButton name="Add" handleClick={handleClick} />}
      </Row>
      <Row>
        {itemOptions && <Section
          handleSelectID={handleSelectID}
          id={itemOptionsId}
          items={itemOptions}
        />}
      </Row>
      <ModalForm
        nameDispatch="UPDATE_NAME"
        dispatchType="ADD_TO_ITEM_OPTIONS"
        formName="Item Options Section"
        inputName="Item Option Name"
        inputNameHint="What item options would you like to add"
        name={name}
        handleSubmission={handleSubmission}
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Col>
  )
}

export default ItemOptions