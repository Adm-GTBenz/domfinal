// Menu Burger Toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Script pour le carrousel
document.addEventListener('DOMContentLoaded', () => {
    const carouselImages = document.querySelector('.carousel-images');
    const totalImages = carouselImages.children.length;
    let currentIndex = 0;
  
    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalImages;
      carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
    }, 3000); // Change toutes les 3 secondes
  });
  