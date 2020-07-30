
var obj = {name: "Asit"};
function removeProperty(obj, key){
    // your code here
     delete obj[key];
     return obj;
   }
   var moveProperty = removeProperty(obj,"name");
   