import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import AddButton from '../../common/AddButton'
import ModalForm from '../../common/ModalForm'
import ObjectCreation from '../../common/ObjectCreation'
import Section from '../../common/Section';

export function ItemOptions() {
  const [showModal, setShowModal] = useState(false)
  let currentId = useSelector(state => state.currentId)
  let name = useSelector(state => state.name)
  let price = useSelector(state => state.price)
  let sections = useSelector(state => state.sections)
  let itemsId = useSelector(state => state.itemsId)
  let itemOptionsId = useSelector(state => state.itemOptionsId)
  let menuSelectionId = useSelector(state => state.menuSelectionId)
  const dispatch = useDispatch()



  let showOptions = sections.length > 0 &&
    menuSelectionId !== null &&
    itemsId !== null &&
    itemOptionsId !== null

  let optionChoices
  if (showOptions) {
    let items = sections.find(section => section.id === menuSelectionId)
    let itemOptions = items.items.find(item => item.id === itemsId).options
    optionChoices = itemOptions.find(option => option.id === itemOptionsId).choices
  }

  const handleClick = () => {
    setShowModal(true)
  }

  const handleSubmission = (event) => {
    event.preventDefault()
    const dispatchType = 'ADD_TO_OPTION_CHOICES'
    const submissionArr = ObjectCreation(dispatchType, currentId, name, price)

    if (submissionArr[1].length > 0 || submissionArr[2].length > 0) {
      dispatch({ type: 'UPDATE_NAME_WARNING', payload: submissionArr[1] })
      dispatch({ type: 'UPDATE_PRICE_WARNING', payload: submissionArr[2] })
      return
    }

    dispatch({ type: 'UPDATE_NAME_WARNING', payload: '' })
    dispatch({ type: 'UPDATE_PRICE_WARNING', payload: '' })
    dispatch({ type: 'UPDATE_NAME', payload: '' })
    dispatch({ type: 'UPDATE_PRICE', payload: '0.00' })
    dispatch({ type: 'UPDATE_ID' })
    dispatch({
      type: dispatchType, payload: {
        itemOptionObj: submissionArr[0],
        itemsID: itemsId,
        itemOptionsId,
        menuSelectID: menuSelectionId
      }
    })
    setShowModal(false)
  }

  return (
    <Row>
      Option Choices
        {showOptions &&
        <AddButton name="Add" handleClick={handleClick} />}
      {optionChoices && <Section
        items={optionChoices}
      />}
      <ModalForm
        nameDispatch="UPDATE_NAME"
        dispatchType="ADD_TO_OPTION_CHOICES"
        formName="Item Options Section"
        inputName="Option Choice Name"
        inputNameHint="What option choice would you like to add"
        inputPrice="Price"
        inputPriceHint="What would you like the cost of this option be?"
        name={name}
        handleSubmission={handleSubmission}
        price={price}
        priceDispatch="UPDATE_PRICE"
        showModal={showModal}
        setShowModal={setShowModal}
      />
    </Row>
  )
}

export default ItemOptions