// body
let main = document.body;

main.setAttribute('style','display: flex;justify-content: center;')

// main container
let container = document.createElement('div')


// inner container
let container1 = document.createElement('div')
container1.setAttribute('style','width:600px;margin:50px;color:white;')


// display
let display = document.createElement('input')
display.setAttribute('type','text')
display.setAttribute('id','result')
display.setAttribute('style','width:400px;margin-left:100px;height:50px;font-size:30px;')

let div_2 = document.createElement('div')
div_2.setAttribute('style','margin-top:60px;')

// generate button
let generate_button = document.createElement("button")
generate_button.setAttribute('style','width:80px;height:40px;background-color:#007bff;margin-left:260px;')
generate_button.innerText = "Generate"
generate_button.setAttribute('onclick','generate()')
div_2.appendChild(generate_button)

// constraints

let constraints = document.createElement('div')
constraints.setAttribute('style','margin-top:100px;')




container1.append(display,div_2,constraints)
container.appendChild(container1)
main.append(container)


// main js

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function checker(num){
    let numArr = String(num).split("")
    let digits = ['0','1','2','3','4','5','6','7','8','9']
    
    for(i of digits){
        if(numArr.filter((data)=>data==i).length>1){
            return false
        }else{
            
        }
    }
    return true
}
function displayresult(data){
    document.getElementById("result").value = data
}


function generate(){
    let min = 10000000;
    let max = 99999999;
    let result = getRandomInt(min,max);
    
    while(!checker(result)){
        result = getRandomInt(min,max);
    }
    displayresult(result);
}