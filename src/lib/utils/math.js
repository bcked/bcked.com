/**
 * Perform min-max normalization.
 * @param {Number} value 
 * @param {Number} min 
 * @param {Number} max 
 * @returns {Number}
 */
export function minMaxNorm(value, min, max) {
    return (value - min) / (max - min)
}

/**
 * Perform z-score normalization.
 * @param {Number} value 
 * @param {Number} avg 
 * @param {Number} std 
 * @returns {Number}
 */
export function zScoreNorm(value, avg, std) {
    return (value - avg) / std
}