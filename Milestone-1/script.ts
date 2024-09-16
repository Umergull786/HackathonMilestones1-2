const button_toggle = document.getElementById("toggle-button") as HTMLButtonElement
const skiils = document.getElementById("skills")as HTMLElement

button_toggle.addEventListener("click" , ()=>{
    if(skiils.style.display === "none"){
        skiils.style.display = "block"
    }
    else{
        skiils.style.display = "none"
    }
});

