export function currencyAdapter (amount:number) {
    const formatedAmount = parseFloat(Intl.NumberFormat('es-ES', {style: 'currency', currency: 'EUR'}).format(amount))
    return formatedAmount
}