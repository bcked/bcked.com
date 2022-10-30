import _ from "lodash";

/** 
 * Get the closest element in time.
 * @param {{timestamp: string}[]} array
 * @param {string} timestamp
 */
export function closest(array, timestamp) {
    return _.minBy(array, (item) => Math.abs(new Date(item.timestamp).getTime() - new Date(timestamp).getTime()))
}