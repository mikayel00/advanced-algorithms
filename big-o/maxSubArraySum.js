// function maxSubArraySum(arr, num) {         //////  O(n^2)
//     if (num > arr.length) {
//         return null;
//     }
//     let max = -Infinity;
//     for (let i = 0; i < arr.length - num + 1; ++i) {
//         let temp = 0;
//         for (let j = 0; j < num; ++j) {
//             temp += arr[i + j];
//         }
//         if (temp > max) {
//             max = temp;
//         }
//     }
//     return max;
// }

function maxSubArraySum(arr, num) {     ///////     O(n)
    if (num > arr.length) {
        return null;
    }
    let tempSum = 0;
    let maxSum = 0;
    for (let i = 0; i < num; ++i) {
        maxSum += arr[i];
    }
    tempSum = maxSum;
    for (let i = num; i < arr.length; ++i) {
        tempSum = tempSum + arr[i] - arr[i - num];
        maxSum = Math.max(tempSum, maxSum);
        console.log(tempSum, maxSum);
    }
    return maxSum;
}

maxSubArraySum([2,6,9,2,9,1,5,3,4,6,7,8,4,3,2,5,6,8,8,5,4,3,2,1,4,5,6,7], 3);
