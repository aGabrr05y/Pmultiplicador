// CONTANDO ELEMENTOS DE HTML CON JAVASCRIPT
const pregunta = document.getElementById ("question");
const entrada = document.getElementById("input")
const formulario = document.getElementById ("form")
const puntaje = document.getElementById("score")
const respuesta = document.getElementById("respuesta")
// CREAMOS UN ALMACENAMIENTO LOCAL PARA EL PUNTAJE 
let score = JSON.parse(localStorage.getItem("score"))


// VALIDAMOS SI DENTRO DE SCORE NO HAY NADA ENTONCES SCORE SE VUELVE 0
if (!score) {
    score=0;
}

// CREMOS DOS VARIABLES QUE ALMACENAN DOS NUMEROS ALEATORIOS PARA LUEGO MULTIPLICARLO
let num1 = Math.ceil (Math.random() * 15);
let num2 = Math.ceil (Math.random () * 15);
const resCorrecta = num1 * num2; 

// CONECTAMOS EL SCORE DE HTML PARA QUE REFLEJE EL PUNTAJE ALMACENADO EN JSON 
puntaje.innerText = `Score ${score}`

//CONTECTAMOS CON HTML PARA MODIFICAR LOS MULTIPLICADORES
pregunta.innerText = `Cuanto es ${num1} multiplicado ${num2}`

//PRUEBA PARA SABER LA RESPUESTA CORRECTA - ELIMINAR CUANDO SEA NECESARIO
respuesta.innerText = `Respuesta = ${resCorrecta}`

/* CREAMOS UNA FUNCION QUE REVISA SI LA RESPUESTA ES CORRECTA 
Y CONECTA SUBMIT CON LA VALIDACION*/
formulario.addEventListener ("submit", () => {
    const usuario = +entrada.value;
    if ( usuario === resCorrecta){
    score++;
    updateLocalStorage();
}
    else {
        score--;
        updateLocalStorage();
    }

})

//CREAMOS UNA FUNCION QUE NOS PERMITE ACTUALIZAR EL ALMACENAMIENTO INTERNO Y LO REFLEJA EN LA VARIABLE SCORE 
function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
    }
    

