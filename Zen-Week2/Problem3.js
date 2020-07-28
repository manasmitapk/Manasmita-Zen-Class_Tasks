var object = {name: "ISRO", age: 35, role: "Scientist"};

function convertListToObject(obj) {
    let myArr = [];
    for(i in object){
        myArr.push([i,object[i]]);
    }
    return(myArr);
}
console.log(convertListToObject(object));