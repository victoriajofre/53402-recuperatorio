# Analizador con ANTLR4

## Alumno
Victoria Jofre

## Descripción

Este proyecto implementa un analizador léxico, sintáctico y traductor utilizando ANTLR4 y JavaScript.

La gramática permite reconocer estructuras de conteo del tipo:

para contador desde 1 hasta 3 hacer {
    imprimir("Hola");
}

## Funcionalidades

- Análisis léxico.
- Generación de árbol sintáctico.
- Traducción a JavaScript.
- Ejecución automática del código traducido.

## Ejemplo

Entrada:

para contador desde 1 hasta 3 hacer {
    imprimir("Hola");
}

Salida:

Hola
Hola
Hola

## Archivos principales

- Conteo.g4
- index.js
- CustomConteoVisitor.js
- correcto1.txt
- correcto2.txt
- incorrecto1.txt
- incorrecto2.txt
