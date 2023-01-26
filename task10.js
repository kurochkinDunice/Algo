let func = (n) => {
    console.time('TIME')
    /*********************/

    let lp = Array(n+1).fill(0);
    let pr = [];
    let ans = 0;

    for (let i = 2; i <= n; ++i) {
        if (!lp[i]) {
            lp[i] = i;
            pr.push(i);
            ans += i
        }
        for (let j = 0; j < pr.length && pr[j] <= lp[i] && i * pr[j] <= n; ++j) {
            lp[i * pr[j]] = pr[j];    
        } 
    }

    /*********************/
    console.timeEnd('TIME')

    console.log(ans);
}

func(2000000);
