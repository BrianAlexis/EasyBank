// const body = document.getElementById("body");
// const btnHamburguer = document.getElementById("btnHamburguer");
// const header = document.getElementById("header");
// const overlay = document.querySelector(".overlay");
// const headerMenu = document.querySelector (".header__menu");
const fadeElements = document.querySelectorAll(".has-fade");
const topBtn = document.getElementById("topBtn");
const ulMenu = document.getElementById("ulMenu");


// HAMBURGUER

const activeMenu = () => {
    const openMenuButton = document.getElementById('open-menu-button')
    const closeMenuButton = document.getElementById('close-menu-button')
    const mainMenu = document.getElementById('main-menu')
    
    if (openMenuButton && mainMenu && closeMenuButton) {
    openMenuButton.addEventListener('click', () => {
        mainMenu.classList.add('active')
    })
    closeMenuButton.addEventListener('click', () => {
        mainMenu.classList.remove('active')
    })

    ulMenu.addEventListener('click', ()=>{
        mainMenu.classList.remove("active")
    })
    }
}
activeMenu()

//Remover overlay despues que el user presiono un link 
// headerMenu.addEventListener("click", function(){
    
//     if(header.classList.contains("open")) {
//         fadeElements.forEach(function(element){
//             element.classList.remove("fade-in");
//             element.classList.add("fade-out");
//         });
//         body.classList.remove("noScroll")
//         header.classList.remove("open")
//     };
// })


// BTN GO TO TOP

// Cuando el user scrollee X px para abajo aparece el boton
function scrollFunction(){
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
}

window.onscroll = function() {
    scrollFunction()
};

topBtn.classList.add(".btnTop");

// Cuando el user clickea el button, lo manda al inicio

function toTop(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}