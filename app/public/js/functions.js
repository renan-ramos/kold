//
let btnBusca = document.querySelector(".btn-show");
let inputBusca = document.querySelector(".input-hide");
let aux = 0;

btnBusca.addEventListener("click", function(){
    if(aux == 1) {
        inputBusca.style.visibility = "hidden";
        inputBusca.style.opacity = "0";
        aux = 0;
    }
    else {
        inputBusca.style.visibility = "visible";
        inputBusca.style.opacity = "1";
        aux = 1;
    }    
});

// Menu Slider
let menu    = document.querySelector('.menu-hide');
let overlay = document.querySelector(".overlay");
let trigger = document.querySelector('.menu-trigger');

overlay.addEventListener("click", function(){
    overlay.style.display = "none";
    menu.style.left = "-100%";
});

trigger.addEventListener("click",function(){
    overlay.style.display = "block";
    menu.style.left = "0";
});