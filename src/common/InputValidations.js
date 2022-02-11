// validates that a string is longer than 3 characters
export const textValidation = (text) => {
  let warning = ''
  if (text === null || text.length < 3) {
    warning = "Please make sure the text is longer than 3 characters"
  }

  return warning
}

// validates that the input is a number
export const numberValidation = (text) => {
  let warning = ''
  if (typeof parseInt(text) !== 'number' || text.length === 0) {
    warning = 'This value needs to be a number. If its free, use 0'
  }

  return warning
}