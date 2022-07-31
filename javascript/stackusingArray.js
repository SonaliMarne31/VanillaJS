let arr = [];
let SIZE = 5;

function pushInToStack(arr, n) {

    if(arr.length == SIZE) {
        console.log('Stack is full');
    } else {
        arr[arr.length] = n;
    }
}

function popFromStack(arr) {
    arr.pop();
}


pushInToStack(arr, 1);
pushInToStack(arr, 2);
pushInToStack(arr, 3);
pushInToStack(arr, 4);
pushInToStack(arr, 5);
console.log(arr);
pushInToStack(arr, 6); // it should be full

console.log(arr);

popFromStack(arr);
popFromStack(arr);
console.log(arr);
pushInToStack(arr, 6);

console.log(arr);
popFromStack(arr);
console.log(arr);








