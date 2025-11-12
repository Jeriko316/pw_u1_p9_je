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
        edad:35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'New York'
    }
    console.log(profesor);
    console.log(profesor.apellido);
    profesor.apellido='CAÑARROIS'
    console.log(profesor);

    if(profesor.ciudad === 'Quito'){
        console.log('Es quiteño');
    }

    if(profesor.edad !== 36){
        console.log('Es diferente de 36');
    }else{
        console.log('Es 36');
    }

    for(let clave in profesor){
        console.log(clave);
        console.log(profesor[clave]);
    }

    //destructuracion//
    /*es un forma sencilla y practica de extraer valores de un objeto o un arreglo y 
    asignarlo a variables individuales */

    //destrucutracion de arreglos

    //decalramos el objeto 
    const e1 = {
        nombre:'Ericko', 
        apellido: 'Enriqu',
        edad:35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'New York'
    }

    const e2 = {
        nombre:'Ericko', 
        apellido: 'Enriqu',
        edad:35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'New York'
    }

    const arregloEstudiantes = [e1,e2,{
        nombre:'Ericko 3', 
        apellido: 'Enriqu',
        edad:35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'New York'
    } ];
    console.log(arregloEstudiantes[0]);
    console.log(arregloEstudiantes[2]);

    //ahora si la destrucuracion de arreglos
    const ar1=[1,2,3,4,5,6,7];
    const [p1,p2,p3,p4,p5] = ar1; //la guia apra destrcuraR ES LA POSICION
    console.log(p1);
    console.log(p5);

    const [primero,,,,,, ultimo] = ar1;
    console.log(primero);
    console.log(ultimo);


    //lo mismo pero en un solo paso 
    const [pos1, pos2] = [1,2,3,4,5,6,7];
    imprime(ar1);

    //Para Objetos

    const e3 = {
        nombre:'Ericko', 
        apellido: 'Enriqu',
        edad:35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'New York'
    }
    //lado izquiedo lo q se destrucura = lado derecho el objeto
    const {nombre: nombre1, ciudad}            =           e3;
    console.log(nombre1);
    console.log(ciudad);

    const{nombre: n, ciudad: ciu} = {
       nombre:'Ericko', 
        apellido: 'Enriqu',
        edad:35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'New York'
    };

    console.log(n);
    console.log(ciu);

     const e4 = {
        nombre:'Ericko', 
        apellido: 'Enriqu',
        edad:35,
        ecuatoriano: true,
        genero: 'M',
        ciudad: 'New York',
        direccion: {
          calle: "Av. America",
          barrio: "la gasca",
          numeracion: "2343"
        }
    }

    console.log(e4.direccion);
    console.log(e4.direccion.numeracion);

    //Destructuracion a un objeto q tiene atribjutos objetos
    const {edad: ed, direccion} = e4;
    console.log(ed);
    console.log(direccion);

    const {calle} = direccion;
    console.log(calle);

    //ahora en un solo paso la destructraciond e un bojeto como atributo
    const {direccion: {barrio,calle:c1,numeracion}} = e4;
    console.log(barrio);
    console.log(c1);
    console.log(numeracion);

    

}


function imprime(arreglo){
  console.log(arreglo);
}

//esta es otra forma de lo mismo de arriba 
/*function imprime([a,b,c]){
  console.log(a);
  console.log(b);
  console.log(c);
}*/

