export function handleProductStatus(status: number) {
  switch (status) {
    case 1:
      return 'common:filter:status:onSale'
    case 2:
      return 'common:filter:status:reserved'
    case 3:
      return 'common:filter:status:sold'
    default:
      return 'common:filter:status:all'
  }
}
