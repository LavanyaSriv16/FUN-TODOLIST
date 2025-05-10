let btn = document.querySelector("button"); 
let inp = document.querySelector("input"); 
let ul = document.querySelector("ul"); 
let h1 = document.querySelector("h1"); 

btn.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = inp.value;
    ul.appendChild(li); 
    delbtn = document.createElement("button"); 
    delbtn.innerText = "Delete"; 
    delbtn.classList.add("Delete"); 
    li.appendChild(delbtn); 
    inp.value = ""; 
inp.style.backgroundColor= getrandomColor(); 
h1.style.color = getrandomColor(); 
li.style.color = getrandomColor(); 
});

ul.addEventListener("click",function(event){
    if(event.target.tagName === "BUTTON"){
        event.target.parentElement.remove();
        console.log("deleted");
    }
});

function getrandomColor() {
    let red, green, blue;  

    do {
        red = Math.floor(Math.random() * 255);
        green = Math.floor(Math.random() * 255);
        blue = Math.floor(Math.random() * 255);
    } while (red === 0 && green === 0 && blue === 0);

    let color = `rgb(${red},${green},${blue})`;
    return color;
}
