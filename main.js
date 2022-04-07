let hamburger = document.querySelector(".hamburger-menu");

let itemOpen = document.querySelector(".fa-bars");
let itemClose = document.querySelector(".fa-times");

/* Apro il menù */

itemOpen.addEventListener("click", function() {
    //cambio il display
    hamburger.classList.add("active");
});

/* Chiudo il menù */

itemClose.addEventListener("click", function() {
    //cambio il display
    hamburger.classList.remove("active");
});