/**
 * There's a staircase with N steps, and you can climb 1 or 2 steps at a time. Given N, write a function that returns the number of unique ways you can climb the staircase. The order of the steps matters.

For example, if N is 4, then there are 5 unique ways:

1, 1, 1, 1
2, 1, 1
1, 2, 1
1, 1, 2
2, 2
What if, instead of being able to climb 1 or 2 steps at a time, you could climb any number from a set of positive integers X? For example, if X = {1, 3, 5}, you could climb 1, 3, or 5 steps at a time. Generalize your function to take in X.
 */

function countUniqueWaysToClimb(allowedSteps: number[], target: number): number {
    const dp = new Array(target + 1).fill(0);
    dp[0] = 1;
    allowedSteps.sort();
    for (let index = 1; index <= target; index++) {
        for (const step of allowedSteps) {
            if (index >= step) {
                dp[index] += dp[index - step];
            } else {
                break;
            }
        } 
    }

    return dp[target];
}

console.log(countUniqueWaysToClimb([1, 5, 3], 10));
