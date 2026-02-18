let url = " http://universities.hipolabs.com/search?country=India&name=";
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let input = document.querySelector("input");

btn.addEventListener("click", async ()=>{
    let state = input.value ;
    let colleges = await getColleges(state);
    if(colleges)
        showColleges(colleges);
    else
    {
        ul.innerText = " College not found ";
        console.log("College not found");
    }
       
});

function showColleges(colleges)
{
    ul.innerText = " ";
    for(let college of colleges)
    {
        let li = document.createElement("li");
        li.innerText = college.name ;
        ul.appendChild(li);    
    }
}

async function getColleges(state)
{
    console.log(state);
    try{
        let res = await axios.get(url+state);
        console.log(res);
        if(res.data.length != 0)
            return res.data;          
    }catch(e)
    {
        console.log("College not found in given state...");
    }
}
