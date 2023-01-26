let func = (n) => {

console.time('TIME')
    const N = n;

    let lp = Array(N+1).fill(0);
    let pr = [];

    for (let i = 2; i <= N; ++i) {
        if (lp[i] == 0) {
            lp[i] = i;
            pr.push(i);
        }
        for (let j = 0; j < pr.length && pr[j] <= lp[i] && i * pr[j] <= N; ++j) {
            lp[i * pr[j]] = pr[j];
        } 
    }
    let ans = pr.reduce((acc, item) => acc + item, 0);

console.timeEnd('TIME')
}

console.log(func(2000000));
