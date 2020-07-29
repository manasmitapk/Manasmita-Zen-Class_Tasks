
function getLastElement(array){
    if(array.length === 0)
    return -1;
    else
    return(array[array.length-1]);
   }
   var lastElement = getLastElement([1, 2, 3, 4]);
   console.log(lastElement);
   