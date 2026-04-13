/**
 * Given the arrays of coins and a total amount of money, determine the fewest number of coins needed to make up that amount.
 * If that amount of money cannot be made up by any combination of the coins, return -1.
 * For example
 * given coins = [1, 2, 5, 10, 20, 25] and amount = 11, return 2 (11 = 10 + 1)
 * given coins = [1, 2, 5, 10, 20, 25] and amount = 40, return 2 (40 = 20 + 20)
 * given coins = [5, 10, 20, 25] and amount = 11, return -1
 */

function findMinimumNumberOfCoins(coins: number[], amount: number): number {
    const dp: number[] = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (const coin of coins) {
            if (coin <= i) {
                dp[i] = Math.min(dp[i]!, dp[i - coin]! + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount]!;
}

console.log(findMinimumNumberOfCoins([1, 2, 5, 10, 20, 25], 11));
console.log(findMinimumNumberOfCoins([1, 2, 5, 10, 20, 25], 40));
console.log(findMinimumNumberOfCoins([5, 10, 20, 25], 11));
