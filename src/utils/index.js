export const moneyFormat = (value) => {
  return value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}
export const idGerator = () => {
  const number = Math.random().toString(36).substring(2)
  const date = Date.now().toString(36)
  return date + number
}
export const dateFormat = (date) => {
  const newDate = new Date(date)
  const options = {
    year: 'numeric',
    month: 'short',
    day: '2-digit'
  }
  return newDate.toLocaleDateString('es-ES', options)
}
