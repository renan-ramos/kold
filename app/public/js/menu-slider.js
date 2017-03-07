let veri = 1;
let trigger = document.getElementById('menu-trigger').addEventListener("click",function(){
    let menu = document.getElementById('menu-hide');
    if (veri == 1) {
        menu.style.left = "0px";
        veri = 0;
    } else{
        menu.style.left = "-100%";
        veri = 1;
    }
})