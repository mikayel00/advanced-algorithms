/**
 * RADIX SORT
 *
 * Radix Sort is a linear sorting algorithm that sorts elements by processing them digit by digit.
 *
 *
 * @Pros not based on comparison sort
 * @Cons
 *
 * @Time O(n * k), n - length of array, k - average length of digits. If all elements are unique, time will be O(n*log n);
 * @Space O(n + k)
 * `https://visualgo.net/en/sorting`
 */

function getDigit(num, i) {
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num)) + 1);
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; ++i) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}

function radixSort(nums) {
    let maxDigit = mostDigits(nums);
    for (let k = 0; k < maxDigit; ++k) {
        let digitBuckets = Array.from({ length: 10 }, () => []);
        for (let i = 0; i < nums.length; ++i) {
            let digit = getDigit(nums[i], k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

console.log(radixSort([12, 456, 14, 7, 1245, 8654, 3777, 1, 15, 45]));
