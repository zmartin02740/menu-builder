export default (dispathType, id, name, price, title) => {
  const submissionObj = {}
  switch (dispathType) {
    case 'ADD_TO_MENU_SECTION':
      submissionObj.id = id
      submissionObj.name = name
      submissionObj.items = []

      return submissionObj
    case 'ADD_TO_ITEMS':
      submissionObj.id = id
      submissionObj.price = price
      submissionObj.title = title
      submissionObj.options = []

      return submissionObj
    case 'ADD_TO_ITEM_OPTIONS':
      submissionObj.id = id
      submissionObj.name = name
      submissionObj.choices = []

      return submissionObj
    case 'ADD_TO_OPTION_CHOICES':
      submissionObj.id = id
      submissionObj.name = name
      submissionObj.price = price

      return submissionObj
  }
}