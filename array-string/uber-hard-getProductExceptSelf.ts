/**
 * This problem was asked by Uber.

Given an array of integers, return a new array such that each element at index i of the new array is the product of all the numbers in the original array except the one at i.

For example, if our input was [1, 2, 3, 4, 5], the expected output would be [120, 60, 40, 30, 24]. If our input was [3, 2, 1], the expected output would be [2, 3, 6].

 */

function getProductExceptSelf<T extends number[]>(numbers: [...T]): [...T] {
    let zeroCount = 0;
    const productOfAllNumbers = numbers.reduce((product: number, currentNumber: number) => {
        if (currentNumber !== 0) {
            return product * currentNumber;
        } else {
            zeroCount++;
            return product;
        }
    }, 1);

    return numbers.map(number => {
        if (zeroCount > 1) return 0;
        if (zeroCount === 1) return number === 0 ? productOfAllNumbers : 0;
        return productOfAllNumbers / number;
    }) as T;
}

console.log(getProductExceptSelf([1, 2, 3, 4, 5]));
console.log(getProductExceptSelf([3, 2, 1]));
console.log(getProductExceptSelf([1, 2, 0, 4, 5]));
console.log(getProductExceptSelf([2, 3, 0, 0]));
console.log('====================================');

/**
 * Follow up: how if we can not use division
 */
function getProductExceptSelfWithoutDivision<T extends number[]>(numbers: [...T]): [...T] {
    let product = 1;
    const length = numbers.length;
    // Pre-allocate the array for better performance
    const results = new Array(length) as unknown as T;

    // calculate the product prefix of index
    for (let index = 0; index < length; index++) {
        results[index] = product;
        product *= numbers[index]!;
    }
    product = 1;
    // multiply the product suffix of index with product prefix
    for (let index = length - 1; index >= 0; index--) {
        results[index]! *= product;
        product *= numbers[index]!;
    }
    return results;
}

console.log(getProductExceptSelfWithoutDivision([1, 2, 3, 4, 5]));
console.log(getProductExceptSelfWithoutDivision([3, 2, 1]));
console.log(getProductExceptSelfWithoutDivision([1, 2, 0, 4, 5]));
console.log(getProductExceptSelfWithoutDivision([2, 3, 0, 0]));