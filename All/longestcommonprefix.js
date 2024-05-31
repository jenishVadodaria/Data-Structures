let strs = ['carrot', 'carboard', 'carrier', 'carryon']


// function longestCommonPrefix(strs) {

//     let sortstr = strs.sort()

//     let first = sortstr[0]

//     let last = sortstr[sortstr.length - 1]

//     let result = ""
//     for (let i = 0; i < first.length; i++) {
//         if (first[i] !== last[i]) {
//             break
//         }
//         result = result + first[i]

//     }

//     if (result.length > 0) {
//         return result
//     }
//     else {
//         return "Not Found"
//     }

// }

// ["flower","flow","flight"]
function longestCommonPrefix(strs) {
    if (strs.length === 0) return ""

    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1)
        }
    }
    return prefix
}

console.log(longestCommonPrefix(strs))