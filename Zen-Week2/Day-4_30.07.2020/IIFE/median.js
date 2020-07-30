let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];

(function(){
    let medianArr = arr1.concat(arr2);
    let m = medianArr.length;
    console.log(medianArr[m/2-1],medianArr[m/2]);
})(); 