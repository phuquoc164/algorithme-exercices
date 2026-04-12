/**
 * Est-ce qu’il y a une entrée dans le tableau qui a son double dans le tableau ?
 * Exemple     -  [0, 2, 5, 10] = true     -  [0, 1, 3, 7] = false 
 */

function findDouble(array: number[]): number[][] {
    const arraySet = new Set(array); // to remove duplicated and find the value quickly (0(1))
    const results = [];
    for (const num of array) {
        if (num === 0) continue;
        if (arraySet.has(num / 2)) {
            results.push([num / 2, num]);
        }
    }
    return results;
}

console.log(findDouble([0, 2, 5, 10, 20, 40]));
console.log(findDouble([0, 1, 3, 7]));