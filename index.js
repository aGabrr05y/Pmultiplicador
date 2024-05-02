const pregunta = document.getElementById("question");
const input = document.getElementById("input");
const formulario = document.getElementsByName ("form");
const puntaje = document.getElementById("score");
const respuesta = document.getElementById("respuesta")
let contadorDePuntos = JSON.parse(localStorage.getItem("score"));


let numero1 = Number(Math.floor (Math.random() * 15));
let numero2 = Number(Math.ceil (Math.random() * 15));
let operacion = numero1 + numero2;
let resultado = operacion;
pregunta.innerText = `¿Cuanto es ${numero1} por ${numero2}?`
respuesta.innerText = `La respuesta es ${resultado}`
