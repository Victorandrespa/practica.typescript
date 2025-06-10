
// Funciones = Clases


//Funcion promedio ---------------------
function promedio(a: number, b: number, c: number): number {
  return ((a + b + c) / 3);
};
//Funcion area triangulo ---------------------
function areaTriangulo(base: number, altura: number): number {
  return ((base * altura) / 2);
};
//Funcion par o impar ---------------------
function parimpar(valor: number): string {
  if (valor %2 === 0) {
    return "par"
  } else {
    return "impar";
  }
};



// Botones y eventos = Objetos



// Solucion 1 Promedio ----------------

// ubicacion de boton y resultado
const btn_calcularPromedio = document.getElementById("btn_calcularPromedio");
const valor_promedio = document.getElementById("output_promedio_resultado");

// evento click del boton 
if (btn_calcularPromedio) {
  btn_calcularPromedio.addEventListener("click", () => {
    //alert("Funciona!")
    let valor1 = document.getElementById("input_promedio_valor1") as HTMLInputElement;
    let valor2 = document.getElementById("input_promedio_valor2") as HTMLInputElement;
    let valor3 = document.getElementById("input_promedio_valor3") as HTMLInputElement;

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
};



// Solucion 2 Area de triangulo ----------------

// ubicacion de boton y resultado
const btn_calcularTriangulo = document.getElementById("btn_calcularTriangulo");
const valor_triangulo = document.getElementById("output_triangulo_resultado");

// evento click del boton 
if (btn_calcularTriangulo) {
  btn_calcularTriangulo.addEventListener("click", () => {
    //alert("Funciona!")
    let valor1 = document.getElementById("input_triangulo_valor1") as HTMLInputElement;
    let valor2 = document.getElementById("input_triangulo_valor2") as HTMLInputElement;

    // valores se convierten  a numero
    const base = parseFloat(valor1.value) || 0;
    const altura = parseFloat(valor2.value) || 0;

    let resultado = areaTriangulo(base, altura).toFixed(2);

    // imprimir resultado en pagina
    if (valor_triangulo) {
      valor_triangulo.innerText = "El Area es: " + resultado;
    }
  });
};



// Solucion 3 par o impar ----------------

// ubicacion de boton y resultado
const btn_parimpar = document.getElementById("btn_parimpar");
const analisis = document.getElementById("output_parimpar");

// evento click del boton 
if (btn_parimpar) {
  btn_parimpar.addEventListener("click", () => {
    //alert("Funciona!")
    let valor1 = document.getElementById("input_parimpar") as HTMLInputElement;

    // valores se convierten  a numero
    const valor = parseFloat(valor1.value) || 0;
    
    let pariedad = parimpar(valor);

    // imprimir resultado en pagina
    if (analisis) {
      analisis.innerText = "El Area es: " + pariedad;
    }
  });
};