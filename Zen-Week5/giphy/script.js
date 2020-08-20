let header = document.createElement("h1");
header.innerText= "GIPHY";
document.body.append(header);

async function giphyData(){

        let data = await fetch ('https://api.giphy.com/v1/gifs/search?api_key=ynhjklB66tT9CKvnvgG50JXpV6FaXOhB&q=smiley&limit=5&offset=0&rating=g&lang=en');
        let jsonData = await data.json();
        let myarr = jsonData.data;
        console.log(myarr);

       myarr.forEach(element => {
            console.log(element.images.480w_still.url);
            
            let img = document.createElement('img');
            img.setAttribute('src',`${element.images.480w_still.url}`);
            document.body.append(img); 
        });

    }
giphyData();

