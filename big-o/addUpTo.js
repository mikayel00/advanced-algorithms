// function addUpTo(n) {
//     let total = 0;
//     for (let i = 1; i < n; ++i) {
//         total += i;
//     }
//     return total;
// }

function addUpTo(n) {
    return n * (n + 1) / 2;
}

let time1 = performance.now();
addUpTo(1_000_000_000);
let time2 = performance.now();

console.log(`${(time2 - time1) / 1000} seconds`);
