/* Linear time O(n)
Algorithms with linear time complexity (O(n)) have running times that are 
directly proportional to the size (n) of the input. */


function createPairs(arr) {
    let min = arr[0], ticks = 0, ticks2 = 0;
    for (let i = 0; i < arr.length; i++) {
        ticks++;
        for(let j = i + 1; j < arr.length; j++) {
            ticks2++;
            //console.log(arr[i] + ", " +  arr[j] );
        }
    }
    return {
        results: min,
        ticks: ticks, 
        ticks2: ticks2
    }
}

/* function doubleArrayValues(array) {
    let min = array[0], ticks = 1;
    for (let i = 1; i < array.length; i++) {
        ticks++;
        array[i] *= 2;
    }
    return {
        results: min,
        ticks: ticks, 
        array
    }
} */

console.log(createPairs([1,2,3]));
console.log(createPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(createPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 08, 99, 100]));