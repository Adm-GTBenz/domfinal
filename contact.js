// Sélectionner les éléments du menu burger
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

// Ajouter un événement de clic sur le burger pour ouvrir/fermer le menu
burger.addEventListener('click', () => {
  navLinks.classList.toggle('active'); // Ajouter/enlever la classe 'active' pour afficher/masquer le menu
});
