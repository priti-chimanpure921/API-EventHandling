let url = "https://catfact.ninja/fact";
let dogURL = "https://dog.ceo/api/breeds/image/random";

let btn = document.querySelector("#cat");
let btn1 = document.querySelector("#dog");
let ul = document.querySelector(".fact");
let div = document.querySelector("div");
let img = document.querySelector("img");

async function getImage() {
    try{
        let res1 = await axios.get(dogURL);
        console.log(res1.data.message);
        img.setAttribute("src", res1.data.message);
    }catch(e)
    {
        console.log(e);
    }
}
async function getFacts()
{
    try{
        let res = await axios.get(url);
        console.log(res.data.fact);
        let li = document.createElement("li");
        li.innerText = res.data.fact;
        ul.appendChild(li);
    }catch(e){
        console.log(e);
        return "No fact found";
    }   
}

btn.addEventListener("click",getFacts);
btn1.addEventListener("click",getImage);


