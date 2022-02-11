import React from 'react'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'

export default ({ handleSelectID, id, items, keyExt = '' }) => {
  let itemCards

  if (items.length > 0) {
    itemCards = items.map((item, index) => {
      const sameId = item.id === id
      const cardStyle = {
        padding: '10px 30px',
        borderColor: sameId ? 'gray' : 'lightgray',
        backgroundColor: sameId ? 'lightgray' : 'white',
        cursor: 'pointer',
        marginBottom: 2
      }
      return (
        <Container key={index}>
          <Card
            onClick={handleSelectID ? () => handleSelectID(item.id) : null}
            style={cardStyle}
          >
            {item.name ? item.name : null}
            {item.title ? item.title : null}
          </Card>
        </Container>
      )
    })
  }

  return (
    <div>{itemCards}</div>
  )
}

//