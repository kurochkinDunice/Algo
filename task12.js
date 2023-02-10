// O(n**0.5+n)
function triangularNumbers(needDividerNum) {
    let triangleNum = 1

    let n = 1

    while (true) {
        if (dividerNum(triangleNum) > needDividerNum)
            return triangleNum

        triangleNum = (n + 1) * n / 2
        n++  
    }
}

function dividerNum(num) {
    let count = 0
    for (let i = 1; i * i <= num ; ++i) {
        if (num % i === 0 && i * i != num )
            count += 2

        if (i * i  === num && num % i === 0)
            count++
    }
    
    return count
}

console.time('TIME')
let ans = triangularNumbers(500);
console.timeEnd('TIME')

// 76576500
console.log(ans);