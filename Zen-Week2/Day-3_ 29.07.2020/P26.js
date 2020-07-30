function getPositives(ar)
{
 // your code here
 let myArr = [];
 for(i of arr){
    if(i>0){
    myArr.push(i);
    }
 }
 return myArr;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var ar2 = getPositives(ar);
console.log(ar2);