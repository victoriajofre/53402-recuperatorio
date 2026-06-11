import ConteoVisitor from "./ConteoVisitor.js";

export default class CustomConteoVisitor extends ConteoVisitor {
    constructor() {
        super();
        this.codigo = "";
    }

    visitPrograma(ctx) {
        return this.visitChildren(ctx);
    }

    visitConteo(ctx) {
        const id = ctx.ID().getText();
        const desde = ctx.NUMERO(0).getText();
        const hasta = ctx.NUMERO(1).getText();

        this.codigo += `for (let ${id} = ${desde}; ${id} <= ${hasta}; ${id}++) {\n`;

        ctx.sentencia().forEach(s => this.visit(s));

        this.codigo += `}\n`;
        return this.codigo;
    }

    visitSalida(ctx) {
        const texto = ctx.CADENA().getText();
        this.codigo += `  console.log(${texto});\n`;
    }

    visitTerminar(ctx) {
        this.codigo += `  break;\n`;
    }
}
