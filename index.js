import antlr4 from "antlr4";
import fs from "fs";

import ConteoLexer from "./ConteoLexer.js";
import ConteoParser from "./ConteoParser.js";
import CustomConteoVisitor from "./CustomConteoVisitor.js";
const archivo = process.argv[2] || "input.txt";
const input = fs.readFileSync(archivo, "utf8");

const chars = new antlr4.InputStream(input);
const lexer = new ConteoLexer(chars);

const tokens = lexer.getAllTokens();

console.log("===== TABLA LEXEMAS - TOKENS =====");

tokens.forEach(token => {
    console.log(
        "Lexema:", token.text,
        "Tipo:", token.type
    );
});

const chars2 = new antlr4.InputStream(input);
const lexer2 = new ConteoLexer(chars2);

const tokenStream = new antlr4.CommonTokenStream(lexer2);

const parser = new ConteoParser(tokenStream);

parser.buildParseTrees = true;

const tree = parser.programa();
if (parser._syntaxErrors > 0) {
    console.log("\n===== SE ENCONTRARON ERRORES SINTACTICOS =====");
    process.exit(1);
}

console.log("\n===== ARBOL SINTACTICO =====");
console.log(tree.toStringTree(parser.ruleNames));
const visitor = new CustomConteoVisitor();
visitor.visit(tree);

console.log("\n===== TRADUCCION A JAVASCRIPT =====");
console.log(visitor.codigo);

console.log("\n===== EJECUCION =====");
eval(visitor.codigo);
