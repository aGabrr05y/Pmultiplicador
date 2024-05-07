//CONECTAMOS LA VARIABLES CON HTML Y CREAMOS UNA ARCHIVO JASON PARA ALMACENAR LA INFORMACION EN LOCALSTORAGE
const pregunta = document.getElementById("question");
const inputt = document.getElementById("input").value;
const formulario = document.getElementsByName ("form");
const puntaje = document.getElementById("score");
const respuesta = document.getElementById("respuesta")
let contadorDePuntos = JSON.parse(localStorage.getItem("score"));


if (!contadorDePuntos) {
    contadorDePuntos = 0;
    }
// CREAMOS 2 VARIABLES QUE ALMACENARAN UN NUMERO RANDOM DEL 0 AL 15
let numero1 = Number(Math.floor (Math.random() * 15));
let numero2 = Number(Math.ceil (Math.random() * 15));

//CREAMOS UNA VARIABLE QUE HACE UNA OPERACION MULTIPLICANDO AMBOS NUMEROS RANDOM Y ALMACENANDOLO EN UNA NUEVA VARIABLE
let operacion = numero1 * numero2;
let respuesta_correcta = operacion;

//COMPARAMOS EL RESULTADO CON EL INPUT DEL USUARIO PARA VERIFICAR SI LA RESPUESTA ES CORRECTA
pregunta.innerText = `¿Cuanto es ${numero1} por ${numero2}?`;
respuesta.innerText = `La respuesta es ${respuesta_correcta}`;


//CONVERTIR EL INPUT DE HTML DE STR A NUMBER
let respuestaDeUsuario = +inputt;

//FUNCION PARA COMPARAR  LA RESPUESTA DEL USUARIO CON LA RESPUESTA CORRECTA Y AÑADIRLO AL SCORE 
function vericadorDeRespuesta (){
    if (respuesta_correcta == respuestaDeUsuario) {
        ++contadorDePuntos;
        updateLocalStorage();
    }else {
        contadorDePuntos--;
        updateLocalStorage();
    }    
}

formulario.addEventListener ("submit" , vericadorDeRespuesta())

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(contadorDePuntos));
    }