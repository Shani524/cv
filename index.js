let count=0;
let countEl=document.getElementById("count-el");

let prePasenger=document.getElementById("pre-pasenger");

function increment(){
    count=count+1;
    countEl.innerText=count;
}

function save(){
    console.log(count);
    prePasenger.innerText+=count+" - ";
}


