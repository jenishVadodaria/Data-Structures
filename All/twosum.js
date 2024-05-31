let a = [2, 6, 5, 8, 11];

let target = 19;

// function twosum(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {
//             // if (arr[i] === arr[j]) {
//             //     return
//             // }
//             if (arr[i] + arr[j] === target) {
//                 console.log("YES")
//             }

//         }
//     }
//     return "NO"
// }

function twosum(nums, target) {
    const numMap = {}; // Hash map to store elements and their indices
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.hasOwnProperty(complement)) {
            return [numMap[complement], i];
        }
        numMap[nums[i]] = i; // Store current element and its index
        console.log(numMap, nums[i]);
    }
    // If no valid pair is found, return an empty array
    return [];
}

console.log(twosum(a, target))

