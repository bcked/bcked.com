/** @param {Number} num */
export function formatCompactNumber(num, digits = 2) {
    if (num >= 1000) {
        return Intl.NumberFormat('en-US', {
            notation: 'compact',
            maximumFractionDigits: digits
        }).format(num);
    } else if (num >= 1) {
        return Number(num).toFixed(digits);
    } else if (num > 0) {
        return Number(num).toExponential(digits);
    } else {
        return Number(num).toFixed(digits);
    }
}