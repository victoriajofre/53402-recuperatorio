// Generated from Conteo.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import ConteoListener from './ConteoListener.js';
import ConteoVisitor from './ConteoVisitor.js';

const serializedATN = [4,1,15,54,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,1,0,4,0,14,8,0,11,0,12,0,15,1,0,1,0,1,1,1,1,1,2,1,2,1,2,1,2,1,2,
1,2,1,2,1,2,1,2,4,2,31,8,2,11,2,12,2,32,1,2,1,2,1,3,4,3,38,8,3,11,3,12,3,
39,1,3,3,3,43,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,0,0,6,0,2,4,6,
8,10,0,0,51,0,13,1,0,0,0,2,19,1,0,0,0,4,21,1,0,0,0,6,42,1,0,0,0,8,44,1,0,
0,0,10,50,1,0,0,0,12,14,3,2,1,0,13,12,1,0,0,0,14,15,1,0,0,0,15,13,1,0,0,
0,15,16,1,0,0,0,16,17,1,0,0,0,17,18,5,0,0,1,18,1,1,0,0,0,19,20,3,4,2,0,20,
3,1,0,0,0,21,22,5,1,0,0,22,23,5,13,0,0,23,24,5,2,0,0,24,25,5,14,0,0,25,26,
5,3,0,0,26,27,5,14,0,0,27,28,5,4,0,0,28,30,5,7,0,0,29,31,3,6,3,0,30,29,1,
0,0,0,31,32,1,0,0,0,32,30,1,0,0,0,32,33,1,0,0,0,33,34,1,0,0,0,34,35,5,8,
0,0,35,5,1,0,0,0,36,38,3,8,4,0,37,36,1,0,0,0,38,39,1,0,0,0,39,37,1,0,0,0,
39,40,1,0,0,0,40,43,1,0,0,0,41,43,3,10,5,0,42,37,1,0,0,0,42,41,1,0,0,0,43,
7,1,0,0,0,44,45,5,5,0,0,45,46,5,9,0,0,46,47,5,12,0,0,47,48,5,10,0,0,48,49,
5,11,0,0,49,9,1,0,0,0,50,51,5,6,0,0,51,52,5,11,0,0,52,11,1,0,0,0,4,15,32,
39,42];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class ConteoParser extends antlr4.Parser {

    static grammarFileName = "Conteo.g4";
    static literalNames = [ null, "'para'", "'desde'", "'hasta'", "'hacer'", 
                            "'imprimir'", "'salir'", "'{'", "'}'", "'('", 
                            "')'", "';'" ];
    static symbolicNames = [ null, "PARA", "DESDE", "HASTA", "HACER", "IMPRIMIR", 
                             "SALIR", "LLAVE_A", "LLAVE_C", "PAR_A", "PAR_C", 
                             "PYC", "CADENA", "ID", "NUMERO", "WS" ];
    static ruleNames = [ "programa", "instruccion", "conteo", "sentencia", 
                         "salida", "terminar" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = ConteoParser.ruleNames;
        this.literalNames = ConteoParser.literalNames;
        this.symbolicNames = ConteoParser.symbolicNames;
    }



	programa() {
	    let localctx = new ProgramaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, ConteoParser.RULE_programa);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 13; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 12;
	            this.instruccion();
	            this.state = 15; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
	        this.state = 17;
	        this.match(ConteoParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	instruccion() {
	    let localctx = new InstruccionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, ConteoParser.RULE_instruccion);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.conteo();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conteo() {
	    let localctx = new ConteoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, ConteoParser.RULE_conteo);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.match(ConteoParser.PARA);
	        this.state = 22;
	        this.match(ConteoParser.ID);
	        this.state = 23;
	        this.match(ConteoParser.DESDE);
	        this.state = 24;
	        this.match(ConteoParser.NUMERO);
	        this.state = 25;
	        this.match(ConteoParser.HASTA);
	        this.state = 26;
	        this.match(ConteoParser.NUMERO);
	        this.state = 27;
	        this.match(ConteoParser.HACER);
	        this.state = 28;
	        this.match(ConteoParser.LLAVE_A);
	        this.state = 30; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 29;
	            this.sentencia();
	            this.state = 32; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===5 || _la===6);
	        this.state = 34;
	        this.match(ConteoParser.LLAVE_C);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	sentencia() {
	    let localctx = new SentenciaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, ConteoParser.RULE_sentencia);
	    try {
	        this.state = 42;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 37; 
	            this._errHandler.sync(this);
	            var _alt = 1;
	            do {
	            	switch (_alt) {
	            	case 1:
	            		this.state = 36;
	            		this.salida();
	            		break;
	            	default:
	            		throw new antlr4.error.NoViableAltException(this);
	            	}
	            	this.state = 39; 
	            	this._errHandler.sync(this);
	            	_alt = this._interp.adaptivePredict(this._input,2, this._ctx);
	            } while ( _alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER );
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 41;
	            this.terminar();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	salida() {
	    let localctx = new SalidaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, ConteoParser.RULE_salida);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 44;
	        this.match(ConteoParser.IMPRIMIR);
	        this.state = 45;
	        this.match(ConteoParser.PAR_A);
	        this.state = 46;
	        this.match(ConteoParser.CADENA);
	        this.state = 47;
	        this.match(ConteoParser.PAR_C);
	        this.state = 48;
	        this.match(ConteoParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	terminar() {
	    let localctx = new TerminarContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, ConteoParser.RULE_terminar);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 50;
	        this.match(ConteoParser.SALIR);
	        this.state = 51;
	        this.match(ConteoParser.PYC);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

ConteoParser.EOF = antlr4.Token.EOF;
ConteoParser.PARA = 1;
ConteoParser.DESDE = 2;
ConteoParser.HASTA = 3;
ConteoParser.HACER = 4;
ConteoParser.IMPRIMIR = 5;
ConteoParser.SALIR = 6;
ConteoParser.LLAVE_A = 7;
ConteoParser.LLAVE_C = 8;
ConteoParser.PAR_A = 9;
ConteoParser.PAR_C = 10;
ConteoParser.PYC = 11;
ConteoParser.CADENA = 12;
ConteoParser.ID = 13;
ConteoParser.NUMERO = 14;
ConteoParser.WS = 15;

ConteoParser.RULE_programa = 0;
ConteoParser.RULE_instruccion = 1;
ConteoParser.RULE_conteo = 2;
ConteoParser.RULE_sentencia = 3;
ConteoParser.RULE_salida = 4;
ConteoParser.RULE_terminar = 5;

class ProgramaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_programa;
    }

	EOF() {
	    return this.getToken(ConteoParser.EOF, 0);
	};

	instruccion = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(InstruccionContext);
	    } else {
	        return this.getTypedRuleContext(InstruccionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterPrograma(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitPrograma(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitPrograma(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class InstruccionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_instruccion;
    }

	conteo() {
	    return this.getTypedRuleContext(ConteoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterInstruccion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitInstruccion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitInstruccion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConteoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_conteo;
    }

	PARA() {
	    return this.getToken(ConteoParser.PARA, 0);
	};

	ID() {
	    return this.getToken(ConteoParser.ID, 0);
	};

	DESDE() {
	    return this.getToken(ConteoParser.DESDE, 0);
	};

	NUMERO = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(ConteoParser.NUMERO);
	    } else {
	        return this.getToken(ConteoParser.NUMERO, i);
	    }
	};


	HASTA() {
	    return this.getToken(ConteoParser.HASTA, 0);
	};

	HACER() {
	    return this.getToken(ConteoParser.HACER, 0);
	};

	LLAVE_A() {
	    return this.getToken(ConteoParser.LLAVE_A, 0);
	};

	LLAVE_C() {
	    return this.getToken(ConteoParser.LLAVE_C, 0);
	};

	sentencia = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SentenciaContext);
	    } else {
	        return this.getTypedRuleContext(SentenciaContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterConteo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitConteo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitConteo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SentenciaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_sentencia;
    }

	salida = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(SalidaContext);
	    } else {
	        return this.getTypedRuleContext(SalidaContext,i);
	    }
	};

	terminar() {
	    return this.getTypedRuleContext(TerminarContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterSentencia(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitSentencia(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitSentencia(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class SalidaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_salida;
    }

	IMPRIMIR() {
	    return this.getToken(ConteoParser.IMPRIMIR, 0);
	};

	PAR_A() {
	    return this.getToken(ConteoParser.PAR_A, 0);
	};

	CADENA() {
	    return this.getToken(ConteoParser.CADENA, 0);
	};

	PAR_C() {
	    return this.getToken(ConteoParser.PAR_C, 0);
	};

	PYC() {
	    return this.getToken(ConteoParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterSalida(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitSalida(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitSalida(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TerminarContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = ConteoParser.RULE_terminar;
    }

	SALIR() {
	    return this.getToken(ConteoParser.SALIR, 0);
	};

	PYC() {
	    return this.getToken(ConteoParser.PYC, 0);
	};

	enterRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.enterTerminar(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof ConteoListener ) {
	        listener.exitTerminar(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof ConteoVisitor ) {
	        return visitor.visitTerminar(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




ConteoParser.ProgramaContext = ProgramaContext; 
ConteoParser.InstruccionContext = InstruccionContext; 
ConteoParser.ConteoContext = ConteoContext; 
ConteoParser.SentenciaContext = SentenciaContext; 
ConteoParser.SalidaContext = SalidaContext; 
ConteoParser.TerminarContext = TerminarContext; 
