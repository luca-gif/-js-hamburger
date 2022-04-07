let hamburger = document.querySelector(".hamburger-menu");

let itemOpen = document.querySelector(".fa-bars");
let itemClose = document.querySelector(".fa-times");

/* Apro il menù */

itemOpen.addEventListener("click", function() {
    //cambio il display
    hamburger.classList.add("active");
    hamburger.style.cssText =
        "background-color:orange;border:8px double black;padding:20px;padding:40px";
});

/* Chiudo il menù */

itemClose.addEventListener("click", function() {
    //cambio il display
    hamburger.classList.remove("active");
});