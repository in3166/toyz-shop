function validateId(value: string | number) {
  const temp = value.toString()
  return temp.length > 3
}

function validatePassword(value: string | number) {
  const temp = value.toString()
  return /^(?=.*\d)(?=.*[a-zA-Z]).{6,20}$/.test(temp)
}

function validateName(value: string | number) {
  const temp = value.toString()
  return temp.length > 1
}

function validatePhoneNumber(value: string | number) {
  const temp = value.toString()
  return /^\d{2,3}-\d{1,4}-\d{1,4}$/.test(temp)
}

function validateEmail(value: string | number) {
  const temp = value.toString()
  return /[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]$/i.test(temp)
}

function validateProductTitle(value: string | number) {
  const temp = value.toString()
  return temp.length > 3
}

function validateProductPrice(value: string | number) {
  return Number(value) > 0
}

function validateProductDescription(value: string | number) {
  const temp = value.toString()
  return temp.length > 4
}

export {
  validateId,
  validatePassword,
  validateName,
  validatePhoneNumber,
  validateEmail,
  validateProductTitle,
  validateProductPrice,
  validateProductDescription,
}
