const amountFormatter = new Intl.NumberFormat('en-US')

export function formatAmount(amount: number) {
  return `Rs. ${amountFormatter.format(amount)}`
}
