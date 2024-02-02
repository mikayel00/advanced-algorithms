function search(arr, value) {
    let min = 0;
    let max = arr.length - 1;

    while (min < max) {
        let middle = Math.floor((min + max) / 2);
        if (arr[middle] < value) {
            min = middle + 1;
        } else if (arr[middle] > value) {
            max = middle - 1;
        } else {
            return middle;
        }
    }
    return -1;
}

console.log(search([1,2,3,6,8,9,14,18,23,55,59,60,69,80], 15));
