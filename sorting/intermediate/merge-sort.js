/**
 * MERGE SORT
 *
 * Splitting the array into small pieces, sort them and merge
 *
 * @Pros good for big data
 * @Cons space complexity
 *
 * @Time O(n*log n)
 * @Space O(n)
 * `https://visualgo.net/en/sorting`
 */

function merge(first, second) {
    let left = 0;
    let right = 0;
    const arr = [];

    while (left < first.length && right < second.length) {
        if (first[left] <= second[right]) {
            arr.push(first[left]);
            ++left;
        } else{
            arr.push(second[right]);
            ++right;
        }
    }

    while (left < first.length) {
        arr.push(first[left])
        ++left;
    }
    while (right < second.length) {
        arr.push(second[right]);
        ++right;
    }
    return arr;
}

// merge([1, 10, 50], [2, 14, 99, 100])

function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    let middle = Math.floor((arr.length - 1) / 2);
    let left = mergeSort(arr.slice(0, middle));
    let right = mergeSort(arr.slice(middle));
    return merge(left, right);
}

console.log(mergeSort([5,67,1,2,6,8,3]))
