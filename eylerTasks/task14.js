// O(n log n)
function isEven(num) {
    if (num % 2 === 0) return true
    return false
}

console.time('TIME')
let maxSize = 0
let maxStart = 0
for (let i = 1; i < 1000000; i += 2) {
    let num = i
    let countSize = 1

    while (num != 1) {
        if (isEven(num)) {
            num /= 2
        } else {
            num = num * 3 + 1
        }
        countSize++
    }

    if (maxSize < countSize) {
        maxSize = countSize
        maxStart = i
    }
}
console.timeEnd('TIME')

console.log(maxStart);
