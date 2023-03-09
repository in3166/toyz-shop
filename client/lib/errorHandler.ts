export default (code: number) => {
  switch (code) {
    case 10000:
      return 'Wrong Method.'
    case 11000:
      return 'Duplicate key error.'
    case 10001:
      return 'User not found.'
    case 10002:
      return 'Password is not correct.'
    case 10003:
      return 'Not Correct Password.'
    default:
      return 'Unknown Error.'
  }
}

type ErrorWithMessage = {
  message: string
}

function isErrorWithMessage(error: unknown): error is ErrorWithMessage {
  return (
    typeof error === 'object' &&
    error !== null &&
    'message' in error &&
    typeof (error as Record<string, unknown>).message === 'string'
  )
}

function toErrorWithMessage(maybeError: unknown): ErrorWithMessage {
  if (isErrorWithMessage(maybeError)) return maybeError

  try {
    return new Error(JSON.stringify(maybeError))
  } catch {
    // 순환 참조와 같이 JSON.stringify에서 에러가 발생하는 경우 처리
    return new Error(String(maybeError))
  }
}

export function getErrorMessage(error: unknown) {
  return toErrorWithMessage(error).message
}
