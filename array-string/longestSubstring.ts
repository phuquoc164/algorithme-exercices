/**
 * Find the longest substring where all the characters in substring are different
 */

function findLongestSubstring(target: string): string {
    const charMap = new Map<string, number>();
    let result = '';
    let startPosistion = 0;

    for (let index = 0; index < target.length; index++) {
        const char: string = target[index]!;
        if (charMap.has(char) && charMap.get(char)! >= startPosistion) {
            startPosistion = charMap.get(char)! + 1;
        }
        charMap.set(char, index);
        if ((index + 1 - startPosistion) > result.length) {
            result = target.substring(startPosistion, index + 1);
        }
    }
    return result;
}

console.log(findLongestSubstring('aerztyyterzeas'));