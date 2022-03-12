// // named functions
//
// function name() {
//     return 42;
// }
//
// // anonymous functions
// // function expression
// const name1 = function () {
//     return 42;
// }
//
// // arrow function
// const name2 = () => {
//     return 42;
// }

// range(1, 10, 2)
function range(start, stop, step = 1) {
    if (stop === undefined) {
        stop = start;
        start = 0;
    }

    const temp = [];
    let counter = start;

    while (temp.length < (stop - start) / step) {
        temp.push(counter);
        counter += step;
    }

    return temp;
}

console.log(range(1, 10, 2));
console.log(range(1, 10));
console.log(range(10));