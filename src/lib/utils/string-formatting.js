/** @param {Number} num */
export function formatCurrency(num, digits = 2, currency = 'USD', currencyDisplay = 'symbol', useGrouping = true) {
    const options = {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
        style: 'currency',
        currency,
        currencyDisplay,
        useGrouping
    }
    let notation = 'standard'
    if (num >= 1000) {
        notation = 'compact'
    } else if (num < 1 && num > 0) {
        notation = 'scientific'
    }
    return Intl.NumberFormat('en-US', { notation, ...options }).format(num);
}

/** @param {Number} num */
export function formatNum(num, digits = 2, useGrouping = true) {
    const options = {
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
        useGrouping
    }
    let notation = 'standard'
    if (num >= 1000) {
        notation = 'compact'
    } else if (num < 0.1 && num > 0) {
        notation = 'scientific'
    }
    return Intl.NumberFormat('en-US', { notation, ...options }).format(num);
}

/** @param {Number} num */
export function formatPercentage(num, digits = 0) {
    return Intl.NumberFormat('en-US', {
        style: 'percent',
        minimumFractionDigits: digits,
        maximumFractionDigits: digits,
    }).format(num);
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

/** 
 * @param {string} a 
 * @param {string} b 
 */
export function compareDates(a, b) {
    const aTime = new Date(a).getTime();
    const bTime = new Date(b).getTime();
    return bTime - aTime;
}

/** @param {any[]} criteria */
export function combine(...criteria) {
    return (a, b) => {
        if (!criteria) return 0

        for (let i = criteria.length - 1; i >= 0; i--) {
            const curCriteriaComparatorValue = criteria[i](a, b)
            // if the comparison objects are not equivalent, return the value obtained
            // in this current criteria comparison
            if (curCriteriaComparatorValue !== 0) {
                return curCriteriaComparatorValue
            }
        }
        return 0
    }
}