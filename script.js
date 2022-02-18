//4 Adicione à página um quadro de pixels, com 25 pixels.
function createDivs(className) {
    let div = document.createElement('div');
    div.className = className;
    return div;
}

function createPixelBoard(n) {
    for (let i = 0; i < n; i += 1) {
        document.querySelector('#pixel-board').appendChild(createDivs('line'));
    }
    let lines = document.querySelectorAll('.line');
    for (let line of lines) {
        for (let i1 = 0; i1 < n; i1 +=1) {
            line.appendChild(createDivs('pixel'));
        }
    }
    pixelApplication();
}
createPixelBoard(5);

//7 Clicar em uma das cores da paleta faz com que ela seja selecionada e utilizada para preencher os pixels no quadro.
let colorOption = document.querySelectorAll('.color');
for (let colSel of colorOption) {
    colSel.addEventListener('click', classSeleted);
}

function classSeleted(event) {
    for (let colSel of colorOption) {
        colSel.className = 'color';
    }
    event.target.className = 'color selected'
}

//8 Clicar em um pixel dentro do quadro após selecionar uma cor na paleta faz com que o pixel seja preenchido com a cor selecionada.
function pixelApplication() {
    let pixel = document.querySelectorAll('.pixel');
    for (let pixSel of pixel) {
        pixSel.addEventListener('click', changeColor);
    }
}
//Research get computed style(Tutorial): https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle
function changeColor(event) {
    let selectedColor = document.querySelector('.selected');
    let pixelColor = window.getComputedStyle(selectedColor).getPropertyValue('background-color');
    event.target.style.background = pixelColor;
}

//9 Crie um botão que, ao ser clicado, limpa o quadro preenchendo a cor de todos seus pixels com branco.
document.querySelector('#clear-board').addEventListener('click', clearBoard);
function clearBoard() {
    let pixel = document.querySelectorAll('.pixel');
    for (pixSel of pixel) {
        pixSel.style.background = 'white';
    }
}

//10 Faça o quadro de pixels ter seu tamanho definido pela pessoa usuária.
//11 Limite o tamanho mínimo e máximo do board.
let board = document.querySelector('#generate-board');
board.addEventListener('click', generateBoard);

function generateBoard() {
    let size = document.querySelector('#board-size').value;
    if (size == '') {
        alert('Board inválido!')
    } else if (size < 5) { //11
        clearCurrentBoard();
        createPixelBoard(5);
    } else if (size > 50) { //11
        clearCurrentBoard();
        createPixelBoard(50);
    } else {
        clearCurrentBoard();
        createPixelBoard(size);
    }
}

function clearCurrentBoard () {
    let pixel = document.querySelectorAll('.pixel');
    for (let pix of pixel) {
        pix.remove();
    }
    let lines = document.querySelectorAll('.line');
    for (let lin of lines) {
        lin.remove();
    }
}

//12 Faça com que as cores da paleta sejam geradas aleatoriamente ao carregar a página.
// Research random color: https://stackoverflow.com/questions/1484506/random-color-generator
document.querySelector('#black').style.background = black;
document.querySelector('#blue').style.background = getRandomColor();
document.querySelector('#green').style.background = getRandomColor();
document.querySelector('#orange').style.background = getRandomColor();

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

