let ataqueJugador
let ataqueEnemigo

function iniciarJuego(){
    let botonMascotaJugador=document.getElementById("boton-mascota")

    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego=document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua=document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra=document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)
}

function seleccionarMascotaJugador(){
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
    
}

function crearMensaje(){
    let sectionMensajes=document.getElementById("mensajes")

    let parrafo=document.createElement("p")
    parrafo.innerHTML="Tu mascota atacó con " + ataqueJugador + ", la mascota del enemigo atacó con " + ataqueEnemigo + " - PENDIENTE 🦷"

    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min +1) +min)
}

window.addEventListener("load", iniciarJuego)