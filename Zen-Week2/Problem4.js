var arr = ["GUVI", "I", "am", "a geek"];
function transformFirstAndLast(arr) {
    let myArr = arr[0];

    let newObject = {};
    newObject[myArr] = arr[arr.length-1];
 return newObject;
}

console.log(transformFirstAndLast(arr));