import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Form from 'react-bootstrap/Form'

export function TextInput({
  dispatchType,
  hint,
  title,
  value
}) {
  const currentDispatch = useSelector(state => state.currentFormInput)
  const dispatch = useDispatch()
  const handleChange = (event) => {
    let inputValue = event.target.value
    dispatch({ type: dispatchType, payload: inputValue })
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

export default TextInput