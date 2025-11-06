function changeColor(id_element, color) {
  document.getElementById(id_element).style.color = color;
  document.getElementById(id_element).style.backgroundColor = "black";
}

function addElement(id_element, html) {
  document.getElementById(id_element).innerHTML = html;
}

function buildH1() {
  return '<h1 id="id_h1">Calculadora</h1>';
}

function deleteElement(id_element) {
  document.getElementById(id_element).remove();
}

function hiddenElement(id_element) {
  document.getElementById(id_element).style.display = "none";
}

function showElement(id_element) {
  document.getElementById(id_element).style.display = "block";
}

//funciones de suma, resta, multiplicacion y division
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return "Error: División por cero";
  }
  return num1 / num2;
}

function calculate(operation) {
  let num1 = parseFloat(document.getElementById("id_num1").value);
  let num2 = parseFloat(document.getElementById("id_num2").value);
  let result;

  switch (operation) {
    case "+":
      result = add(num1, num2);
      break;
    case "-":
      result = subtract(num1, num2);
      break;
    case "*":
      result = multiply(num1, num2);
      break;
    case "/":
      result = divide(num1, num2);
      break;
    default:
      result = "Operación no válida";
  }

  document.getElementById("id_result").innerText = result;
}

function fundamentosJs(){
    /*3 TIPOS DE VARIABLES */
    var nombre = "Erick"; //variable antigua y obsolteta
    let apellido="Enriquez";//cumple la misma funcion para variables cambiantes
    let apellido2 = 15; // no se necesita declara el tipo de varibale
    apellido2 = "Teran"; //ahora cambia
    let arreglo = [1,2,4,5,6];
    let diaSemana = ['Lunes', 'Martes','...'];
    const IVA = 12.8;
    console.log('Fundamentos de JS'); //permite imprimir
    console.log(nombre)
    console.log(IVA);
    console.log(arreglo);

    //MANEJO DE ARREGLOS
    const arregloDiaSemana = ['Lunes','Martes', 'Miercoles'];
    arregloDiaSemana.push('Jueves');
    console.log(arregloDiaSemana);
    arregloDiaSemana.unshift('Dias');
    console.log(arregloDiaSemana);
    console.log(arregloDiaSemana[1]);
    console.log('Manejo de nulos, undefinde y vacio');
    arregloDiaSemana.push(null);
    arregloDiaSemana.push('');
    console.log(arregloDiaSemana[5]);//nulo
    console.log(arregloDiaSemana[6]);//cadena vacia
    console.log(arregloDiaSemana[7]);//undefined

    const numerosPares = [2,4,6,8];
    const numerosInpares = [1,3,5,7,9];
    const numerosTotales = numerosInpares.concat(numerosPares);
    console.log(numerosTotales);


    /*SENTENCIAS DE CONTROL*/
    let edad = 19;
    if(edad >= 18){
        console.log('es mayor de edad');

    }else{
        console.log('es menor de edad');
    }

    let dia = 'lunes';
    switch(dia){
        case 'lunes': console.log('es lunes');
                break;
        
        case 'martes': console.log('es martes');
                break;
        
        default:
            console.log('No es ninguno de esos dias');
    }

    for(let i = 0; i <=5; i++){
        console.log(i);
    }

    const frutas = ['manzana', 'sanduiaxD', 'perita', 'morita'];
    for(let fruta of frutas){
        console.log(fruta);
    }

    //manejo de objetos
    const profesor = {
        nombre:'Ericko', 
        apellido: 'Enriqu',
        edad:36,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'New York'
    }
    console.log(profesor);
}