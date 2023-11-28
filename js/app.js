const btnIniciar = document.querySelector('.btn-outline-success');
const btnPausar = document.querySelector('.btn-outline-warning');
const btnReiniciar = document.querySelector('.btn-outline-danger');
const cronometro = document.querySelector('h2');
let minuto = 0;
let segundo = 0;
let centesima = 0;
let idInterval;

function manejarCronometro() {
    if (minuto < 10 && segundo < 10) {
        cronometro.innerHTML = `0${minuto} : 0${segundo} : ${centesima}`
        centesima++;

        if (centesima === 100) {
            segundo++;
            centesima = 0;
        }
        if (segundo === 60) {
            minuto++;
            segundo = 0;
        }
    } else if (segundo < 10) {
        cronometro.innerHTML = `${minuto} : 0${segundo} : ${centesima}`
        centesima++;
        if (centesima === 100) {
            segundo++;
            centesima = 0;
        }
        if (segundo === 60) {
            minuto++;
            segundo = 0;
        }
    } else if (minuto < 10) {
        cronometro.innerHTML = `0${minuto} : ${segundo} : ${centesima}`
        centesima++;
        if (centesima === 100) {
            segundo++;
            centesima = 0;
        }
        if (segundo === 60) {
            minuto++;
            segundo = 0;
        }
    } else {
        cronometro.innerHTML = `${minuto} : ${segundo} : ${centesima}`
        centesima++;
        if (centesima === 100) {
            segundo++;
            centesima = 0;
        }
        if (segundo === 60) {
            minuto++;
            segundo = 0;
        }
    }
}

function iniciarCronometro() {
    idInterval = setInterval(manejarCronometro, 10)
    btnIniciar.disabled = true;
}
function pausarCronometro() {
    clearInterval(idInterval);
    btnIniciar.disabled = false;
}
function reiniciarCronometro() {
    clearInterval(idInterval);
    minuto = 0;
    segundo = 0;
    centesima = 0;
    cronometro.innerHTML = `0${minuto} : 0${segundo} : ${centesima}`
    btnIniciar.disabled = false;
}

manejarCronometro()
btnIniciar.addEventListener('click', iniciarCronometro);
btnPausar.addEventListener('click', pausarCronometro);
btnReiniciar.addEventListener('click', reiniciarCronometro);

