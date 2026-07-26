let pantalla = document.getElementById("pantalla");
let expresion = "";

function agregar(valor) {
    expresion += valor;
    pantalla.innerText = expresion;
}

function operar(op) {
    if (op === '√') {
        expresion = Math.sqrt(parseFloat(expresion)).toString();
    } else if (op === '^') {
        expresion = Math.pow(parseFloat(expresion), 2).toString();
    } else if (op === '%') {
        expresion = (parseFloat(expresion) / 100).toString();
    } else {
        expresion += op;
    }
    pantalla.innerText = expresion;
}

function calcular() {
    try {
        expresion = eval(expresion).toString();
        pantalla.innerText = expresion;
    } catch {
        pantalla.innerText = "Error";
        expresion = "";
    }
}

function limpiar() {
    expresion = "";
    pantalla.innerText = "0";
}

function borrar() {
    expresion = expresion.slice(0, -1);
    pantalla.innerText = expresion || "0";
}
