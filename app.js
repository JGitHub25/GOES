/*NAV SIDEBAR - MENU DESKTOP*/
let sidemenu = document.getElementById("mySidenav");
function openNav() {
  sidemenu.classList.add("sidenav-show");
}

let btnMenu = document.getElementById("hamburguesa");
btnMenu.addEventListener("click", openNav);

function closeNav() {
  sidemenu.classList.remove("sidenav-show");
}

let closeMenu = document.getElementById("closebtn");
closeMenu.addEventListener("click", closeNav);

let linksNav = document.querySelectorAll(".nav");
linksNav.forEach(function (elemento) {
  elemento.addEventListener("click", closeNav);
});

/*CAMBIAR IDIOMAS TEXTO - PORTRAIT */
let textEsp = document.querySelector(".about-esp");
let textEng = document.querySelector(".about-eng");

function mostrarEng() {
  textEng.style.display = "block";
  textEsp.style.display = "none";
}

function mostrarEsp() {
  textEng.style.display = "none";
  textEsp.style.display = "block";
}

let esp = document.querySelector("p.esp");
let eng = document.querySelector("p.eng");

eng.addEventListener("click", mostrarEng);
esp.addEventListener("click", mostrarEsp);

/*STICKY NAVBAR----(ALTERNATIVA DE NAVEGACIÓN)*/
// When the user scrolls the page, execute myFunction
// window.onscroll = function () {
//   myFunction();
// };

// let navbar = document.getElementById("navbar");

// let sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky");
//   } else {
//     navbar.classList.remove("sticky");
//   }
// }
