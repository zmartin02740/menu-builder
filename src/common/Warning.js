import React from 'react'
import Form from 'react-bootstrap/Form'

export default ({ input }) => {
  // Warning for the text input
  return (
    <div>
      {input.length > 0 && <Form.Label style={{ color: 'red' }}>{input}</Form.Label>}
    </div>
  )
}