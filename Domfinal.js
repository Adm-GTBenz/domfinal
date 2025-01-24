// Menu Burger Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Scroll vers une section spécifique quand on clique sur le bouton
document.getElementById('learn-more').addEventListener('click', () => {
  document.querySelector('#presentation').scrollIntoView({ behavior: 'smooth' });
});

/// Script pour le carrousel
document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;

  let index = 0;

  function moveCarousel() {
    index++;
    if (index >= totalImages) {
      carouselImages.style.transition = "none"; // Supprime la transition
      carouselImages.style.transform = "translateX(0)"; // Retour au début instantanément
      index = 0; // Reset de l'index
    } else {
      carouselImages.style.transition = "transform 1s linear"; // Remet la transition
      carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  setInterval(moveCarousel, 4000); // Défiler toutes les 4 secondes
});


document.addEventListener("DOMContentLoaded", () => {
  const carouselImages = document.querySelector(".carousel-images");
  const images = document.querySelectorAll(".carousel-images img");
  const totalImages = images.length;

  let index = 0;

  function moveCarousel() {
    index++;
    if (index >= totalImages) {
      carouselImages.style.transition = "none"; // Supprime la transition
      carouselImages.style.transform = "translateX(0)"; // Retour au début instantanément
      index = 0; // Reset de l'index
    } else {
      carouselImages.style.transition = "transform 1s linear"; // Remet la transition
      carouselImages.style.transform = `translateX(-${index * 100}%)`;
    }
  }

  setInterval(moveCarousel, 4000); // Défiler toutes les 4 secondes
});

