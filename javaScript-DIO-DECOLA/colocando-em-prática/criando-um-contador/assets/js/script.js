var count = 0;
const NUMERO_ATUAL = document.getElementById('numero-atual');

function incremento() {
    count++;
    NUMERO_ATUAL.innerHTML = count;
}

function decremento() {
    count--;
    NUMERO_ATUAL.innerHTML = count;
}
