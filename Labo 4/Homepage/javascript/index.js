// scripts/main.js
document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const slides = document.querySelectorAll('.slides img');
  let currentSlide = 0;

  // Navigatiemenu toggle
  navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
  });

  // Slideshow
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      if (i === index) {
        slide.classList.add('active');
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }

  setInterval(nextSlide, 3000); // Verander elke 3 seconden
  showSlide(currentSlide);
});
document.addEventListener("DOMContentLoaded", function () {
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slides img");
    
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    // Start de slideshow
    showSlide(currentSlide);
    setInterval(nextSlide, 3000); // Verander afbeelding elke 3 seconden
  });
  

