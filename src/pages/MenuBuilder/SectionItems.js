import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import AddButton from '../../common/AddButton'
import ModalForm from '../../common/ModalForm'
import ObjectCreation from '../../common/ObjectCreation'
import Section from '../../common/Section';

export function SectionItems() {
  const [showModal, setShowModal] = useState(false)
  let currentId = useSelector(state => state.currentId)
  let itemsId = useSelector(state => state.itemsId)
  let title = useSelector(state => state.title)
  let price = useSelector(state => state.price)
  let sections = useSelector(state => state.sections)
  let menuSelectionId = useSelector(state => state.menuSelectionId)
  const dispatch = useDispatch()

  let items
  if (sections) {
    items = sections.find(section => section.id === menuSelectionId)
  }

  // Opens Modal
  const handleClick = () => {
    setShowModal(true)
    dispatch({ type: 'CURRENT_FORM_INPUT', payload: 'UPDATE_TITLE' })
  }

  // Selects the id of the chosen item / sets the other sections ids lower in the hierarchy to null 
  const handleSelectID = (id) => {
    dispatch({ type: 'SELECT_ITEMS_ID', payload: id })
    dispatch({ type: 'SELECT_OPTION_CHOICES_ID', payload: null })
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    const dispatchType = 'ADD_TO_ITEMS'
    const submissionArr = ObjectCreation(dispatchType, currentId, null, price, title)

    if (submissionArr[1].length > 0 || submissionArr[2].length > 0) {
      dispatch({ type: 'UPDATE_TITLE_WARNING', payload: submissionArr[1] })
      dispatch({ type: 'UPDATE_PRICE_WARNING', payload: submissionArr[2] })
      return
    }

    dispatch({ type: 'UPDATE_TITLE_WARNING', payload: '' })
    dispatch({ type: 'UPDATE_PRICE_WARNING', payload: '' })
    dispatch({ type: 'UPDATE_ID' })
    dispatch({ type: 'UPDATE_PRICE', payload: '0.00' })
    dispatch({ type: 'UPDATE_TITLE', payload: '' })
    dispatch({ type: dispatchType, payload: { item: submissionArr[0], menuSelectionId } })
    setShowModal(false)
  }
  return (
    <Col>
      <Row>
        Section Items
      {sections.length > 0 && menuSelectionId !== null && <AddButton name="Add" handleClick={handleClick} />}
      </Row>
      <Row>
        {items && <Section
          handleSelectID={handleSelectID}
          id={itemsId}
          items={items.items}
        />}
      </Row>
      {sections.length > 0 && <ModalForm
        dispatchType="ADD_TO_MENU_SECTION"
        formName="Section Items"
        handleSubmission={handleSubmission}
        inputPrice="Price"
        inputPriceHint="What is the price of the Menu Item"
        inputTitle="Item Name"
        inputTitleHint="What is the name of the Menu Item"
        price={price}
        priceDispatch="UPDATE_PRICE"
        title={title}
        titleDispatch="UPDATE_TITLE"
        showModal={showModal}
        setShowModal={setShowModal}
      />}
    </Col>
  )
}

export default SectionItems