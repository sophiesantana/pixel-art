let color = document.querySelectorAll('.color');
color[0].style.backgroundColor = 'black';
color[1].style.backgroundColor = 'pink';
color[2].style.backgroundColor = 'yellow';
color[3].style.backgroundColor = 'purple';

let pixel = document.querySelector('#pixel-board');
let size = 5;
for (let index = 1; index <= size; index += 1) {
    let box = document.createElement('div');
    pixel.appendChild(box);
    for (let index2 = 1; index2 <= size; index2 += 1) {
        let line = document.createElement('div');
        box.appendChild(line);
        line.className = 'pixel';
    }
}

color[0].className += ' selected';