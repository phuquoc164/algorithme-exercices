/**
 * Given a string consisting of parentheses, single digits, and positive and negative signs, convert the string into a mathematical expression to obtain the answer.
 * Don't use eval or a similar built-in parser.
 * For example, given '-1 + (2 + 3)', you should return 4
 */

function solveMath(target: string): number {
    let result = 0;
    let sign = 1; // -1 is minus, 1 is plus
    let currentNumber = 0;
    let stack: number[] = [];
    for (let index = 0; index < target.length; index++) {
        const char = target[index] as string;
        const code = char.charCodeAt(0);
        // 48 is 0, 57 is 9
        if (code >= 48 && code <= 57) {
            const digit = code - 48;
            currentNumber = currentNumber * 10 + digit;
        } else if (char === '+' || char === '-') {
            result += currentNumber * sign;
            currentNumber = 0;
            sign = char === '+' ? 1 : -1;
        } else if (char === '(') {
            stack.push(result);
            stack.push(sign);
            result = 0;
            sign = 1;
        } else if (char === ')') {
            result += currentNumber * sign;
            const lastSign = stack.pop()!;
            const lastResult = stack.pop()!;
            result = lastResult + lastSign * result;
            currentNumber = 0;
        }
    }
    return result;
}

console.log(solveMath('-16 - (20 - 36) - (-123 + 126)'));
