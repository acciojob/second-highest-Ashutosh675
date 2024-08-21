//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity; // If the array has less than 2 elements, return -Infinity
    }

    let max = -Infinity;
    let secondMax = -Infinity;

    // First pass to find the maximum element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    // Second pass to find the second maximum element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > secondMax && arr[i] < max) {
            secondMax = arr[i];
        }
    }

    return secondMax === -Infinity ? -Infinity : secondMax;
}
