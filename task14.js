/*
    Следующая повторяющаяся последовательность определена для множества натуральных чисел:

    n → n/2 (n - четное)
    n → 3n + 1 (n - нечетное)

    Используя описанное выше правило и начиная с 13, сгенерируется следующая последовательность:

    13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
    Получившаяся последовательность (начиная с 13 и заканчивая 1) содержит 10 элементов.
    Хотя это до сих пор и не доказано (проблема Коллатца (Collatz)), 
    предполагается, что все сгенерированные таким образом последовательности оканчиваются на 1.

    Какой начальный элемент меньше миллиона генерирует самую длинную последовательность?

    Примечание: Следующие за первым элементы последовательности могут быть больше миллиона.
*/

function isEven(num) {
    if (num % 2 === 0) return true
    return false
}

function max(a, b) {
    return a > b ? a : b
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
