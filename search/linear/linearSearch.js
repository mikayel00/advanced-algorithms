function linearSearch(arr, val) {
    for(let i = 0; i < arr.length; ++i) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([9, 11, 5, 12, 67, 234, 1, 7], 1));
