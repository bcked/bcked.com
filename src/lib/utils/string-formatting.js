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

/** 
 * @param {any} a 
 * @param {any} b 
 * @param {boolean} reverse 
 */
export function compare(a, b, reverse = true) {
    let comp;
    if (a !== '' && b !== '' && !isNaN(a) && !isNaN(b)) {
        comp = a - b
    } else {
        comp = String(b).localeCompare(String(a));
    }
    return comp * (reverse ? -1 : 1)
}