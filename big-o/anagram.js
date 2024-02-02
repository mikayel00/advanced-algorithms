function checkAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const a = {};
    const b = {};

    for (let i = 0; i < str1.length; ++i) {
        a[str1[i]] = ++a[str1[i]] || 1;
        b[str2[i]] = ++b[str2[i]] || 1;
    }

    for (let key in a) {
        if (!b[key]) {
            return false;
        }
        if (b[key] !== a[key]) {
            return false;
        }
    }
    return true;
}

console.log(checkAnagram('anagram', 'mrgaaan'))
