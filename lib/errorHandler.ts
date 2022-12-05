export default (code: number) => {
  switch (code) {
    case 10000:
      return 'Wrong Method.'
    case 11000:
      return 'Duplicate key error.'
    case 10001:
      return 'User not found.'
    case 10003:
      return 'Not Correct Password.'
    default:
      return 'Unknown Error.'
  }
}
