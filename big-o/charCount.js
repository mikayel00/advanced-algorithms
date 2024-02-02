// function charCount(str) {         ////// NOT REFACTORED
//     const obj = {};
//     for (let i = 0; i < str.length; ++i) {
//         let char = str[i].toLowerCase();
//         if (/[a-z0-9]/.test(char)) {
//             if (obj[char]) {
//                 ++obj[char];
//             } else {
//                 obj[char] = 1;
//             }
//         }
//     }
//     return obj;
// }


function charCount(str) {      /////// MORE FASTER
    const obj = {};
    for (let char of str) {
        if (isAlphanumeric(char)) {
            char = char.toLowerCase();
            obj[char] = ++obj[char] || 1;
        }
    }
    return obj;
}

function isAlphanumeric(char) {
    let code = char.charCodeAt(0);
    return !(!(code > 47 && code < 58) &&
        !(code > 64 && code < 91) &&
        !(code > 96 && code < 123));
}

console.log(charCount('Hello World!!!'))
