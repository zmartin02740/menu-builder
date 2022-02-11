import React from 'react'
import Button from 'react-bootstrap/Button'

export default ({ name, handleClick }) => {
  return (
    <Button variant="warning" size="sm" onClick={handleClick}>{name}</Button>
  )
}