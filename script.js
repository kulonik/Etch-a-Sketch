const container = document.getElementById('container');
const newGrids = document.getElementById('new-grids');
const gridsNumber = document.getElementById('grids-number');

function makeGrid(num) {
  container.style.gridTemplateColumns = `repeat(${num}, minmax(0px, 1fr))`;
}
makeGrid(64);

function createDivs(num) {
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    div.style.border = "black solid 1px";
    container.appendChild(div);
div.addEventListener('mouseover', ()=> div.style.background = '#000');
  }
}
createDivs(64);

function resetDivs() {
  container.innerHTML = '';
  createDivs(64);
  }

newGrids.addEventListener('click', () => resetDivs());
