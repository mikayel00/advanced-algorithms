/**
 * INSERTION SORT
 *
 * Builds up the sort by gradually creating a larger left half which is always sorted
 *
 * @Pros good for nearly sorted
 * @Cons
 *
 * `https://visualgo.net/en/sorting`
 */

function insertionSort(arr) {
    for (let i = 1; i < arr.length; ++i) {
        let currentVal = arr[i];
        let index = i - 1;
        for (let j = i - 1; j >= 0 && arr[j] > currentVal; --j) {
            arr[j + 1] = arr[j];
            index = j - 1;
        }
        arr[index + 1] = currentVal;
    }
    return arr;
}

console.log(insertionSort([5, 1, 4, 2, 3, -1, 7]));
                            // j  i
