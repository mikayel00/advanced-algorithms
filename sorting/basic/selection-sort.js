/**
 * SELECTION SORT
 *
 * Similar to bubble sort, but instead of first placing large values into sorted positions, it places small values
 *
 * @Cons bad for nearly sorted
 *
 * @Time O(n^2)
 * @Space O(1)
 *
 * `https://visualgo.net/en/sorting`
 */

function selectionSort(arr) {
    for (let i = 0; i < arr.length; ++i) {
        let min = i;
        for (let j = i + 1; j < arr.length; ++j) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }
        if (i !== min) {
            console.log(i, min);
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([5, 1, 2, 30, 4, 3, -1, 7]));
