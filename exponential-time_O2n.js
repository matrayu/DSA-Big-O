/* Exponential time O(2^n)
Algorithms with exponential time complexity (O(2^n)) have running times that 
grow rapidly with any increase in input size.  */

function countTriangle(layers) {
    let ticks = 1;
    let count = 0; // the number of dots we've counted so far
    let layer = 0; // the current layer we're on
    let lastLayer = 1; // the number of dots we counted in the previous layer
    while (layer < layers) {
        ticks++;
        let newLayer = 0; // the number of dots we've counted so far in the current layer
        for (let i = 0; i < lastLayer; i++) {
            ticks++;
            newLayer += 2;
        }
        lastLayer = newLayer;
        count += lastLayer;
        layer++;
    }
    return {
        result: count,
        ticks: ticks
    };
}

console.log(countTriangle(2));
console.log(countTriangle(4));
console.log(countTriangle(16));
console.log(countTriangle(28));
