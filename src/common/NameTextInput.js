import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'

export function NameTextInput({
  dispatchType,
  hint,
  title,
  value
}) {
  const currentDispatch = useSelector(state => state.currentFormInput)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    let value = event.target.value
    dispatch({ type: currentDispatch, payload: value })
  }
  return (
    <>
    <Form.Label>{title}</Form.Label>
    <Form.Control
      type="text"
      value={value}
      onChange={handleChange}
    />
    <Form.Text muted>
      {hint}
    </Form.Text>
    </>
  )
}

export default NameTextInput