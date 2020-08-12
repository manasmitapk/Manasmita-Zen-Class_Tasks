var fieldNames = ['First Name', 'Last Name', 'Address', 'Pin Code', 'Gender', 'Choice of Food', 'State', 'Country'];
var checkBox = ['Choice of Food'];
var choiceBox = ['Gender'];
var multiValue = {
    'Gender': ['Male', 'Female'],
    'Choice of Food': ['Biriyani', 'Fried Rice', 'Chowmin', 'Pulao', 'Kichdi']
};

let main= document.createElement('form');
main.setAttribute('class','main');

for(var index=0; index<fieldNames.length; index++) {
    if (choiceBox.indexOf(fieldNames[index]) != -1) {
        addChoiceBox(fieldNames[index], multiValue[fieldNames[index]]);
    } else if (checkBox.indexOf(fieldNames[index]) != -1) {
        addCheckBox(fieldNames[index], multiValue[fieldNames[index]]);
    } else {
        addText(fieldNames[index]);
    }
}

function addChoiceBox(fieldDisplayName, choiceValues) {
    let genderDiv = document.createElement('div');
    genderDiv.setAttribute('id','genderDiv');
    let gender= document.createElement('label');
    gender.setAttribute('for','gender');
    gender.innerText='Gender'
    genderDiv.appendChild(gender);

    let genderInputDiv = document.createElement('div');
    genderInputDiv.setAttribute('id','genderInputDiv');

    for (let index=0; index<choiceValues.length; index++) {
        let fieldName = choiceValues[index].toLowerCase();
        let choiceInput= document.createElement('input');
        choiceInput.name='gender';
        choiceInput.id=fieldName;
        choiceInput.value=choiceValues[index];
        choiceInput.type='radio';
        genderInputDiv.appendChild(choiceInput);

        let maleLabel= document.createElement('label');
        maleLabel.setAttribute('for','gender');
        maleLabel.innerText=choiceValues[index]
        genderInputDiv.appendChild(maleLabel);
    }
    genderDiv.appendChild(genderInputDiv);
    main.appendChild(genderDiv);
}

function addCheckBox(fieldDisplayName, checkboxValues) {
    let fooditemDiv = document.createElement('div');
    fooditemDiv.setAttribute('id','fooditemDiv');
    let choiceOfFood= document.createElement('label');
    choiceOfFood.setAttribute('for','choiceOfFood1');
    choiceOfFood.innerText=fieldDisplayName;
    fooditemDiv.appendChild(choiceOfFood);

    let fooditemChoiceDiv = document.createElement('div');
    fooditemChoiceDiv.setAttribute('id', 'fooditemChoiceDiv');

    for (var index=0; index<checkboxValues.length; index++) {
        let fieldId = checkboxValues[index].replace(' ', '').toLowerCase();
        
        let fooditem1Div = document.createElement('div');
        fooditem1Div.setAttribute('id', fieldId + 'Div');

        let fooditem1Input= document.createElement('input');
        fooditem1Input.name=fieldId;
        fooditem1Input.id=fieldId;
        fooditem1Input.value=fieldId;
        fooditem1Input.type='checkbox';
        fooditem1Div.appendChild(fooditem1Input);
        
        let fooditem1Label= document.createElement('label');
        fooditem1Label.setAttribute('for','choiceOfFood1');
        fooditem1Label.innerText=checkboxValues[index]
        fooditem1Div.appendChild(fooditem1Label);
        fooditemChoiceDiv.appendChild(fooditem1Div);
    }

    fooditemDiv.appendChild(fooditemChoiceDiv);
    main.appendChild(fooditemDiv);
}

function addText(fieldDisplayName) {
    let fieldName = fieldDisplayName.replace(' ', '').toLowerCase();
    let firstNameDiv = document.createElement('div');
    firstNameDiv.setAttribute('id', fieldName + 'Div');
    let firstName= document.createElement('label');
    firstName.setAttribute('for', fieldName);
    firstName.innerText=fieldDisplayName
    firstNameDiv.appendChild(firstName)
    let firstNameInput= document.createElement('input');
    firstNameInput.Type= 'Text';
    firstNameInput.name= fieldName;
    firstNameInput.placeholder= fieldDisplayName;
    firstNameInput.id = fieldName;
    firstNameDiv.appendChild(firstNameInput);
    main.appendChild(firstNameDiv);
}

let submitBtn= document.createElement('input');
submitBtn.type='submit';
submitBtn.setAttribute('id','submit-b');
submitBtn.setAttribute('onclick','return submitData()');
main.appendChild(submitBtn);

document.body.appendChild(main);

let outputDiv = document.createElement('div');
document.body.appendChild(outputDiv);

function showOrder(selectedFoodItems) {
    let maintable = document.createElement('table');
    maintable.setAttribute('id', 'maintable');

    let userInputs = {};

    for(var index=0; index<fieldNames.length; index++) {
        
        let row1= document.createElement('tr');
        row1.setAttribute('class','row');

        let fieldId = fieldNames[index].replace(' ', '').toLowerCase();

        if (choiceBox.indexOf(fieldNames[index]) != -1) {
            let allOptons = multiValue[fieldNames[index]];
            let selectedOption = '';
            for (let optionIndex=0; optionIndex < allOptons.length; optionIndex++) {
                let optionId = allOptons[optionIndex].replace(' ', '').toLowerCase();
                if (document.getElementById(optionId).checked) {
                    selectedOption = allOptons[optionIndex];
                    break;
                }
            }
            userInputs[fieldNames[index]] = selectedOption;
        } else if (checkBox.indexOf(fieldNames[index]) != -1) {
            userInputs[fieldNames[index]] = selectedFoodItems.toString();
        } else {
           
            userInputs[fieldNames[index]] = document.getElementById(fieldId).value;
        }
    }

    let tableHeaders = Object.keys(userInputs);

    
    let table = document.getElementById('result_table');
    let keys=Object.keys(userInputs);
    if (!table) {
        table = document.createElement("table");
        table.id = 'result_table';
        let header = document.createElement("tr");
        
        for(let key of keys){
            let th=document.createElement("th");
            th.appendChild(document.createTextNode(key));
            header.appendChild(th);
        }
        table.appendChild(header);
    }

        let tr = document.createElement("tr");
        for(let key of keys){
            let td = document.createElement("td");
            let content=userInputs[key] ||''
            td.appendChild(document.createTextNode(content));
            tr.appendChild(td);
        }
        table.appendChild(tr);
    
    outputDiv.appendChild(table);
}

function getSelectedFoodItems() {
    let foodValueIds = multiValue['Choice of Food'];
    let selectedFoodItems = [];
    for (var index=0; index<foodValueIds.length; index++) {
        let id = foodValueIds[index].replace(' ', '').toLowerCase();
        if (document.getElementById(id).checked) {
            selectedFoodItems.push(foodValueIds[index]);
        }   
    }
    return selectedFoodItems;
}

function submitData(){
    let selectedFoodItems = getSelectedFoodItems();
    if (selectedFoodItems.length < 2) {
        alert("Please select at least 2 food items.");
        return false;
    } else {
        showOrder(selectedFoodItems);
        return false;
    }
}