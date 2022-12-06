function validateId(value: string) {
  return value.length > 3
}

function validatePassword(value: string) {
  return /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/.test(value)
}

function validateName(value: string) {
  return value.length > 1
}

function validatePhoneNumber(value: string) {
  return /^\d{2,3}-\d{1,4}-\d{1,4}$/.test(value)
}
function validateEmail(value: string) {
  return /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.test(value)
}

export { validateId, validatePassword, validateName, validatePhoneNumber, validateEmail }
