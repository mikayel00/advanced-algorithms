// function collectOddValues(nums) {       //      HELPER FUNCTION
//     const results = [];
//
//     function helper(arr) {
//         if (arr.length === 0) {
//             return;
//         }
//         if (arr[0] % 2 !== 0) {
//             results.push(arr[0]);
//         }
//         helper(arr.slice(1));
//     }
//
//     helper(nums);
//
//     return results;
// }

function collectOddValues(nums) {       //      PURE RECURSION
    let newArr = [];

    if (nums.length === 0) {
        return newArr;
    }
    if (nums[0] % 2 !== 0) {
        newArr.push(nums[0]);
    }
    newArr = newArr.concat(collectOddValues(nums.slice(1)));
    return newArr;
}

console.log(collectOddValues([1,2,3,4,5,6,7,8,9]));
