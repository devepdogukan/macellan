export function formatCurrency(currency: number): string {
    const formatter = new Intl.NumberFormat('tr-TR', {
        style: 'currency',
        currency: 'TRY',
    });

    return formatter.format(currency)
}
