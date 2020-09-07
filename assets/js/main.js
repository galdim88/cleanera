// Вызов бокового меню
var menuBtn = document.querySelectorAll(".sidenavActive");
for (let i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", function() {
        var sidenav = document.querySelector(".sidenav");
        sidenav.classList.toggle("sidenav_active");
    });
}
var sidenavClose = document.querySelectorAll(".sidenav__close");
for (let i = 0; i < sidenavClose.length; i++) {
    sidenavClose[i].addEventListener("click", function() {
        var sidenav = document.querySelector(".sidenav");
        sidenav.classList.remove("sidenav_active");
    });
}
