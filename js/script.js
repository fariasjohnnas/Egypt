document.addEventListener("DOMContentLoaded", () => {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  const carouselImages = document.querySelector('.carousel-images');

  let currentIndex = 0;

  // Navegar para a imagem anterior
  prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = carouselImages.children.length - 1; // Volta para a última imagem
    }
    updateCarousel();
  });

  // Navegar para a próxima imagem
  nextButton.addEventListener('click', () => {
    if (currentIndex < carouselImages.children.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0; // Volta para a primeira imagem
    }
    updateCarousel();
  });

  // Atualiza a posição do carrossel
  function updateCarousel() {
    const imageWidth = carouselImages.parentElement.clientWidth; // Usa a largura do container
    carouselImages.style.transform = `translateX(-${currentIndex * imageWidth}px)`; // Apenas desloca horizontalmente
  }


  document.getElementById("horus").addEventListener('click', () => {
    const horusContent = document.getElementById('ramses-content');
    horusContent.innerHTML = '<b>Horus:</b> Symbol of order, protection, and divine kingship, representing the legitimacy of the pharaoh\'s rule.';
  });

  document.getElementById("ramses").addEventListener('click', () => {
    const horusContent = document.getElementById('ramses-content');
    horusContent.innerHTML = '<b>Pharaoh Ramses:</b> Mediator between order and chaos, ensuring cosmic balance (Ma’at) and the prosperity of the kingdom.';
  });

  document.getElementById("seth").addEventListener('click', () => {
    const horusContent = document.getElementById('ramses-content');
    horusContent.innerHTML = '<b>Seth:</b> Represents chaos and destruction but also serves as a protector of Egypt against external threats.';
  });

  document.getElementById("jackal").addEventListener('click', () => {
    const horusContent = document.getElementById('jackal-content');
    horusContent.innerHTML = '<b>Jackal Symbolism:</b> The jackal, associated with cemeteries, symbolizes Anubis\'s role as the guardian of tombs and protector of the dead.';
  });

  document.getElementById("dead").addEventListener('click', () => {
    const horusContent = document.getElementById('jackal-content');
    horusContent.innerHTML = '<b>Protector of the Dead:</b> Anubis guarded tombs and protected mummified bodies from harm and desecration.';
  });

  document.getElementById("crown").addEventListener('click', () => {
    const horusContent = document.getElementById('falcon-content');
    horusContent.innerHTML = '<b>The Double Crown (Pschent):</b> The double crown symbolizes the unification of Upper Egypt (white crown) and Lower Egypt (red crown), representing the pharaoh’s authority over the entire kingdom.';
  });

  document.getElementById("snake").addEventListener('click', () => {
    const horusContent = document.getElementById('falcon-content');
    horusContent.innerHTML = '<b>The Snake (Uraeus):</b> The snake represents the goddess Wadjet, a protector of Lower Egypt. Placed on the crown, it symbolizes divine protection, power, and the pharaoh’s ability to defeat enemies.';
  });

  document.getElementById("falcon").addEventListener('click', () => {
    const horusContent = document.getElementById('falcon-content');
    horusContent.innerHTML = '<b>The Falcon (Horus):</b> The falcon represents the god Horus, protector of the pharaoh. It symbolizes sharp vision, strength, and divine kingship, linking the ruler to the heavens and the gods.';
  });

});





