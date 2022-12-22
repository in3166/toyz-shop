export default function handleProductStatus(status: number) {
  switch (status) {
    case 1:
      return '판매 중'
    case 2:
      return '예약 중'
    case 3:
      return '판매 완료'
    default:
      return '판매 중'
  }
}
