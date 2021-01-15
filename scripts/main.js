let container = document.querySelector('#container'); 
//boton para reiniciar y dar tamaño
btn = document.querySelector('button');
btn.addEventListener('click',newGrid);

//funcion para crear grid
function creatGrid(size){
    for (let i = 1; i <= size*size; i++) {
        const gridELement = document.createElement('div');
        //creamos la cantidad de columnas, las filas estan implicitas por ser cuadrado 
        container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        container.appendChild(gridELement);
        gridELement.classList.add('element');
        //hacemos que los elementos div se pongan de un color cuando mousehoover
        gridELement.addEventListener('mouseover',changeColor);
    }
} 

//funcion para cambiar de color
function changeColor (e){
    e.target.style.backgroundColor = 'rgb(16, 138, 219)';
}

//funcion para limpiar y despues crear nueva grid con el tamaño especificado
function newGrid(){
    size = prompt('please select the new number of rows or columns');
    (size<100) ? (clear(),creatGrid(size)) : alert ('please type a number less than 100')
};

//funcion limpiar
function clear(){
    const gridArray = Array.from(container.childNodes);
    gridArray.forEach((element) => {
      container.removeChild(element);
    });
}

//crea la grid inicial
creatGrid(16);