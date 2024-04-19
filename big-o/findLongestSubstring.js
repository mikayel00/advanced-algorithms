function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;

    for (let i = 0; i < str.length; i++) {
        let char = str[i];
        if (seen[char]) {
            start = Math.max(start, seen[char]);
        }
        // index - beginning of substring + 1 (to include current in count)
        longest = Math.max(longest, i - start + 1);
        // store the index of the next char to not double count
        seen[char] = i + 1;
    }
    return longest;
}

// console.log(findLongestSubstring('thecatinthehat'));
// console.log(findLongestSubstring('bbbbbb'));

function naiveSearch(long, short) {
    let counter = 0;
    for (let i = 0; i < long.length; ++i) {
        for (let j = 0; j < short.length; ++j) {
            if (short[j] !== long[j + i]) break;
            if (j === short.length - 1) ++counter;
        }
    }
    return counter;
}

console.log(naiveSearch('lorie loled', 'lol'));

