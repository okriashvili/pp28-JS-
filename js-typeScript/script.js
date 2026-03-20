function sortAray(arr) {
    
    if (arr.length === 0) return [];

    const kept = [];
    let maxL = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= maxL) {
            kept.push(arr[i]);
            maxL = arr[i];
        }
    }
    return kept;
}

// out task: exercise and undestand the algorithm

numArr = [1, 2, 4, 5, 7, 3, 8, 16, 13, 18, 10, 11];
console.log(sortAray(numArr));
