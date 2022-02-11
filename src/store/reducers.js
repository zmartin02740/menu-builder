import * as actionTypes from './actions'

const initialState = {
  name: '',
  currentFormInput: '',
  currentId: 0,
  itemsId: null,
  itemOptionsId: null,
  menuSelectionId: null,
  price: 0,
  showModal: false,
  sections: [],
  title: ''
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_ITEM_OPTIONS:
      const { itemOption, itemsId, menuSelectId } = action.payload
      const sections = state.sections
      const items = sections.find(section => section.id === menuSelectId)
      const updatedItemChoices =
        items.items.find(option => option.id === itemsId)

      updatedItemChoices.options.push(itemOption)
      return {
        ...state,
        sections: sections
      }
      return state

    case actionTypes.ADD_TO_ITEMS:
      const { item, menuSelectionId } = action.payload
      const updatedSections = state.sections
      const updatedItems = updatedSections.find(section =>
        section.id === menuSelectionId)

      updatedItems.items.push(item)
      return {
        ...state,
        sections: updatedSections
      }

    case actionTypes.ADD_TO_MENU_SECTION:
      return {
        ...state,
        sections: [...state.sections, action.payload]
      }

    case actionTypes.ADD_TO_OPTION_CHOICES:
      const {
        itemOptionObj,
        itemsID,
        itemOptionsId,
        menuSelectID
      } = action.payload

      const menuSections = state.sections
      const menuItems = menuSections.find(section =>
        section.id === menuSelectID)
      const itemOptions =
        menuItems.items.find(option =>
          option.id === itemsID)
      const optionChoices =
        itemOptions.options.find(option => option.id === itemOptionsId)

      optionChoices.choices.push(itemOptionObj)
      return {
        ...state,
        sections: menuSections
      }
    case actionTypes.CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      }

    case actionTypes.CURRENT_FORM_INPUT:
      return {
        ...state,
        currentFormInput: action.payload
      }
    case actionTypes.UPDATE_ID:
      return {
        ...state,
        currentId: state.currentId + 1
      }
    case actionTypes.SELECT_ITEMS_ID:
      return {
        ...state,
        itemsId: action.payload
      }

    case actionTypes.SELECT_ITEM_OPTIONS_ID:
      return {
        ...state,
        itemOptionsId: action.payload
      }
    case actionTypes.SELECT_MENU_SECTION_ID:
      return {
        ...state,
        itemsId: null,
        menuSelectionId: action.payload
      }

    case actionTypes.SHOW_MODAL:
      return {
        ...state,
        showModal: true
      }

    case actionTypes.UPDATE_NAME:
      return {
        ...state,
        name: action.payload
      }

    case actionTypes.UPDATE_PRICE:
      return {
        ...state,
        price: action.payload
      }

    case actionTypes.UPDATE_TITLE:
      return {
        ...state,
        title: action.payload
      }

    default:
      return state
  }
}

export default reducer