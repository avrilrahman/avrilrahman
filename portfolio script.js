document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('click', () => {
      const cardInner = card.querySelector('.card-inner');
      cardInner.style.transform = cardInner.style.transform === 'rotateY(180deg)' ? 'rotateY(0)' : 'rotateY(180deg)';
    });
  });

// Function to increase font size
let fontSizeMultiplier = 1; // Track the current multiplier

// Function to increase font size up to three times
function increaseFontSize() {
  if (fontSizeMultiplier < 3) {
    document.body.style.fontSize = `${1 + 0.2 * fontSizeMultiplier}em`;
    fontSizeMultiplier++;
  } else {
    alert("Font size is already at its maximum!");
  }
}

// Function to toggle dark mode
function toggleColor() {
  document.body.classList.toggle('dark-mode');
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.classList.toggle('dark-mode');
  }
}

function showAltText(button) {
    const photo = button.previousElementSibling; // Get the <img> element before the button
    if (photo && photo.alt) {
      alert(`Alt Text: ${photo.alt}`);
    } else {
      alert("Alt text not found.");
    }
  }

  