let container = document.body;
let div_1 = document.createElement("div");
div_1.setAttribute("style","width:100%;height:auto;");
div_1.setAttribute("class","card-group");
container.appendChild(div_1);


function userData() {
    var xml = new XMLHttpRequest();
    return new Promise(function(resolve, reject) {
     xml.onreadystatechange = function() {
        if (xml.readyState == 4) {
          if (xml.status >= 300) {
            reject("Error, status code = " + xml.status)
          } else {
            resolve(xml.responseText);
          }
        }
      }
      xml.open('get', 'https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json', true)
      xml.send();
    });
  }

  userData().then(data=>{
    myArr = JSON.parse(data);
    for(let i=0;i<data.length;i++){
        let div_2 = document.createElement("div");
        div_2.setAttribute("style","display:flex;padding:5px;");
        div_2.setAttribute("class","col-3");
        div_1.appendChild(div_2);

        let cardDiv = document.createElement("div");
        cardDiv.setAttribute("class","card");
        div_2.appendChild(cardDiv);

        let flag = document.createElement("img");
        flag.setAttribute("class","card-img-top");
        flag.setAttribute("src",myArr[i]["flag"]);
        flag.setAttribute("style","width:300px;height:200px;");
        cardDiv.appendChild(flag);

        let cardBody = document.createElement("div");
        cardBody.setAttribute("class","card-body");
        cardDiv.appendChild(cardBody);

        let cardHead = document.createElement("h6");
        cardHead.setAttribute("class","card-title");
        cardHead.innerText = myArr[i]["name"];
        cardBody.appendChild(cardHead);

        let capital = document.createElement("p");
        capital.setAttribute("class","card-text");
        capital.innerText = "Capital : " + myArr[i]["capital"];
        cardBody.appendChild(capital);
        
        let region = document.createElement("p");
        region.setAttribute("class","card-text");
        region.innerText = "Region : " + myArr[i]["region"];
        cardBody.appendChild(region);

        let latLng = document.createElement("p");
        latLng.setAttribute("class","card-text");
        latLng.innerText = "Latlng : " + myArr[i]["latlng"]
        cardBody.appendChild(latLng);
        
        let currency = document.createElement("p");
        currency.setAttribute("class","card-text");
        currency.innerHTML = `Currency Name: ${myArr[i]["currencies"][0]["name"]} 
        <br> Currency Code: ${myArr[i]["currencies"][0]["code"]} 
        <br> Currency Symbol: ${myArr[i]["currencies"][0]["symbol"]}`;
        cardBody.appendChild(currency);
    }
})