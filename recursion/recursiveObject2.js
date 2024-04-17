// function nestedEvenSum (obj) {
//     let sum = 0;
//     const values = Object.values(obj);
//     for (let value of values) {
//         if (typeof value === 'number') {
//             if (value % 2 === 0) {
//                 sum += value;
//             }
//         } else {
//             if (typeof value === 'string') {
//                 continue;
//             }
//             sum += nestedEvenSum(value);
//         }
//     }
//     return sum;
// }
//
//
// var obj1 = {
//     outer: 2,
//     obj: {
//         inner: 2,
//         otherObj: {
//             superInner: 2,
//             notANumber: true,
//             alsoNotANumber: "yup"
//         }
//     }
// }
//
// var obj2 = {
//     a: 2,
//     b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//     c: {c: {c: 2}, cc: 'ball', ccc: 5},
//     d: 1,
//     e: {e: {e: 2}, ee: 'car'}
// };
//
// console.log(nestedEvenSum(obj1)); // 6
// console.log(nestedEvenSum(obj2)); // 10


//  ======== CAPITALIZE WORDS

// function capitalizeWords (data) {
//     const words = [];
//     console.log(data);
//     function helper(arr) {
//         if (!arr.length) return words;
//         const word = arr[0].toUpperCase();
//         words.push(word);
//         helper(arr.slice(1));
//     }
//     helper(data);
//     return words;
// }
//
// let words = ['i', 'am', 'learning', 'recursion'];
// console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']
//
// function capitalizeWords (array) {
//     if (array.length === 1) {
//         return [array[0].toUpperCase()];
//     }
//     let res = capitalizeWords(array.slice(0, -1));
//     res.push(array.slice(array.length-1)[0].toUpperCase());
//     return res;
//
// }


// function stringifyNumbers(obj) {
//     const newObj = { ...obj };
//     function helper(newObj) {
//         for (let key in newObj) {
//             if (typeof newObj[key] === 'number') {
//                 newObj[key] = newObj[key].toString();
//             } else {
//                 helper(newObj[key]);
//             }
//         }
//     }
//     helper(newObj);
//     console.log(newObj);
//     return newObj;
// }
//
//
// let obj = {
//     num: 1,
//     test: [],
//     data: {
//         val: 4,
//         info: {
//             isRight: true,
//             random: 66
//         }
//     }
// }
//
//
// stringifyNumbers(obj) // Expected output below
//
//
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

function collectStrings(obj) {
    const strings = [];
    function helper(obj) {
        const arr = Object.values(obj);
        if (!arr.length) return strings;
        if (typeof arr[0] === 'string') {
            strings.push(arr[0]);
            helper(arr.slice(1));
        } else {
            helper(arr[0]);
        }
    }
    helper(obj);
    console.log(strings)
    return strings;
}

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])
