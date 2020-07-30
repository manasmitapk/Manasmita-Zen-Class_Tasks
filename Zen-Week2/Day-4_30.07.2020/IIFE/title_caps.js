let arr = ["manasmita","susi","tanya","vanya"];

(function(){
 let myarr = arr.map((data)=>{
     data = data[0].toUpperCase()+data.slice(1)
     return data;
    });
console.log(newarr);
})();