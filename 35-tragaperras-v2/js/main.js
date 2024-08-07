//Uso estricto
"use strict";


//VARIABLES GLOBALES

var numBotonesMantenidos = 0;


//Por defecto no hay tiradas mantenidas

var estadoTiradaMantenida = false;

var premiosAcumulados = 0;
console.log("premiosAcumulados = " + premiosAcumulados);

var contadorJugadas = 0;
console.log("contadorJugadas = " + contadorJugadas);

//Creo una Tirada Inicial

var casilla1 = Math.floor(Math.random() * 9) + 0;
console.log("casilla1 = " + casilla1);

var casilla2 = Math.floor(Math.random() * 9) + 0;
console.log("casilla2 = " + casilla2);

var casilla3 = Math.floor(Math.random() * 9) + 0;
console.log("casilla3 = " + casilla3);


//Pinto las imágenes de las casillas
document.getElementById("casilla-1").innerHTML =
    '<img src="img/' + casilla1 + '.png" />';

document.getElementById("casilla-2").innerHTML =
    '<img src="img/' + casilla2 + '.png" />';

document.getElementById("casilla-3").innerHTML =
    '<img src="img/' + casilla3 + '.png" />';

function jugar() {

    //Detecto de si la tirada es mantenida o no
    if(estadoTiradaMantenida == true){
        document.getElementById("l-mantener-1").classList.remove("pe-none");
        document.getElementById("l-mantener-2").classList.remove("pe-none");
        document.getElementById("l-mantener-3").classList.remove("pe-none");

    }else{

    }

    //Ejecuto Sonido
    var audio = new Audio('media/jugar.mp3');
    audio.play();

    console.log("Estoy dentro de la función jugar()");

    //RESTO UNA JUGADA
    contadorJugadas--;

    //Si jugadas == 0 deshabilito el botón jugar
    if (contadorJugadas == 0) {

        document.getElementById("boton-jugar").setAttribute("disabled", true);

    }



    //Obtendo los valores de los botones mantener

    var mantener1 = document.getElementById("mantener-1").checked;
    console.log("mantener1 = " + mantener1);
    var mantener2 = document.getElementById("mantener-2").checked;
    console.log("mantener2 = " + mantener2);
    var mantener3 = document.getElementById("mantener-3").checked;
    console.log("mantener3 = " + mantener3);

    //Si la jugada es mantenida por algun boton, ejecuto la Funcion Jugada Mantenida

    if (mantener1 == true || mantener2 == true || mantener3 == true) {
        //ejecuto la función
        tiradaMantenida();
    }
    //Si los botones mantener no estan pulsados(false) entonces generaras una tirada aleatoria

    if (mantener1 == false) {
        casilla1 = Math.floor(Math.random() * 9) + 0;
        console.log("casilla1 = " + casilla1);
    }

    if (mantener2 == false) {
        casilla2 = Math.floor(Math.random() * 9) + 0;
        console.log("casilla1 = " + casilla2);
    }

    if (mantener3 == false) {
        casilla3 = Math.floor(Math.random() * 9) + 0;
        console.log("casilla1 = " + casilla3);
    }


    //Pinto las imágenes de las casillas
    document.getElementById("casilla-1").innerHTML =
        '<img src="img/' + casilla1 + '.png" />';

    document.getElementById("casilla-2").innerHTML =
        '<img src="img/' + casilla2 + '.png" />';

    document.getElementById("casilla-3").innerHTML =
        '<img src="img/' + casilla3 + '.png" />';


    //Compruebo premio
    var premio = 0
    console.log("premio = " + premio);

    if (casilla1 == 0 && casilla1 == casilla2 &&
        casilla1 == casilla3) {
        //Premio BIGWIN
        premio = 200;
    } else if (casilla1 == 1 && casilla1 == casilla2 &&
        casilla1 == casilla3) {

        //Premio 777
        premio = 100;

    } else if (casilla1 == 2 && casilla1 == casilla2 &&
        casilla1 == casilla3) {

        //Premio 3 Cerezas
        premio = 20;

    } else if (casilla1 == 3 && casilla1 == casilla2 &&
        casilla1 == casilla3) {

        //Premio 3 Limones
        premio = 10;

    } else if (casilla1 == 4 && casilla1 == casilla2 &&
        casilla1 == casilla3) {

        //Premio 3 Naranjas
        premio = 5;

    } else if ((casilla1 == 5 || casilla1 == 6) && casilla1 == casilla2 &&
        casilla1 == casilla3) {

        //Premio 3 sandias o 3 fresas(acumular jugadas)
        contadorJugadas += 10;
    } else if ((casilla1 == 7 || casilla1 == 8) && casilla1 == casilla2 &&
        casilla1 == casilla3) {

        //Premio 3 coruelas o 3 platanos(acumular jugadas)
        contadorJugadas += 5;

    }

    //Premios de Tiradas extra por sacar Big Win o 7

    if ((casilla1 == 0 || casilla1 == 1) && casilla1 == casilla2 &&
        casilla1 == casilla3) {

        //Si tengo 3 Big Win o 3 Sietes (No Hago NAda)


    } else {

        //Si NO tengo 3 Big Win o 3 Sietes

        //Añado premios : 1x Big Win = 10 tiradas y 1x Sietes = 5 tiradas
        if (casilla1 == 0) {

            //Casilla 1 = Big Win
            contadorJugadas += 1;

        }
        if (casilla2 == 0) {

            //Casilla 1 = Big Win
            contadorJugadas += 1;

        }
        if (casilla3 == 0) {

            //Casilla 1 = Big Win
            contadorJugadas += 1;

        }




    }


    //PINTO LAS JUGADAS ACTUALIZADAS
    document.getElementById("contador-jugadas").innerHTML = contadorJugadas;

    //Reseteo el Contador de Botones Mantenidos

    numBotonesMantenidos = 0;

    
    console.log("premio = " + premio);

    //Si premio es distinto de 0, lanza una alerta con el premio
    if (premio != 0) {

        //Acumulo el premio
        premiosAcumulados += premio;

        //PINTO EL PREMIO ACUMULADO
        document.getElementById("premios-acumulados").innerHTML =
            premiosAcumulados + " €";

        //Habilito el botón cobrar
        document.getElementById("boton-cobrar").removeAttribute("disabled")

    }

}



function cobrarPremios() {

    alert("Enhorabuena, has cobrado un premio de " +
        premiosAcumulados + " €");

    //Reseteo el contador de premios
    premiosAcumulados = 0;

    //PINTO EL PREMIO ACUMULADO
    document.getElementById("premios-acumulados").innerHTML =
        premiosAcumulados + " €";

    //Deshabilito el botón cobrar
    document.getElementById("boton-cobrar").setAttribute("disabled", true)

}



function aumentarJugadas() {

    //Incremento en 1 las jugadas
    contadorJugadas++;


    //PINTO Las jugadas acumuladas
    document.getElementById("contador-jugadas").innerHTML = contadorJugadas;

    //habilito botón jugar
    document.getElementById("boton-jugar").removeAttribute("disabled")
}

function mantener(numCasilla) {

    
    
    
    console.log("estoy dentro de mantener y casilla = " + numCasilla);
    
    //Pongo el boton mantener en amarillo si es true . Si no es gris
    var botonMantenido = document.getElementById("mantener-" + numCasilla).checked;
    console.log("botonMantenido = " + botonMantenido);
    
    if (botonMantenido == true) {

        //Boton en amarillo
        //Quitar la clase secondary

        
        document.getElementById("l-mantener-" + numCasilla).classList.remove("btn-secondary");
        //añado la clase warning
        
        document.getElementById("l-mantener-" + numCasilla).classList.add("btn-warning");
        
        //Aumento en 1 la variable numBotonesMantenidos
        
        numBotonesMantenidos++;
        
    } else {
        //Boton en gris
        
        //Quitar la clase warning
        document.getElementById("l-mantener-" + numCasilla).classList.remove("btn-warning");
        
        //añado la clase secondary
        document.getElementById("l-mantener-" + numCasilla).classList.add("btn-secondary");
        
        //Disminuyo en 1 la variable numBotonesMantenidos
        
        numBotonesMantenidos--;
    }
    
    
    
    //Si hay 2 Botones activos -> Desactivo el 3º boton
    
    if(numBotonesMantenidos == 2){
    
        //Obtengo el valor de los botones mantenidos
    
        var mantener1 = document.getElementById("mantener-1").checked;
        console.log("mantener1 = " + mantener1);
        var mantener2 = document.getElementById("mantener-2").checked;
        console.log("mantener2 = " + mantener2);
        var mantener3 = document.getElementById("mantener-3").checked;
        console.log("mantener3 = " + mantener3);
    
        if(mantener1 == false){
            //Bloqueo el boton
            document.getElementById("l-mantener-1").classList.add("pe-none");
    
        }
        
        if(mantener2 == false){
            //Bloqueo el boton
            document.getElementById("l-mantener-2").classList.add("pe-none");
    
        }
        
        if(mantener3 == false){
            //Bloqueo el boton
            document.getElementById("l-mantener-3").classList.add("pe-none");
    
        }
        
    
    }else{

        //Habilito todos los botones
        
    document.getElementById("l-mantener-1").classList.remove("pe-none");
    document.getElementById("l-mantener-2").classList.remove("pe-none");
    document.getElementById("l-mantener-3").classList.remove("pe-none");
    }

    
}


function tiradaMantenida() {

    console.log("Estoy dentro de tirada mantenida");

    //Pongo todos los checkbox en estado unchecked
    //(Quito el atributo checked)
    document.getElementById("mantener-1").checked = false;
    document.getElementById("mantener-2").checked = false;
    document.getElementById("mantener-3").checked = false;


    //Pongo todos los labels en gris

    //Quitar la clase warning
    document.getElementById("l-mantener-1").classList.remove("btn-warning");

    //añado la clase secondary
    document.getElementById("l-mantener-1").classList.add("btn-secondary");

    //Quitar la clase warning
    document.getElementById("l-mantener-2").classList.remove("btn-warning");

    //añado la clase secondary
    document.getElementById("l-mantener-2").classList.add("btn-secondary");

    //Quitar la clase warning
    document.getElementById("l-mantener-3").classList.remove("btn-warning");

    //añado la clase secondary
    document.getElementById("l-mantener-3").classList.add("btn-secondary");


    //Desactivo el click de los botones Mantener

    document.getElementById("l-mantener-1").classList.add("pe-none");
    document.getElementById("l-mantener-2").classList.add("pe-none");
    document.getElementById("l-mantener-3").classList.add("pe-none");
  

    estadoTiradaMantenida = true;




}