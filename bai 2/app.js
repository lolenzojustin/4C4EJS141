const colorDisplay =
  document.getElementById('colorDisplay');
const randomColorButton = document.getElementById(
  'randomColorButton'
);
const hexCodeInput = document.getElementById('hex');
const copyButton = document.getElementById('copyButton');

function getRandomColor() {
  const random = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += random[Math.floor(Math.random() * 16)];
  }
  return color;
}

function updateColorDisplay(color) {
  colorDisplay.style.backgroundColor = color;
  hexCodeInput.value = color;
}

function copyHexCode() {
  hexCodeInput.select();
  document.execCommand('copy');
  alert('Mã màu đã được sao chép: ' + hexCodeInput.value);
}

randomColorButton.addEventListener('click', function () {
  const randomColor = getRandomColor();
  updateColorDisplay(randomColor);
  document.body.style.backgroundColor = randomColor;
});

copyButton.addEventListener('click', copyHexCode);
