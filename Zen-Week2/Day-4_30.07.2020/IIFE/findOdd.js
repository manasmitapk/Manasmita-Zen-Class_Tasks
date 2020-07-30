let arr = [1,2,3,4,18,55,10,21,13,14,45];

(function(){
    let oddArr = arr.filter(data=>data%2===1);
    console.log("Odd Numbers:",oddArr);
})();