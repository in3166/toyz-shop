const currencyFormatter = (value: number | string, type: string = '') => {
  let number = Number(value)

  switch (type) {
    case 'thousand':
      number /= 1000
      break
    case 'tenThousand':
      number /= 10000
      break

    default:
      break
  }

  return new Intl.NumberFormat().format(Number(number))
}

export { currencyFormatter }
