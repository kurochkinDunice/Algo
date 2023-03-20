function f(n) {
  return n ? n * f(n - 1) : 1;
}

console.time('TIME')
let all = f(40)
let part = f(20) * f(20)
let ans = all / part
console.timeEnd('TIME')

console.log(ans);
