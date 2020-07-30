var arr = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = function countPositivesSumNegatives(arr) {
    let myArr = [];
    let sum_p = 0;
    let sum_n = 0;
 for(i of arr){
     if(i<0){
        sum_n+=i;
     }else{
        sum_p+=i;
     }
 }
 myArr.push(sum_p)
 myArr.push(sum_n)
 return myArr;
}
console.log(ar2(arr));