/*  Actualizado: Miercoles 19 de marzo de 2025 5:50 pm
    Profe Andrés
*/

let ataqueJugador
let ataqueEnemigo
let vidasJugador=3
let vidasEnemigo=3

function iniciarJuego(){
    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="none"

    let sectionReiniciar=document.getElementById("reiniciar")
    sectionReiniciar.style.display="none"

    let botonMascotaJugador=document.getElementById("boton-mascota")

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua=document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar=document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador(){
    let sectionSeleccionarMascota=document.getElementById("seleccionar-mascota")
    sectionSeleccionarMascota.style.display="none"

    let sectionSeleccionarAtaque=document.getElementById("seleccionar-ataque")
    sectionSeleccionarAtaque.style.display="flex"

    let inputCharmander=document.getElementById("charmander")
    let inputBoulbasour=document.getElementById("boulbasour")
    let inputSquartle=document.getElementById("squartle")
    let spanMascotaJugador=document.getElementById("mascota-jugador")


    if(inputCharmander.checked){
        spanMascotaJugador.innerHTML="Charmander"
    }else if(inputBoulbasour.checked){
        spanMascotaJugador.innerHTML="Boulbasour"
    }else if(inputSquartle.checked){
        spanMascotaJugador.innerHTML="Squartle"
    }else{
        alert("Selecciona un POKEMON")
    }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)
    let spanMascotaEnemigo=document.getElementById("mascota-enemigo")

    if(ataqueAleatorio==1){
        spanMascotaEnemigo.innerHTML="Charmander"
    }else if(ataqueAleatorio==2){
        spanMascotaEnemigo.innerHTML="Boulbasour"
    }else{
        spanMascotaEnemigo.innerHTML="Squartle"
    }
}

function ataqueFuego(){
    ataqueJugador="FUEGO"
    ataqueAleatorioEnemigo()
}

function ataqueAgua(){
    ataqueJugador="AGUA"
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador="TIERRA"
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio=aleatorio(1,3)

    if(ataqueAleatorio==1){
        ataqueEnemigo="FUEGO"
    }else if(ataqueAleatorio==2){
        ataqueEnemigo="AGUA"
    }else{
        ataqueEnemigo="TIERRA"
    }

    combate()
}

function combate(){
    let spanVidasJugador=document.getElementById("vidas-jugador")
    let spanVidasEnemigo=document.getElementById("vidas-enemigo")

    if(ataqueEnemigo==ataqueJugador){
        crearMensaje("EMPATE")
    }else if(ataqueJugador=="FUEGO" && ataqueEnemigo=="TIERRA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else if(ataqueJugador=="AGUA" && ataqueEnemigo=="FUEGO"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else if(ataqueJugador=="TIERRA" && ataqueEnemigo=="AGUA"){
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML=vidasEnemigo
    }else{
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML=vidasJugador
    }

    revisarVidas()
}

function revisarVidas(){
    if(vidasEnemigo==0){
        crearMensajeFinal("FElICITACIONES! Ganaste :) ");
    }else if(vidasJugador==0){
        crearMensajeFinal("Lo siento, perdiste :c");
    }
}

function crearMensaje(resultado){
    let sectionMensajes=document.getElementById("mensajes")

    let parrafo=document.createElement("p")
    parrafo.innerHTML="Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " "+ resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal(resultadoFinal){
    let sectionMensajes=document.getElementById("mensajes")

    let parrafo=document.createElement("p")
    parrafo.innerHTML=resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.disabled=true
    let botonAgua=document.getElementById("boton-agua")
    botonAgua.disabled=true
    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.disabled=true

    let sectionReiniciar=document.getElementById("reiniciar")
    sectionReiniciar.style.display="block"
}

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) +min)
}

window.addEventListener("load", iniciarJuego)
