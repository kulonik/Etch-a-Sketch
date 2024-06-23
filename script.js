const container = document.getElementById('container');

function makeGrid(num) {
  container.style.gridTemplateColumns = `repeat(${num}, minmax(0px, 1fr))`;
}
makeGrid(32);

function createDivs(num) {
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    div.style.border = "black solid 1px";
    container.appendChild(div);
div.addEventListener('mouseover', ()=> div.style.background = '#000');
  }
}
createDivs(32);
