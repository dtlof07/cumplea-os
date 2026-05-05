// Función para voltear la tarjeta al tocarla
function voltearTarjeta() {
    const tarjeta = document.querySelector('.tarjeta');
    if (tarjeta) {
        tarjeta.classList.toggle('girada');
    }
}

// Función de validación del código secreto
function verificarCodigo() {
    const codigoIngresado = document.getElementById('codigo').value;
    const errorMensaje = document.getElementById('error');
    const bloqueSorpresa = document.getElementById('bloque-sorpresa');
    
    if (codigoIngresado === '0506') {
        errorMensaje.textContent = "";
        bloqueSorpresa.classList.remove('oculto');
        alert("¡Código correcto! El mayor tesoro está por llegar a casa.");
    } else {
        errorMensaje.textContent = "Código incorrecto, ¡intenta de nuevo!";
        setTimeout(() => {
            errorMensaje.textContent = "";
        }, 3000);
    }
}