// Definição das cores da paleta
const generateRandomRGB = () => {
  const r = Math.floor(Math.random() * (255));
  const g = Math.floor(Math.random() * (255));
  const b = Math.floor(Math.random() * (255));
  const rgb = `rgb(${r}, ${g}, ${b})`;
  return rgb;
};

const color = document.querySelectorAll('.color');
function colorsPallete() {
  color[0].style.backgroundColor = generateRandomRGB();
  color[1].style.backgroundColor = generateRandomRGB();
  color[2].style.backgroundColor = generateRandomRGB();
  color[3].style.backgroundColor = generateRandomRGB();
}
colorsPallete();

// Botão mudar cores
document.querySelector('#change-colors').addEventListener('click', () => {
  colorsPallete();
});

// Criação do quadro
const pixel = document.querySelector('#pixel-board');

function createFrame(sizePixels = 5) {
  for (let index = 1; index <= sizePixels; index += 1) {
    const column = document.createElement('div');
    pixel.appendChild(column);
    for (let index2 = 1; index2 <= sizePixels; index2 += 1) {
      const eachPixel = document.createElement('div');
      column.appendChild(eachPixel);
      eachPixel.className = 'pixel';
    }
  }
}
createFrame();

// Definição do tamanho do quadro pelo usuario
const btnSizePixels = document.querySelector('#set-pixels');
const inputNumber = document.querySelector('#input-number');

btnSizePixels.addEventListener('click', () => {
  const sizePixels = inputNumber.value;
  if (sizePixels === '') alert('Board inválido!');
  if (sizePixels < 5) {
    pixel.innerHTML = '';
    return createFrame(5);
  }
  if (sizePixels > 50) {
    pixel.innerHTML = '';
    return createFrame(50);
  }
  pixel.innerHTML = '';
  return createFrame(sizePixels);
});

// Define a primeira cor da paleta como padrão
color[0].className += ' selected';

// Seleciona a classe "selected" onde for clicado
function changeClass() {
  const elementColors = document.querySelector('#color-palette');
  elementColors.addEventListener('click', (e) => {
    const colorElement = e.target;
    const selectElement = document.querySelector('.selected');
    selectElement.classList.remove('selected');
    colorElement.classList.add('selected');
  });
}
changeClass();

// Define a cor do pixel clicado com a cor da paleta selecionada
function clickColor() {
  document.querySelector('#pixel-board').addEventListener('click', (e) => {
    const eachPixel = e.target;
    if (eachPixel.className === 'pixel') {
      const colorSelected = document.querySelector('.selected').style.backgroundColor;
      eachPixel.style.backgroundColor = colorSelected;
    }
  });
}
clickColor();

// botao de limpar tudo
function btnClear() {
  document.querySelector('#erase-all-btn').addEventListener('click', () => {
    const pixels = document.querySelectorAll('.pixel');
    for (let index = 0; index < pixels.length; index += 1) {
      pixels[index].style.backgroundColor = 'white';
    }
  });
}
btnClear();
