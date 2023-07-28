document.addEventListener("DOMContentLoaded", function() {
    var burgerMenu = document.querySelector(".burger-menu");
    var navMenu = document.querySelector(".nav-menu");
  
    burgerMenu.addEventListener("click", function() {
      this.classList.toggle("active");
      navMenu.classList.toggle("active");
    });
  });
  