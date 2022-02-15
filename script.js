//4 Adicione à página um quadro de pixels, com 25 pixels.
function createDivs(className) {
    let div = document.createElement('div');
    div.className = className;
    return div;
}

function createPixelBoard(n) {
    for (let i = 0; i < n; i += 1) {
        document.querySelector('#pixel-board').appendChild(createDivs('line'))
    }
    let lines = document.querySelectorAll('.line')
    for (let line of lines) {
        for (let i1 = 0; i1 < n; i1 +=1) {
            line.appendChild(createDivs('pixel'))
        }
    }
}
createPixelBoard(5);

