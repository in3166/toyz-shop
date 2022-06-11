function validateId(value: string) {
  return value.length > 3
}

function validatePassword(value: string) {
  return /^(?=.*\d)(?=.*[a-z]).{6,20}$/.test(value)
}

function validateName(value: string) {
  return value.length > 1
}

function validatePhoneNumber(value: string) {
  return /^\d{2,3}-\d{1,4}-\d{1,4}$/.test(value)
}

export { validateId, validatePassword, validateName, validatePhoneNumber }
