// Get all the color buttons
const colorButtons = document.querySelectorAll('.color-btn');

// Function to change the background color
function changeBackgroundColor(event) {
  const selectedColor = event.target.getAttribute('data-color');
  document.body.style.backgroundColor = selectedColor;
}

// Add event listeners to all the buttons
colorButtons.forEach(button => {
  button.addEventListener('click', changeBackgroundColor);
});
