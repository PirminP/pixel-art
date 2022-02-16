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

