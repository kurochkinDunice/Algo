const arr = [20, 72, 3, 46, 33, 0, 12, 54, -2, 4]            

function Sort(array, start, end) {
    if (start - end < 2) return;
    if (start - end == 2) {
        if (array[start] > array[start + 1]) {
            let tmp = array[start]
            array[start] = array[start + 1]
            array[start + 1] = tmp;
        }
        return; 
    }
    
    Sort(array, start, start + (end - start) / 2);
    Sort(array, start + (end - start) / 2, end);
    
    const newArr = [];
    let b1 = start;
    let el = start + (end - start) / 2;
    let b2 = el

    while (newArr.length < end - start) {
        if (b1 >= el || (b2 < end && array[b2] <= array[b1])) {
            newArr.push(array[b2]);
            ++b2;
        } else {
            newArr.push(array[b1]);
            ++b1;
        }
    }

    for (let i = start; i < end; ++i) {
        array[i] = newArr[i - start];
    }
}

console.time('TIME')

Sort(arr, 0, arr.length - 1)

console.timeEnd('TIME')

console.log(arr);
