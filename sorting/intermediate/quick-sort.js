/**
 * QUICK SORT
 *
 * The target of partitions is to place the pivot (any element can be chosen to be a pivot)
 * at its correct position in the sorted array and put all smaller elements to the left of the pivot,
 * and all greater elements to the right of the pivot.
 *
 * Partition is done recursively on each side of the pivot after the pivot is placed in its correct
 * position and this finally sorts the array.
 *
 * @Pros fast
 * @Cons complex code
 *
 * @Time average: O(n*log n), worst: O(n^2)
 * @Space O(n)
 * `https://visualgo.net/en/sorting`
 */

function pivot(arr, start = 0, end = arr.length + 1) {
    let pivot = arr[start];
    let swapIndex = start;

    for (let i = start + 1; i < end; ++i) {
        if (pivot > arr[i]) {
            ++swapIndex;
            let temp = arr[i];
            arr[i] = arr[swapIndex];
            arr[swapIndex] = temp;
        }
    }
    let temp = arr[start];
    arr[start] = arr[swapIndex];
    arr[swapIndex] = temp;
    return swapIndex;
}

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        // left
        quickSort(arr, left, pivotIndex - 1);
        // right
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));
