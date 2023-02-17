// o(n) или O(infinity)
const arr = [20, 72, 3, 46, 33]            

function Sort(array) {
    var count = array.length, temp, index;
        while(count > 0){
            index = Math.floor(Math.random() * count);
            count--;

            temp = array[count];
            array[count] = array[index];
            array[index] = temp;
        }
}

function isSorted(arr) {
    for (let i = 0; i < arr.length - 1; ++i) {
        if (arr[i] > arr[i + 1]) return false
    }
    return true
}

console.time('TIME')

while (!isSorted(arr)) {
    Sort(arr);
}

console.timeEnd('TIME')

console.log(arr);

