let numSecreto = 0;
let contador = 1;
let listaNumeroSorteado = [];
let numeroMaximo = 10;


console.log(numSecreto);

function cambiarElementos(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    if (numeroDeUsuario === numSecreto) {
        cambiarElementos('p', `Acertaste el numero en ${contador} ${contador == 1 ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else
    if (numeroDeUsuario > numSecreto) {
        cambiarElementos('p', 'El numero es menor');
    } else {
        cambiarElementos('p', 'El numero es mayor');
    }
    contador++;
    limpiaCaja();
}

function limpiaCaja() {
    document.getElementById('valorUsuario').value = '';
}

function condicionesInicial(){
    cambiarElementos('h1', 'Juego del numero secreto');
    cambiarElementos('p', `Indica un numero del 1 al ${numeroMaximo}`);
    numSecreto = numeroSecreto();
    contador = 1;
}

function reiniciarJuego(){
    //Limpiar caja
    limpiaCaja();
    condicionesInicial();
    document.querySelector('#reiniciar').setAttribute('disabled', true);
    
}

function numeroSecreto(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    if(listaNumeroSorteado.length == numeroMaximo){
        condicionesInicial('p', 'Se han usado todos los numeros posibles');
    } else{
        //Si el nuemero fue generado se incluye en la lista
        if(listaNumeroSorteado.includes(numeroGenerado)){
            return numeroSecreto();
        } else{
            listaNumeroSorteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }
    
}



condicionesInicial();

