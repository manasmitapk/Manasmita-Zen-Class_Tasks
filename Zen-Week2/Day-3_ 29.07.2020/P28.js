function findMax(ar)
{
// your code here
let myNum=ar[0];
for(let i = 1; i<ar.length ; i++){
    if (ar[i]>myNum){
    myNum= ar[i];
     }
    }
    return myNum;
}
var ar = [-5, 10, -3, 12, -9, 5, 90, 0, 1];
var max = findMax(ar);
console.log("Max: ", max);