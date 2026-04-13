/**
 * Given an array of numbers and the number K, find 2 elements so that sum of these elements equals to K
 * Questions can ask:
 * - Do I need to return all the possible solution ? 
 * - If an array have many same numbers satify sum K, I will return only one response for
 * these case ?
 */

function getTwoElementsWithKSum(array: number[], k: number): number[][] {
    const results = [];
    const numSet = new Set<number>(array);
    for (const num of array) {
        const complement = k - num;
        if (numSet.has(complement)) {
            results.push([num, complement]);
            numSet.delete(num);
            numSet.delete(complement);
            // if you want find only one return is enough
            // return [num, complement];
        }
    }
    return results;
}

console.log(getTwoElementsWithKSum([1, 3, 1, 8, -2, -1, -2, 2, -8, -7], -5));
