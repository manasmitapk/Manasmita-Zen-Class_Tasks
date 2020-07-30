let arr = ["manasmita","susi","tanya","vanya"];

(function(){
    function isPalindrome(str){
        let pal = str.split("").reverse().join("")
        if(pal===str){
            return true;
        }else{
            return false;
        }
    }
 let newArr = arr.filter((data)=>isPalindrome(data))
console.log(newArr)
})();