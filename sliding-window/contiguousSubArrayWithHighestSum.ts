/**
 * Given an array of numbers, Find the contiguous subarray with the highest sum
Input: [-2, 1, -3, 4, -1, 2, 1, -5, 4]
Output: [4, -1, 2, 1]
 */

function findContiguousSubarrayWithHighestSum(array: number[]): number[] {
    let maxSum = array[0] as number;
    let currentMaxSum = array[0] as number;
    let startPosition = 0;
    let endPosition = 0;
    for (let index = 0; index < array.length; index++) {
        const num = array[index] as number;
        if (num > currentMaxSum + num) {
            currentMaxSum = num;
            startPosition = index;
        } else {
            currentMaxSum += num;
        }

        if (currentMaxSum > maxSum) {
            maxSum = currentMaxSum;
            endPosition = index;
        }
    }
    return array.slice(startPosition, endPosition + 1);
}

console.log(findContiguousSubarrayWithHighestSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
