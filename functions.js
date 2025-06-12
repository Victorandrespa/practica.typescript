"use strict";
// Funciones = Clases
//Funcion promedio ---------------------
function promedio(a, b, c) {
    return ((a + b + c) / 3);
}
;
//Funcion area triangulo ---------------------
function areaTriangulo(base, altura) {
    return ((base * altura) / 2);
}
;
//Funcion par o impar ---------------------
function parimpar(valor) {
    if (valor % 2 === 0) {
        return "PAR";
    }
    else {
        return "IMPAR";
    }
}
;
//Funcion mayor Menor---------------------
function mayormenor(v1, v2, v3) {
    let mayor = Math.max(v1, v2, v3);
    let menor = Math.min(v1, v2, v3);
    return "Mayor: " + mayor + "<br> Menor: " + menor;
}
;
//Funcion Potencia---------------------
function potencia(exp, ba) {
    let resultado = ba ** exp;
    return "Resultado: " + resultado;
}
;
//Funcion Inversa---------------------
function inversa(txt) {
    let inverso = [];
    for (let index = 0; index < txt.length; index++) {
        const letra = txt[index];
        inverso.unshift(letra);
    }
    return inverso.join(",");
}
;
//Funcion factorial---------------------
function factorial(fact) {
    let resultado = 1;
    for (let index = 1; index <= fact; index++) {
        resultado *= index;
    }
    return resultado;
}
;
//Funcion perfecto---------------------
function perfecto(num1) {
    let suma = 0;
    for (let index = 1; index < num1; index++) {
        if (num1 % index === 0) {
            suma += index;
        }
    }
    if (suma === num1) {
        return "Si es # perfecto!";
    }
    else {
        return "No es # Perfecto!";
    }
}
;
//Funcion primo---------------------
function primo(num1) {
    let divisores = [];
    if (num1 < 2) {
        return "Los números menores a 2 no pueden ser primos.";
    }
    for (let index = 1; index <= num1; index++) {
        if (num1 % index === 0) {
            divisores.push(index);
        }
    }
    if (divisores.length === 2) {
        return "Si es # primo! [" + divisores.join(", ") + "]";
    }
    else {
        return "No es # Primo!";
    }
}
;
//Funcion vocales---------------------
function vocales(txt1) {
    let vocales = [];
    let contador = 0;
    let filtro = ["a", "e", "i", "o", "u"];
    for (let index = 0; index < txt1.length; index++) {
        let letra = txt1[index].toLocaleLowerCase();
        if (filtro.includes(letra)) {
            vocales.push(letra);
            contador++;
        }
    }
    return "Vocales: " + contador + " = [ " + vocales.join(", ") + " ]";
}
;
// Botones y eventos = Objetos
// Solucion 1 Promedio ----------------
// ubicacion de boton y resultado
const btn_calcularPromedio = document.getElementById("btn_calcularPromedio");
const valor_promedio = document.getElementById("output_promedio_resultado");
// evento click del boton 
if (btn_calcularPromedio) {
    btn_calcularPromedio.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_promedio_valor1");
        let input2 = document.getElementById("input_promedio_valor2");
        let input3 = document.getElementById("input_promedio_valor3");
        // valores se convierten  a numero
        const num1 = parseFloat(input1.value) || 0;
        const num2 = parseFloat(input2.value) || 0;
        const num3 = parseFloat(input3.value) || 0;
        let resultado = promedio(num1, num2, num3).toFixed(2);
        // imprimir resultado en pagina
        if (valor_promedio) {
            valor_promedio.innerText = "El Promedio es: " + resultado;
        }
    });
}
;
// Solucion 2 Area de triangulo ----------------
// ubicacion de boton y resultado
const btn_calcularTriangulo = document.getElementById("btn_calcularTriangulo");
const valor_triangulo = document.getElementById("output_triangulo_resultado");
// evento click del boton 
if (btn_calcularTriangulo) {
    btn_calcularTriangulo.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_triangulo_valor1");
        let input2 = document.getElementById("input_triangulo_valor2");
        // valores se convierten  a numero
        const base = parseFloat(input1.value) || 0;
        const altura = parseFloat(input2.value) || 0;
        let resultado = areaTriangulo(base, altura).toFixed(2);
        // imprimir resultado en pagina
        if (valor_triangulo) {
            valor_triangulo.innerText = "El Area es: " + resultado;
        }
    });
}
;
// Solucion 3 par o impar ----------------
// ubicacion de boton y resultado
const btn_parimpar = document.getElementById("btn_parimpar");
const analisis = document.getElementById("output_parimpar");
// evento click del boton 
if (btn_parimpar) {
    btn_parimpar.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_parimpar");
        // valores se convierten  a numero
        const num1 = parseFloat(input1.value) || 0;
        let pariedad = parimpar(num1);
        // imprimir resultado en pagina
        if (analisis) {
            analisis.innerText = pariedad;
        }
    });
}
;
// Solucion 4 Mayor o menor ----------------
// ubicacion de boton y resultado
const btn_mayormenor = document.getElementById("btn_mayormenor");
const valor_mayormenor = document.getElementById("output_mayormenor");
// evento click del boton 
if (btn_mayormenor) {
    btn_mayormenor.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_mayormenor_valor1");
        let input2 = document.getElementById("input_mayormenor_valor2");
        let input3 = document.getElementById("input_mayormenor_valor3");
        if (!input1 || !input2 || !input3) {
            alert("Faltan campos de entrada.");
            return;
        }
        const num1 = parseFloat(input1.value);
        const num2 = parseFloat(input2.value);
        const num3 = parseFloat(input3.value);
        const resultado = mayormenor(num1, num2, num3);
        // imprimir resultado en pagina
        if (valor_mayormenor) {
            valor_mayormenor.innerHTML = resultado;
        }
    });
}
;
// Solucion 5 Potencia ----------------
// ubicacion de boton y resultado
const btn_potencia = document.getElementById("btn_potencia");
const valor_potencia = document.getElementById("output_potencia");
// evento click del boton 
if (btn_potencia) {
    btn_potencia.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_potencia_valor1");
        let input2 = document.getElementById("input_potencia_valor2");
        if (!input1 || !input2) {
            alert("Faltan campos de entrada.");
            return;
        }
        const potencial = parseFloat(input1.value);
        const base = parseFloat(input2.value);
        const resultado = potencia(potencial, base);
        // imprimir resultado en pagina
        if (valor_potencia) {
            valor_potencia.innerHTML = resultado.toLocaleString();
        }
    });
}
;
// Solucion 6 Potencia ----------------
// ubicacion de boton y resultado
const btn_inversa = document.getElementById("btn_inversa");
const valor_inversa = document.getElementById("output_inversa");
// evento click del boton 
if (btn_inversa) {
    btn_inversa.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_inversa");
        if (!input1) {
            alert("Faltan campos de entrada.");
            return;
        }
        const resultado = inversa(input1.value);
        // imprimir resultado en pagina
        if (valor_inversa) {
            valor_inversa.innerHTML = resultado;
        }
    });
}
;
// Solucion 7 Factorial ----------------
// ubicacion de boton y resultado
const btn_factorial = document.getElementById("btn_factorial");
const valor_factorial = document.getElementById("output_factorial");
// evento click del boton 
if (btn_factorial) {
    btn_factorial.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_factorial");
        if (!input1 || input1.value.trim() === "") {
            alert("Faltan campos de entrada.");
            return;
        }
        const num = parseInt(input1.value);
        const resultado = factorial(num);
        // imprimir resultado en pagina
        if (valor_factorial) {
            valor_factorial.innerHTML = "Factorial: " + resultado;
        }
    });
}
;
// Solucion 8 numero perfecto ----------------
// ubicacion de boton y resultado
const btn_perfecto = document.getElementById("btn_perfecto");
const valor_perfecto = document.getElementById("output_perfecto");
// evento click del boton 
if (btn_perfecto) {
    btn_perfecto.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_perfecto");
        if (!input1) {
            alert("Faltan campos de entrada.");
            return;
        }
        const num = parseInt(input1.value);
        const resultado = perfecto(num);
        // imprimir resultado en pagina
        if (valor_perfecto) {
            valor_perfecto.innerHTML = resultado;
        }
    });
}
;
// Solucion 9 Primos ----------------
// ubicacion de boton y resultado
const btn_primo = document.getElementById("btn_primo");
const valor_primo = document.getElementById("output_primo");
// evento click del boton 
if (btn_primo) {
    btn_primo.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_primo");
        if (!input1) {
            alert("Faltan campos de entrada.");
            return;
        }
        const num = parseInt(input1.value);
        const resultado = primo(num);
        // imprimir resultado en pagina
        if (valor_primo) {
            valor_primo.innerHTML = resultado;
        }
    });
}
;
// Solucion 10 Vocales ----------------
// ubicacion de boton y resultado
const btn_vocales = document.getElementById("btn_vocales");
const valor_vocales = document.getElementById("output_vocales");
// evento click del boton 
if (btn_vocales) {
    btn_vocales.addEventListener("click", () => {
        //alert("Funciona!")
        let input1 = document.getElementById("input_vocales");
        if (!input1) {
            alert("Faltan campos de entrada.");
            return;
        }
        const txt1 = input1.value;
        const resultado = vocales(txt1);
        // imprimir resultado en pagina
        if (valor_vocales) {
            valor_vocales.innerHTML = resultado;
        }
    });
}
;
