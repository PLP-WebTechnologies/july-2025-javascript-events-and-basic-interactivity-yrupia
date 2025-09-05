/* Part 1: Custom Form Validation */
const form = document.getElementById('customForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent default form submission

  const username = document.getElementById('username').value.trim();
  const email = document.getElementById('email').value.trim();
  let valid = true;
  let message = '';

  // Validate username
  if (username === '') {
    valid = false;
    message += 'Username cannot be empty. ';
  }

  // Validate email with simple regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    valid = false;
    message += 'Please enter a valid email.';
  }

  if (valid) {
    formMessage.style.color = 'green';
    formMessage.textContent = 'Form submitted successfully!';
  } else {
    formMessage.style.color = 'red';
    formMessage.textContent = message;
  }
});

/* Part 2: Change Background Color Interactively */
const colorBtn = document.getElementById('colorBtn');
const colorParagraph = document.getElementById('colorParagraph');

colorBtn.addEventListener('click', () => {
  const colors = ['#FFB6C1', '#87CEFA', '#90EE90', '#FFD700'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  colorParagraph.style.backgroundColor = randomColor;
});

/* Part 3: Display Input Text */
const textInput = document.getElementById('textInput');
const showInputBtn = document.getElementById('showInputBtn');
const displayText = document.getElementById('displayText');

showInputBtn.addEventListener('click', () => {
  displayText.textContent = textInput.value;
});
