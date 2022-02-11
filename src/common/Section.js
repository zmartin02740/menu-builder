import React from 'react'
import Card from 'react-bootstrap/Card'

export default ({ handleSelectID, items, keyExt = '' }) => {
  let itemCards
  if (items.length > 0) {
    itemCards = items.map((item, index) => {
      return (
        <Card key={index} onClick={handleSelectID ? () => handleSelectID(item.id) : null}>
          {item.name ? item.name : null}
          {item.title ? item.title : null}
        </Card>
      )
    })
  }

  return (
    <div>{itemCards}</div>
  )
}

//