const inputB = document.getElementById('user-input');
const outputB = document.getElementById('chat-output');

inputB.addEventListener('mouseenter', () => {
  inputB.classList.remove('transparent');
});

inputB.addEventListener('mouseleave', () => {
  inputB.classList.add('transparent');
});

outputB.addEventListener('mouseenter', () => {
  outputB.classList.remove('transparent');
});

outputB.addEventListener('mouseleave', () => {
  outputB.classList.add('transparent');
});
