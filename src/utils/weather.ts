export const getWeatherIcon = (desc: string) => {
  let weatherIconName = ''
  switch (desc) {
    case 'Clouds':
      weatherIconName = ''
      break
    default:
      break
  }

  return weatherIconName
}
