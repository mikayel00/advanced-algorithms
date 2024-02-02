// function same (arr1, arr2) {         ///////// O(n^2)
//     if (arr1.length !== arr2.length) {
//         return false;
//     }
//     for (let i = 0; i < arr1.length; ++i) {
//         let index = arr2.indexOf(arr1[i] ** 2);
//         if (index === -1) return false;
//         arr2.splice(index, 1);
//     }
//     return true;
// }

function same (arr1, arr2) {        ///////// O(n)
    if (arr1.length !== arr2.length) {
        return false;
    }
    const a = {};
    const b = {};

    for (let i = 0; i < arr1.length; ++i) {
        a[arr1[i]] = (a[arr1[i]] || 0) + 1;
        b[arr2[i]] = (b[arr2[i]] || 0) + 1;
    }
    console.log(a, b);

    for (let key in a) {
        if (!b[key ** 2]) {
            return false;
        }
        if (b[key ** 2] !== a[key]) {
            return false;
        }
    }

    return true;
}

console.log(same([1, 2, 3, 2], [9, 4, 1, 4]));
