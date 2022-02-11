import React from 'react'
import { textValidation, numberValidation } from './InputValidations'

// Creates an object depending on the column the user added an item to
export function ObjectCreation(dispathType, id, name = '', price = '', title = '') {
  const validations = []
  const nameValidation = textValidation(name)
  const priceValidation = numberValidation(price)
  const titleValidation = textValidation(title)
  const submissionObj = {}
  switch (dispathType) {
    case 'ADD_TO_MENU_SECTION':
      submissionObj.id = id
      submissionObj.name = name
      submissionObj.items = []

      return [submissionObj, nameValidation]

    case 'ADD_TO_ITEMS':
      submissionObj.id = id
      submissionObj.price = price
      submissionObj.title = title
      submissionObj.options = []

      return [submissionObj, titleValidation, priceValidation]

    case 'ADD_TO_ITEM_OPTIONS':
      submissionObj.id = id
      submissionObj.name = name
      submissionObj.choices = []

      return [submissionObj, nameValidation]
    case 'ADD_TO_OPTION_CHOICES':
      submissionObj.id = id
      submissionObj.name = name
      submissionObj.price = price

      return [submissionObj, nameValidation, priceValidation]
  }
}

export default ObjectCreation