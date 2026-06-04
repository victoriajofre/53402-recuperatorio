grammar Conteo;

programa: instruccion+ EOF;
instruccion: conteo;

conteo: PARA ID DESDE NUMERO HASTA NUMERO HACER LLAVE_A sentencia+ LLAVE_C;

sentencia: salida+ | terminar;

salida: IMPRIMIR PAR_A CADENA PAR_C PYC;

terminar: SALIR PYC;

PARA: 'para';
DESDE: 'desde';
HASTA: 'hasta';
HACER: 'hacer';
IMPRIMIR: 'imprimir';
SALIR: 'salir';

LLAVE_A: '{';
LLAVE_C: '}';
PAR_A: '(';
PAR_C: ')';
PYC: ';';

CADENA: '"' [a-zA-Z0-9.!?:;, ]* '"';

ID: [a-zA-Z] [a-zA-Z0-9]*;
NUMERO: [0-9]+;

WS: [ \t\r\n]+ -> skip;