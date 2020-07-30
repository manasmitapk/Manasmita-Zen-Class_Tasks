var obj = {
    mykey: "value"
   };
   function addProperty(obj, key){
    // your code here
    obj[key]= true;

    return obj;
   }
   var Property= addProperty(obj, "mykey");
   console.log(Property);