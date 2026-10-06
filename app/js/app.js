// 1. Alternar tema Oscuro / Claro
function alternarModoOscuro() {
    document.body.classList.toggle('modo-oscuro');
}

// 2. Determinar el número mayor entre tres valores
function obtenerMayor() {
    const n1 = parseFloat(document.getElementById('numA').value) || 0;
    const n2 = parseFloat(document.getElementById('numB').value) || 0;
    const n3 = parseFloat(document.getElementById('numC').value) || 0;
    const mayor = Math.max(n1, n2, n3);
    document.getElementById('res2').innerText = `El número mayor es: ${mayor}`;
}

// 3. Generar una contraseña aleatoria sencilla
function generarPassword() {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
    let pass = '';
    for (let i = 0; i < 10; i++) {
        pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    document.getElementById('res3').innerText = `Contraseña: ${pass}`;
}

// 4. Calcular el promedio de tres notas
function calcularPromedio() {
    const nota1 = parseFloat(document.getElementById('nota1').value) || 0;
    const nota2 = parseFloat(document.getElementById('nota2').value) || 0;
    const nota3 = parseFloat(document.getElementById('nota3').value) || 0;
    const promedio = (nota1 + nota2 + nota3) / 3;
    const estado = promedio >= 11 ? 'Aprobado' : 'Desaprobado';
    document.getElementById('res4').innerText = `Promedio: ${promedio.toFixed(2)} (${estado})`;
}

// 5. Convertir segundos a formato Minutos:Segundos
function convertirTiempo() {
    const totalSeg = parseInt(document.getElementById('segundos').value) || 0;
    const mins = Math.floor(totalSeg / 60);
    const segs = totalSeg % 60;
    const segsFormateados = segs < 10 ? `0${segs}` : segs;
    document.getElementById('res5').innerText = `Tiempo: ${mins}:${segsFormateados}`;
}

// 6. Contar las vocales de una palabra
function contarVocales() {
    const texto = document.getElementById('textoVocales').value.toLowerCase();
    const coincidencias = texto.match(/[a_e_i_o_u_á_é_í_ó_ú]/gi);
    const cantidad = coincidencias ? coincidencias.length : 0;
    document.getElementById('res6').innerText = `Cantidad de vocales: ${cantidad}`;
}

// 7. Calcular el Índice de Masa Corporal (IMC)
function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value) || 0;
    const altura = parseFloat(document.getElementById('altura').value) || 0;
    if (peso > 0 && altura > 0) {
        const imc = peso / (altura * altura);
        document.getElementById('res7').innerText = `Tu IMC es: ${imc.toFixed(2)}`;
    } else {
        document.getElementById('res7').innerText = 'Ingresa valores válidos.';
    }
}

// 8. Generar una tabla de multiplicar
function generarTablaMultiplicar() {
    const num = parseInt(document.getElementById('numTabla').value);
    if (isNaN(num)) {
        document.getElementById('res8').innerText = 'Ingresa un número.';
        return;
    }
    let resultado = '';
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }
    document.getElementById('res8').innerText = resultado;
}

// 9. Verificar si un año es bisiesto
function esBisiesto() {
    const anio = parseInt(document.getElementById('anio').value);
    if (isNaN(anio)) {
        document.getElementById('res9').innerText = 'Ingresa un año válido.';
        return;
    }
    const bisiesto = (anio % 4 === 0 && anio % 100 !== 0) || (anio % 400 === 0);
    document.getElementById('res9').innerText = bisiesto ? 'Es año bisiesto' : 'No es bisiesto';
}

// 10. Agregar items a una lista dinámica
function agregarALista() {
    const elemento = document.getElementById('itemLista').value;
    if (!elemento.trim()) return;
    const ul = document.getElementById('listaDinamica');
    const li = document.createElement('li');
    li.textContent = elemento;
    ul.appendChild(li);
    document.getElementById('itemLista').value = '';
}

// 11. Copiar texto al portapapeles
function copiarTexto() {
    const texto = document.getElementById('textoCopiar').value;
    if (texto) {
        navigator.clipboard.writeText(texto);
        document.getElementById('res11').innerText = '¡Texto copiado!';
    }
}

// 12. Convertir Soles (PEN) a Dólares (USD) - Tasa referencial 3.75
function convertirMoneda() {
    const soles = parseFloat(document.getElementById('montoSoles').value) || 0;
    const dolares = soles / 3.75;
    document.getElementById('res12').innerText = `Equivale a: $${dolares.toFixed(2)} USD`;
}

// 13. Reemplazar espacios en blanco por guiones
function reemplazarEspacios() {
    const frase = document.getElementById('fraseEspacios').value;
    const conGuiones = frase.trim().replace(/\s+/g, '-');
    document.getElementById('res13').innerText = conGuiones;
}

// 14. Calcular el factorial de un número
function calcularFactorial() {
    const num = parseInt(document.getElementById('numFactorial').value);
    if (isNaN(num) || num < 0) {
        document.getElementById('res14').innerText = 'Ingresa un entero positivo.';
        return;
    }
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact *= i;
    }
    document.getElementById('res14').innerText = `El factorial de ${num} es: ${fact}`;
}

// 15. Calcular descuento de una compra
function calcularDescuento() {
    const precio = parseFloat(document.getElementById('precio').value) || 0;
    const porcentaje = parseFloat(document.getElementById('descuento').value) || 0;
    const total = precio - (precio * (porcentaje / 100));
    document.getElementById('res15').innerText = `Precio final: $${total.toFixed(2)}`;
}