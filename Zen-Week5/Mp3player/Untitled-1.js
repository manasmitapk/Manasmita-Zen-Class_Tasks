
getData(endPoint)
.then(data =>{
    data.forEach(d =>{
        console.log(d.url);
        let song = document.createElement("div");
        let audio = document.createElement("audio");
        audio.setAttribute("src",d.url);
        audio.controls = true;
        let name = document.createElement("p");
        name.innerText = d.name;
        song.append(audio,name);
        songs.appendChild(song);
    })
})

btnSubmit.addEventListener('click',function(e){
    e.preventDefault();
    let nameVal = document.querySelector('#name').value;
    let urlVal = document.querySelector('#url').value;

    let data = {
        name: nameVal,
        url: urlVal
    }

    
    postData(endPoint,data)
    .then(async (data) => {
        let song = document.createElement("div");
        let audio = document.createElement("audio");
        audio.setAttribute("src",data.url);
        let name = document.createElement("p");
        name.innerText = data.name;
        song.append(audio,name);
        songs.appendChild(song);
    });
});


async function postData(url = '', data = {}) {
    
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache', 
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }

async function getData(url){
    const response = await(await fetch(url)).json();
    return response;
}
  