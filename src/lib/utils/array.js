import _ from "lodash";

/** 
 * Get the closest element in time.
 * @param {{timestamp: string}[]} array
 * @param {string} timestamp
 */
export function closest(array, timestamp) {
    console.log(array)
    console.log(timestamp)
    console.log(_.minBy(array, (item) => Math.abs(new Date(item.timestamp).getTime() - new Date(timestamp).getTime())))
    return _.minBy(array, (item) => Math.abs(new Date(item.timestamp).getTime() - new Date(timestamp).getTime()))
}

/** 
 * Generate array of numbers between min and max value.
 * @param {number} min
 * @param {number} max
 * @param {number} n
 */
export function generate(min, max, n) {
    const interval = (max - min) / (n - 1);
    const initial = new Array(n).fill(min);
    return initial.map((value, index) => index * interval + value);
}