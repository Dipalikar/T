
let arr=["Are you sure?","Really sure?","Think again!","Last chance!","Surely Not!","You might regret this!","Give it another thought!","Are you absolutely certain?","This could be a mistake!","Have a heart!","Don't be so cold!","Change of heart?","Wouldn't you reconsider?","Is that your final answer","You're breaking my heart :("];

document.querySelector(".yes-btn").addEventListener("click",()=>{
    document.querySelector(`.no-btn`).style.display = "none";
    document.querySelector(`h3`).textContent="OOOHHH YYEEAAAHHH!!!!";
    document.querySelector(`.yes-btn`).style.display = "none";
    document.querySelector('.last').style.display="none";
    document.querySelector("img").attributes["src"].value= `https://media1.tenor.com/m/1gf_Jz8WYH0AAAAC/sami-en-dina-sami-dina.gif`;
    }
);

let i=0;let j=11;
document.querySelector(`.no-btn`).addEventListener(`click`, () => {    
    document.querySelector(".no-btn").textContent=arr[i++];  
    if(i===14){
        document.querySelector(`.no-btn`).style.display = "none";
        document.querySelector('.last').style.display="flex";
        document.querySelector('.last').textContent="You have no other choice 😒 ";     
     }
});




