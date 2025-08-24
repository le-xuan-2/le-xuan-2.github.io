const cards = document.querySelectorAll('.project-card');
let currentIndex = 0;

function updateCarousel() {
  const total = cards.length;

  cards.forEach((card, index) => {
    card.classList.remove('center');
    card.style.order = 3; // default to back
    card.style.opacity = '0';
    card.style.filter = 'blur(3px)';
    card.style.transform = 'scale(0.9)';
  });

  const leftIndex = (currentIndex - 1 + total) % total;
  const rightIndex = (currentIndex + 1) % total;

  // Left card
  cards[leftIndex].style.order = 1;
  cards[leftIndex].style.opacity = '0.5';

  // Center card
  cards[currentIndex].classList.add('center');
  cards[currentIndex].style.order = 2;
  cards[currentIndex].style.opacity = '1';
  cards[currentIndex].style.filter = 'none';
  cards[currentIndex].style.transform = 'scale(1.1)';

  // Right card
  cards[rightIndex].style.order = 3;
  cards[rightIndex].style.opacity = '0.5';
}

function moveCarousel(direction) {
  const total = cards.length;
  currentIndex = (currentIndex + direction + total) % total;
  updateCarousel();
}

document.addEventListener('DOMContentLoaded', updateCarousel);

document.querySelector('.carousel-btn.left').addEventListener('click', () => moveCarousel(-1));
document.querySelector('.carousel-btn.right').addEventListener('click', () => moveCarousel(1));