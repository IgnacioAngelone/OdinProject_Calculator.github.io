let operator = '';
let previousValue = '';
let currentValue = '';

////////////////////////////////  EVENTOS  ////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function(){

// Almacenan todos los valores

let clear = document.querySelector("#clear-btn");
let equal = document.querySelector(".equal");
let decimal = document.querySelector(".decimal");

let numbers = document.querySelectorAll(".number");
let operators = document.querySelectorAll(".operator");

let previousScreen = document.querySelector(".previous");
let currentScreen = document.querySelector(".current");


/* Selecciona de la variable almacenada numbers que tiene varios entonces al ser un array se puede convertir
en una funcion de bucle foreach */

numbers.forEach((number) => number.addEventListener("click", function(e){
     handleNumber(e.target.textContent)
     currentScreen.textContent = currentValue;
     }));

// Evento de operadores

operators.forEach((op) => op.addEventListener("click", function(e){
     handleOperator(e.target.textContent);
     previousScreen.textContent = previousValue + "" + operator;
     currentScreen.textContent = currentValue;
     }));

// Evento de limpieza

clear.addEventListener("click", function(){
     previousValue = '';
     currentValue = '';
     operator = '';
     previousScreen.textContent = currentValue;
     currentScreen.textContent = currentValue;
     });

// Evento de igual

equal.addEventListener("click", function(){
     if(currentValue != '' && previousValue != ''){
         calculate();
         previousScreen.textContent = '';

         if(previousValue.length<5){
             currentScreen.textContent = previousValue;
         } else {
             currentScreen.textContent = previousValue.slice(0,5) + "...";
         }}     
     });

// Evento de decimales

decimal.addEventListener("click", function(){
     addDecimal();
     });

});

/////////////////////////////////  FUNCIONES  ////////////////////////////////////////////////////////////////////////

// Funcion para manejar los numeros

function handleNumber(num){
     console.log(num);
     if(currentValue.length < 5){
         currentValue += num;
     }
};

// Funcion para manejar los operadores

function handleOperator(op){
     operator = op;
     previousValue = currentValue;
     currentValue = '';
};

// Funcion para el calculo

function calculate(){
previousValue = Number(previousValue);
currentValue = Number(currentValue);

if(operator === "+"){

     previousValue += currentValue;

} else if(operator === "-"){

     previousValue -= currentValue;

} else if(operator === "/"){

     previousValue /= currentValue;

} else if(operator === "x"){

     previousValue *= currentValue;

};

previousValue = roundNumber(previousValue);
previousValue = previousValue.toString();
currentValue = previousValue.toString();

};

// Funcion redondear numero

function roundNumber(num){

     return Math.round(num * 1000) / 1000;

};

// Funcion añadir decimal

function addDecimal(){

     if(currentValue.includes(".")){
        currentValue += '.';
     }

};