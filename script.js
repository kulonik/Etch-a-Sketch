const container = document.getElementById('container');
const newGrids = document.getElementById('new-grids');
const gridsNumber = document.getElementById('grids-number');

function makeGrid(num) {
  container.style.gridTemplateColumns = `repeat(${num}, minmax(0px, 1fr))`;
}
makeGrid(16);

function createDivs(num) {
  for (let i = 1; i <= num * num; i++) {
    let div = document.createElement('div');
    div.classList.add('grid');
    div.style.border = "#322f2f solid 0.5px";
    container.appendChild(div);
div.addEventListener('mouseover', ()=> div.style.background = '#000');
  }
}
createDivs(16);

function resetDivs(num) {
  container.innerHTML = '';
  makeGrid(16);
  createDivs(16);
  }

function changeGrid(num) {
  makeGrid(num);
  createDivs(num);
}

newGrids.addEventListener('click', () => resetDivs());
gridsNumber.addEventListener('click', () => changeGrid(num = prompt("Type number of grids", '')))
