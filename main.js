//создать поле и ячейки
let field = document.createElement('div');
document.body.appendChild(field);
field.classList.add('field');


createGame = function() {
    for (let i=1;i<65;i++) {
        let excel = document.createElement('div');
        field.appendChild(excel);
        excel.classList.add("excel")
    }
}


createGame();


let excel = document.getElementsByClassName('excel');    
createExcel = function(cell) {
    let x = 1, y = 8;
    for(let i=0; i<cell.length; i++){
    if(x>8){
        x=1;
        y--;
    }
    cell[i].setAttribute('posX', x);
    cell[i].setAttribute('posY', y);
    x++;
    if((i%2 == 0 && y%2 == 0) || (i%2 != 0 && y%2 != 0)){
        cell[i].style.backgroundColor="#E5C59C";
    }
    else{ 
        cell[i].style.backgroundColor="#883C0A";
    }
}
}    


createExcel(excel);



// Поставить коня на случайное место при запуске страницы
let a = Math.floor(Math.random()*64);

excel[a].classList.add('current');
excel[a].classList.add('set');
let step = 1;
excel[a].innerHTML = step;
let currentXShuffle = excel[a].getAttribute('posX');
let currentYShuffle = excel[a].getAttribute('posY');
nextStep(currentXShuffle,currentYShuffle);

document.addEventListener('click', function(e,excel){
    let excOld = document.getElementsByClassName('excel');
    Array.prototype.forEach.call(excOld, function(el) {
        el.classList.remove("current");
        el.classList.remove("set");
        el.innerHTML = '';
    });
    createExcel(excOld);
    let ksi = e.target.attributes.posx.nodeValue;
    let etta = e.target.attributes.posy.nodeValue;
    let exc = e.target;
    // console.log(ksi);
    // console.log(etta);
    // console.log(exc);
    exc.classList.add('current');
    exc.classList.add('set');
    let step = 1;
    exc.innerHTML = step;
    let currentXClick = ksi;
    let currentYClick = etta;
    nextStep(currentXClick,currentYClick)
})

function nextStep(currentX,currentY) {
    let vars = [document.querySelector(`[posX = "${+currentX+1}"][posY = "${+currentY+2}"]`),
                document.querySelector(`[posX = "${+currentX+2}"][posY = "${+currentY+1}"]`),
                document.querySelector(`[posX = "${+currentX+2}"][posY = "${+currentY-1}"]`),
                document.querySelector(`[posX = "${+currentX+1}"][posY = "${+currentY-2}"]`),
                document.querySelector(`[posX = "${+currentX-1}"][posY = "${+currentY-2}"]`),
                document.querySelector(`[posX = "${+currentX-2}"][posY = "${+currentY-1}"]`),
                document.querySelector(`[posX = "${+currentX-2}"][posY = "${+currentY+1}"]`),
                document.querySelector(`[posX = "${+currentX-1}"][posY = "${+currentY+2}"]`),
            ];
    // console.log(`[posX =" ${+currentX-1}"][posY = "${+currentY+2}"]`);
                // console.log(vars);
    let availableVars = vars.filter(function(elem) {
        return elem !== null;
      })
    for(let j=0;j<availableVars.length;j++){
        availableVars[j].style.backgroundColor='grey';
    }
    
}