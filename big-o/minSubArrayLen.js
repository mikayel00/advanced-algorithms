function minSubArrayLen(arr, sum) {
    let minLen = Infinity;
    let start = 0;
    let end = 0;
    let total = 0;
    while (start < arr.length) {
        if (total < sum && end < arr.length) {
            total += arr[end];
            ++end;
        } else if (total >= sum) {
            minLen = Math.min(minLen, end - start);
            total -= arr[start];
            start++;
        } else {
            break;
        }
    }
    return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,1,6,5,4], 9))
