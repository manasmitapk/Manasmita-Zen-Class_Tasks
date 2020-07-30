let arr = [12,42,33,61,5];

let rotate = function(arr, k){
    let myArr = arr.splice(0, k);
    return arr.concat(myArr);
}
console.log(rotate(arr,3));