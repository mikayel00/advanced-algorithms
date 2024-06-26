/**
 * BUBBLE SORT
 *
 * Comparing two nearest element and bubble the biggest value to the end
 *
 * @Pros good for nearly sorted
 * @Cons slow, because it's swiping every 2 nearest elements
 *
 * @Time O(n^2)
 * @Space O(1)
 *
 * `https://visualgo.net/en/sorting`
 */

function bubbleSort(arr) {
    for (let i = arr.length; i > 0; --i) {
        let noSwaps = true;
        for (let j = 0; j < i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

console.log(bubbleSort([5, 1, 2, 4, 3, -1, 7]));

