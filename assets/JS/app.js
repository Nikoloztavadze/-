function toggleMenu() {
    var menu = document.getElementById('menu');
    var header = document.getElementById('header');
    menu.classList.toggle('active');
    header.classList.toggle('header-expanded');
    document.querySelector('.burger-menu-icon').classList.toggle('active');
  }

  const accordionHeader = document.querySelector(".accordion-header");
  const accordionBody = document.querySelector(".accordion-body");
  
  accordionHeader.addEventListener("click", () => {
      accordionBody.classList.toggle("visible");
  });