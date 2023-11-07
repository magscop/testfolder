// script.js
function changeText() {
    document.getElementById("demo").innerHTML = "Button Clicked!";
  }
  const typingTextElement = document.getElementById("typing-text");

  const textToType = ["UX Designer", "UX Developer", "UX Writer"];
  const typingSpeed = 50;
  let currentTextIndex = 0;
  let currentIndex = 0;
  
  function typeText() {
    if (currentIndex < textToType[currentTextIndex].length) {
      typingTextElement.textContent += textToType[currentTextIndex].charAt(currentIndex);
      currentIndex++;
      setTimeout(typeText, typingSpeed);
    } else {
      setTimeout(eraseText, 1000);
    }
  }
  
  function eraseText() {
    if (typingTextElement.textContent.length > 0) {
      typingTextElement.textContent = typingTextElement.textContent.slice(0, -1);
      setTimeout(eraseText, typingSpeed / 2);
    } else {
      currentTextIndex = (currentTextIndex + 1) % textToType.length;
      currentIndex = 0;
      setTimeout(typeText, typingSpeed);
    }
  }
  
  // Start the typing animation
  typeText();

  // Get references to the hero section and content
const hero = document.querySelector('.hero');
const heroContent = document.querySelector('.hero-content');

// Set the initial left position
let leftPosition = 10; // Adjust as needed

// Handle the scroll event
window.addEventListener('scroll', () => {
  // Calculate the new left position based on the scroll position
  leftPosition = 10 - window.scrollY * 0.2; // Adjust the scroll speed (0.2 in this example)

  // Apply the new left position to the content
  heroContent.style.left = leftPosition + '%';
});

// Set the initial position when the page loads
heroContent.style.left = leftPosition + '%';
