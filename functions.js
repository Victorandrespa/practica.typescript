"use strict";
//Funcion promedio ---------------------
function promedio(a, b, c) {
    return ((a + b + c) / 3);
}
function areaTriangulo(base, altura) {
    return ((base * altura) / 2);
}
// Solucion 1 Promedio ----------------
// ubocacion de boton y resultado
const btn_calcularPromedio = document.getElementById("btn_calcularPromedio");
const valor_promedio = document.getElementById("output_promedio_resultado");
// evento click del boton 
if (btn_calcularPromedio) {
    btn_calcularPromedio.addEventListener("click", () => {
        //alert("Funciona!")
        let valor1 = document.getElementById("input_promedio_valor1");
        let valor2 = document.getElementById("input_promedio_valor2");
        let valor3 = document.getElementById("input_promedio_valor3");
        // valores se convierten  a numero
        const num1 = parseFloat(valor1.value) || 0;
        const num2 = parseFloat(valor2.value) || 0;
        const num3 = parseFloat(valor3.value) || 0;
        let resultado = promedio(num1, num2, num3).toFixed(2);
        // imprimir resultado en pagina
        if (valor_promedio) {
            valor_promedio.innerText = "El Promedio es: " + resultado;
        }
    });
}
// Solucion 2 Area de triangulo ----------------
// ubocacion de boton y resultado
const btn_calcularTriangulo = document.getElementById("btn_calcularTriangulo");
const valor_triangulo = document.getElementById("output_triangulo_resultado");
// evento click del boton 
if (btn_calcularTriangulo) {
    btn_calcularTriangulo.addEventListener("click", () => {
        //alert("Funciona!")
        let valor1 = document.getElementById("input_triangulo_valor1");
        let valor2 = document.getElementById("input_triangulo_valor2");
        if (!valor1 || !valor2) {
            alert("Faltan campos de entrada.");
            return;
        }
        // valores se convierten  a numero
        const base = parseFloat(valor1.value) || 0;
        const altura = parseFloat(valor2.value) || 0;
        let resultado = areaTriangulo(base, altura).toFixed(2);
        // imprimir resultado en pagina
        if (valor_triangulo) {
            valor_triangulo.innerText = "El Area es: " + resultado;
        }
    });
}
