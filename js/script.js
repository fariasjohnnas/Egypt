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
    const horusContent = document.getElementById('horus-content');
    horusContent.innerHTML = '<b>Horus:</b> Symbol of order, protection, and divine kingship, representing the legitimacy of the pharaoh\'s rule.';
  });

  document.getElementById("ramses").addEventListener('click', () => {
    const horusContent = document.getElementById('horus-content');
    horusContent.innerHTML = '<b>Pharaoh Ramses:</b> Mediator between order and chaos, ensuring cosmic balance (Ma’at) and the prosperity of the kingdom.';
  });

  document.getElementById("seth").addEventListener('click', () => {
    const horusContent = document.getElementById('horus-content');
    horusContent.innerHTML = '<b>Seth:</b> Represents chaos and destruction but also serves as a protector of Egypt against external threats.';
  });

  document.getElementById("horus").addEventListener('click', () => {
    const horusContent = document.getElementById('horus-content');
    horusContent.innerHTML = '<b>Horus:</b> Symbol of order, protection, and divine kingship, representing the legitimacy of the pharaoh\'s rule.';
  });

  document.getElementById("horus").addEventListener('click', () => {
    const horusContent = document.getElementById('horus-content');
    horusContent.innerHTML = '<b>Horus:</b> Symbol of order, protection, and divine kingship, representing the legitimacy of the pharaoh\'s rule.';
  });

  document.getElementById("horus").addEventListener('click', () => {
    const horusContent = document.getElementById('horus-content');
    horusContent.innerHTML = '<b>Horus:</b> Symbol of order, protection, and divine kingship, representing the legitimacy of the pharaoh\'s rule.';
  });

  document.getElementById("horus").addEventListener('click', () => {
    const horusContent = document.getElementById('horus-content');
    horusContent.innerHTML = '<b>Horus:</b> Symbol of order, protection, and divine kingship, representing the legitimacy of the pharaoh\'s rule.';
  });

  document.getElementById("horus").addEventListener('click', () => {
    const horusContent = document.getElementById('horus-content');
    horusContent.innerHTML = '<b>Horus:</b> Symbol of order, protection, and divine kingship, representing the legitimacy of the pharaoh\'s rule.';
  });

});





