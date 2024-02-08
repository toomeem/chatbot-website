const inputBox = document.getElementById('inputBox');
const outputBox = document.getElementById('outputBox');

inputBox.addEventListener('mouseenter', () => {
  inputBox.classList.remove('transparent');
});

inputBox.addEventListener('mouseleave', () => {
  inputBox.classList.add('transparent');
});

outputBox.addEventListener('mouseenter', () => {
  outputBox.classList.remove('transparent');
});

outputBox.addEventListener('mouseleave', () => {
  outputBox.classList.add('transparent');
});
