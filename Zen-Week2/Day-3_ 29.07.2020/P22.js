var obj = {
    mykey: "value"
   };
   function getProperty(obj, key) {
    if(obj[key]===undefined)
    return "NA";
    return obj[key];
   }

   var property = getProperty(obj, "my dmkey");
   console.log(property);