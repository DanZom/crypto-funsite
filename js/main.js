//Dotyczy responsywnego menu , hamburger logo
var mainNav = document.getElementById("js-menu");
var navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
    mainNav.classList.toggle("active");
});

//Dotyczy przycisku UP
function scrollFunction() {
    if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};
window.onscroll = function() {
    scrollFunction()
};