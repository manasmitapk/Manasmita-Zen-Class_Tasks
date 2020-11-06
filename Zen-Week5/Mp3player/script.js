let body = document.body;
let endPoint = "https://5f3f63a844212d0016feca2e.mockapi.io/songs";

let container = document.createElement("div");
container.classList.add("container");
body.appendChild(container);

let form = document.createElement("form");
let nameInput = document.createElement("input");
nameInput.setAttribute("type","text");
nameInput.setAttribute("name","name");
nameInput.setAttribute("id","name");
nameInput.required = true;
let urlInput = document.createElement("input");
urlInput.setAttribute("type","text");
urlInput.setAttribute("name","url");
urlInput.setAttribute("id","url");
urlInput.required = true;
let btnSubmit = document.createElement("input");
btnSubmit.setAttribute("type","submit");
form.append(nameInput,urlInput,btnSubmit);
container.appendChild(form);

let songs = document.createElement("div");
songs.classList.add("songs");
container.appendChild(songs);
