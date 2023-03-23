function sumDigit(num) {
    let sum = 0n
    do {
        sum += num % 10n
        num /= 10n
    } while (num > 0)
    return sum
}

console.time('TIME');
let ans = sumDigit(BigInt(Math.pow(2, 1000)));
console.timeEnd('TIME');

console.log(ans);