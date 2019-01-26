const listener = require('./lib/lilu_grammarListener').lilu_grammarListener;
const fs = require('fs');
const SymbolTable = require('./SymbolTable').symbolTable;
const Symbol = require('./SymbolTable').symbol;
const json = require('json-stringify-safe')
const path = require('path');

const {
  SemanticOperandTypeMismatchError,
  SemanticFatherTypeimplementationError,
  SemanticScopeError,
  SemanticDestructError,
  SemanticTypeDeclaredError,
  SemanticNotDeclaredReferenceError,
  SemanticStartError
} = require(path.resolve('error', 'helper'));
const errors = [];

function errorOutput(){
    let obj = {}
    for(i in errors){
        let error = errors[i]
        let obj2 = {
            code: error.code,
            message: error.message,
            fileStack: error.stack,
            stack: error.payload? error.payload.stack: error.stack,
            symbol: error.symbol
        }
        obj[i] = obj2;
    }
    obj['top'] = undefined;
    return obj;
}

// #region code
if (!Array.prototype.top){
  Array.prototype.top = function(){
      return this[this.length - 1];
  };
};

function assignTypeCheck(left, right, ctx, stateStack) {
    let exprType = relopType(left, right, ctx, stateStack);
    if (exprType !== left)
        throw new TypeError(`type Error: expected ${t1} but found ${t2} in ${/* TODO: error address */null}`);
}
// #endregion

// #region functions

//get text of a node in sample shape
function toText(ctx) {
    if (ctx !== null) {
        return ctx.getText()
    }
    return null
}

function start(ctx) {
  return {
    start: ctx.start.start,
    stop: ctx.start.stop,
    line: ctx.start.line,
    column: ctx.start.column
  }
}

function stop(ctx){
  return {
    start: ctx.stop.start,
    stop: ctx.stop.stop,
    line: ctx.stop.line,
    column: ctx.stop.column
  }
}

function payloadCreator(ctx, stack, message) {
  let obj = {
    message,
    stack: []
  }

  for(let state of stack){
    obj.stack.push(`at ${state.name} ((line: ${state.cursor.start.line},column: ${state.cursor.start.column}) - (line: ${state.cursor.stop.line},column: ${state.cursor.stop.column}))`);
  }
  obj.stack.push(`at ${toText(ctx)} ((line: ${start(ctx).line},column: ${start(ctx).column}) - (line: ${stop(ctx).line},column: ${stop(ctx).column}))`)
  return obj
}

//fixme chain cast?
function relopType(t1, t2, ctx, stateStack) {
  if(t1 && t2){
    //go up to find lub
    if (t1 === t2)
        return t1;
    else
        switch (t1) {
            case 'int':
                if (t2 === 'float')
                    return 'float';
                else if (t2 === 'bool')
                    return 'int';
                // else if (t2 === 'string')
                //     return 'string';
                break;

            case 'float':
                if (t2 === 'int')
                    return 'float';
                break;

            case 'string':
                if (t2 === 'bool')
                    return 'string';
                else if (t2 === 'int')
                    return 'string';
                break;
            case 'bool':
                return t1;

        }
    let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, stateStack, `expected ${t1} but found ${t2}`));
    errors.push(e);
    // throw e;
    return 'error'
  } else {
    throw new Error(`t1: ${t1}, t2: ${t2}; found undefined or null`);
  }
}

function cursorCreator(name, ctx){
  return {name, cursor: {
    start: start(ctx),
    stop: stop(ctx)
  }}
}

function widen(a, t, w) {
    if (t === w) return a;
    else //if ()
        return max(t, w);
}

// #endregion
class Listener extends listener {
    constructor(address) {
        super();
        //global symbol table
        this.globalTable = null;
        this.state = [];
        this.address = address;
    }


    enterProgram(ctx) {
        //define global table
        this.globalTable = new SymbolTable('program', 'root', null);
        this.state.push(cursorCreator('program', ctx));
    }

    exitProgram(ctx) {
        this.state.pop();
        let start = this.globalTable.getSymbolInheritance('start')
        let startScope = start.getChildScope();
        if(!(start !== 'error' && start.typeObj.type === 'function'  && startScope.symbols.length === 1 && startScope.symbols[0].typeObj.type === 'int' && startScope.symbols[0].typeObj.return==true)){
            let e = new SemanticStartError(payloadCreator(ctx, this.statem, `'(int)=function start()' is not defined`))
            fs.writeFileSync('.temp/symbolTable_output.json', json(e, null, 2), 'utf-8');
        } else {
            if(errors.length != 0){
                let outputError = errorOutput()
                fs.writeFileSync('.temp/symbolTable_output.json', json(outputError, null, 2), 'utf-8');
            } else {
            fs.writeFileSync('.temp/symbolTable_output.json', json(this.globalTable, null, 2), 'utf-8');
            }
        }
    }

    // #region program

    // #region declare

    // skip dcl grammar
    enterFt_dcl(ctx) {
        this.state.push(cursorCreator('declare', ctx));
        ctx.table = this.globalTable;
    }

    exitFt_dcl(ctx) {
        this.state.pop();
    }

    enterType_dcl(ctx) {
        let idCtx = ctx.ID();
        let id = toText(idCtx);
        let typeObj = {
            type: 'userType',
            value: id
        };
        if (this.state.top().name === 'declare') {
            let typeTable = new SymbolTable(id, {type: id}, null)
            let typeSymbol = new Symbol(id, typeObj, this.globalTable.getNewOffset(), typeTable);
            let result = this.globalTable.addSymbol(typeSymbol, ctx);
            if(result === 'error'){
              let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state,`identifier ${symbol.id} has already been declared before`));
              errors.push(e);
            }
        }
    }

    // #region function declare

    exitFunc_dcl(ctx) {
        let returnableArgs = null;
        let returnableArgsTypes = null;
        let mainArgs = null;
        let mainArgsTypes = null;
        if (ctx.ASSIGN()) {
            returnableArgs = ctx.getChild(1);
            returnableArgsTypes = returnableArgs.typeObj;
            if (ctx.children.length === 8) {
                mainArgsTypes = [];
            } else {
                mainArgs = ctx.getChild(6);
                mainArgsTypes = mainArgs.typeObj;
            }
        } else {
            returnableArgsTypes = [];
            if (ctx.children.length === 4) {
                mainArgsTypes = [];
            } else {
                mainArgs = ctx.getChild(2);
                mainArgsTypes = mainArgs.typeObj;
            }
        }
        //TODO: BUG: when place '.' instead of ',' it throw mainArgs is undefined!

        // creation for function table, pointing to global table by parent scope
        let functionTable = new SymbolTable(toText(ctx.ID()), {
            type: 'function',
            defineValue: toText(ctx)
        }, this.globalTable);

        // creation for function symbol that is a way for access to function table, pointing to
        // function table by child scope
        let functionSymbol = new Symbol(toText(ctx.ID()), {
            type: 'function',
            defineValue: toText(ctx)
        }, this.globalTable.getNewOffset(), functionTable)

        // add function symbol to global table
        let result = this.globalTable.addSymbol(functionSymbol, ctx);
        if(result === 'error'){
          let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state,`identifier ${symbol.id} has already been declared before`));
          errors.push(e);
        }

        // add return symbols to function table
        returnableArgsTypes.forEach(typeObj => {
            let argSymbol = new Symbol(typeObj.id, {
                type: typeObj.type,
                value: typeObj.value,
                return: true
            }, functionTable.getNewOffset(), null);
            let result =  functionTable.addSymbol(argSymbol, ctx);
            if(result === 'error'){
              let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state,`identifier ${symbol.id} has already been declared before`));
              errors.push(e);
            }
        });

        // add arguments symbols to function table
        mainArgsTypes.forEach(typeObj => {
            let argSymbol = new Symbol(typeObj.id, {
                type: typeObj.type,
                value: typeObj.value,
                return: false
            }, functionTable.getNewOffset(), null);
            let result = functionTable.addSymbol(argSymbol, ctx);
            if(result === 'error'){
              let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state,`identifier ${symbol.id} has already been declared before`));
              errors.push(e);
            }
        });

    }

    exitArgsType(ctx) {
        //TODO: arrays
        ctx.typeObj = [ctx.type().typeObj]
    }

    exitArgsArgs(ctx) {
        let argsType = ctx.args().typeObj;
        let newArgType = ctx.type().typeObj;
        argsType.push(newArgType)
        ctx.typeObj = argsType;
    }

    exitArgs_variableType(ctx) {
        //TODO: arrays
        let typeObj = {
            type: ctx.type().typeObj.type,
            id: toText(ctx.ID())
        };
        ctx.typeObj = [typeObj]
    }

    exitArgs_variableArgs_variable(ctx) {
        let argsType = ctx.args_variable().typeObj;
        let newArg = ctx.type();
        let newId = ctx.ID();
        let newArgTypeObj = {
            type: newArg.typeObj.type,
            id: toText(newId)
        };
        argsType.push(newArgTypeObj)
        ctx.typeObj = argsType;
    }

    // #endregion
    enterVariable_def(ctx){
        ctx.table = ctx.parentCtx.table;
    }
    exitVariable_def(ctx) {
        let preType = (ctx.CONST() ? 'const' : 'var');
        let type = toText(ctx.type());
        let vars = ctx.variable_val();
        let typeObj = null;

        let table = ctx.table;

        vars.forEach(vr => {
            let id = vr.id;
            let vrType = vr.typeObj;
            vrType.preType = preType;
            if (vrType) {
                if (vrType.type !== type) {
                  let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected ${type} but found ${vrType.type}`))
                  errors.push(e);
                }
                typeObj = vrType;
            } else {
                typeObj = {
                    type: type,
                    value: undefined
                }
            }
            let vrSymbol = new Symbol(id, typeObj, table.getNewOffset(), null);
            let result = table.addSymbol(vrSymbol, ctx);
            if(result === 'error'){
              let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state,`identifier ${symbol.id} has already been declared before`));
              errors.push(e);
            }
        });

        //if()

    }

    enterVariable_val(ctx) {
        ctx.table = ctx.parentCtx.table
    }

    exitVariable_val(ctx) {
        let expr = ctx.expr();
        let ref = ctx.ref();
        if (expr) {
            ctx.typeObj = {
                type: expr.typeObj.type,
                value: expr.value
            }
        } else {
            ctx.typeObj = {}
        }
        ctx.id = toText(ref);
    }

    enterRef(ctx) {
        ctx.table = ctx.parentCtx.table
    }

    exitRef(ctx) {
        let id = toText(ctx.ID());
        let table = ctx.table
        let symbol = table.getSymbolInheritance(id);
        //TODO: array
        ctx.symbol = symbol;
    }

    // #region expr

    enterExprUnary_op(ctx) {
    }

    exitExprUnary_op(ctx) {
        let op = ctx.getChild(1);
        let operator = ctx.getChild(0);

        switch (toText(operator)) {
            case '-':
            ctx.typeObj = {type: op.typeObj.type}
            case '!':
            ctx.typeObj = {type: (relopType(op.typeObj.type, 'bool', ctx, this.state) ? 'bool' : '')};
            case '~':
            ctx.typeObj = {type: (relopType(op.typeObj.type, 'int', ctx, this.state) ? 'int' : '')};

        }
    }

    enterExprExprMulDivMod(ctx) {
    }

    exitExprExprMulDivMod(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);

        ctx.typeObj = {
            type: relopType(op1.typeObj.type, op2.typeObj.type, ctx, this.state),
            value: toText(ctx)
        }

        //TODO: find value
    }

    enterExprExprAddSub(ctx) {
    }

    exitExprExprAddSub(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);

        ctx.typeObj = {
            type: relopType(op1.typeObj.type, op2.typeObj.type, ctx, this.state),
            value: toText(ctx)
        }

        //TODO: find value
    }

    enterExprExprLtGt(ctx) {
    }

    exitExprExprLtGt(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        relopType(op1.typeObj.type, op2.typeObj.type, ctx, this.state);
        ctx.typeObj = {
            type: 'bool',
            value: toText(ctx)
        }

        //TODO: find value

    }

    enterExprExprEqualNotequalLeGe(ctx) {
    }

    exitExprExprEqualNotequalLeGe(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        relopType(op1.typeObj.type, op2.typeObj.type, ctx, this.state);
        ctx.typeObj = {
            type: 'bool',
            value: toText(ctx)
        }
    }

    enterExprExprBitand(ctx) {
    }

    exitExprExprBitand(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, op2.typeObj.type, ctx, this.state);
        if (relopType(t3, 'int', ctx, this.state) === 'int') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
          let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected int but found ${t3}`))
          errors.push(e);
        }
    }

    enterExprExprCaret(ctx) {
    }

    exitExprExprCaret(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, op2.typeObj.type, ctx, this.state);
        if (relopType(t3, 'int', ctx, this.state) === 'int') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
          let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected int but found ${t3}`))
          errors.push(e);
        }
    }

    enterExprExprBitor(ctx) {
    }

    exitExprExprBitor(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, op2.typeObj.type, ctx, this.state);
        if (relopType(t3, 'int', ctx, this.state) === 'int') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
          let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected int but found ${t3}`))
          errors.push(e);
        }
    }

    enterExprExprAnd(ctx) {
    }

    exitExprExprAnd(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, 'bool', ctx, this.state);
        let t4 = relopType(op2.typeObj.type, 'bool', ctx, this.state);
        if (relopType(t3, t4, ctx, this.state) === 'bool') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
            throw new Error(`type Error: expected int but found ${t3} in ${/* TODO: error address */null}`);
        }
    }

    enterExprExprOr(ctx) {
    }

    exitExprExprOr(ctx) {
        let op1 = ctx.getChild(0);
        let operator = toText(ctx.getChild(1));
        let op2 = ctx.getChild(2);
        let t3 = relopType(op1.typeObj.type, 'bool', ctx, this.state);
        let t4 = relopType(op2.typeObj.type, 'bool', ctx, this.state);
        if (relopType(t3, t4, ctx, this.state) === 'bool') {
            ctx.typeObj = {
                type: 'bool',
                value: toText(ctx)
            }
        } else {
          let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected int but found ${t3}`))
          errors.push(e);
        }
    }

    enterExprParen(ctx) {
    }

    exitExprParen(ctx) {
        let typeObj = null;
        if (ctx.const_val()) {
            typeObj = ctx.const_val().typeObj
        } else if (ctx.list()) {
            typeObj = ctx.list().typeObj
        }
        ctx.typeObj = typeObj;
    }

    // #endregion

    // #region const_val

    exitConst_valINT(ctx) {
        ctx.typeObj = {
            type: 'int',
            value: toText(ctx)
        }
    }

    exitConst_valBOOL(ctx) {
        ctx.typeObj = {
            type: 'bool',
            value: (toText(ctx) !== 'false')
            // value: (toText(ctx) === 'false' ? false : true)
        }
    }

    exitConst_valREAL(ctx) {
        ctx.typeObj = {
            type: 'float',
            value: toText(ctx)
        }
    }

    exitConst_valHEX(ctx) {
        ctx.typeObj = {
            type: 'int',
            value: toText(ctx)
        }
    }

    exitConst_valSTRING(ctx) {
        ctx.typeObj = {
            type: 'string',
            value: toText(ctx)
        }
    }

    // #endregion

    // #region list

    enterList(ctx) {
    }

    exitList(ctx) {
        let listType = ctx.getChild(1).typeObj.type;
        // 2 steps because of COMMA in list, skip child(0) and cild(length-1) because of '[]'
        for (let i = 2; i < ctx.children.length - 1; i += 2) {
            let itemType = ctx.getChild(i).typeObj.type
            if (listType !== itemType) {
              let e = new SemanticOperandTypeMismatchError(payloadCreator(ctx, this.state, `expected ${listType} but found ${itemType}`))
              errors.push(e);
            }
        }
        ctx.typeObj = {
            type: 'list',
            value: toText(ctx),
            innerType: 'int'
        }
    }

    // #endregion

    exitType(ctx) {
        ctx.typeObj = {
            type: toText(ctx)
        }
    }

    //#endregion declare

    // #region def

    enterExprExprMulDivMod(ctx) {

    }

    enterDcl(ctx) {
    }
    exitDcl(ctx){
    }

    enterDef(ctx){
      this.state.push(cursorCreator('def', ctx))
    }
    exitDef(ctx) {/* skip */
        this.state.pop();
    }

    enterType_def(ctx) {
        this.state.push(cursorCreator('typedef', ctx));
        let typeName = toText(ctx.getChild(1));
        let typeScope = this.globalTable.getTypeInRoot(typeName);
        let fatherScope = null;
        if (ctx.COLON()) {
            let fatherName = toText(ctx.getChild(3));
            fatherScope = this.globalTable.getTypeInRoot(fatherName);
            if (!fatherScope.isImplemented) {
              let e = new SemanticFatherTypeimplementationError(payloadCreator(ctx, this.state, `class ${fatherName} not implemented.`))
              errors.push(e);
            }
        }
        typeScope.isImplemented = true;
        typeScope.addParentScope(fatherScope);
        ctx.table = typeScope;
    }
    exitType_def(ctx) {
        this.state.pop();
    }

    enterComponent(ctx) {
        ctx.table = ctx.parentCtx.table;
    }

    exitComponent(ctx) {
    }

    enterFun_def(ctx) {
        let functionSymbol, functionTable, parentTable;
        if (this.state.top().name === 'typedef') {
            parentTable = ctx.parentCtx.table
        } else {
            parentTable = this.globalTable;
        }
        // creation for function table, pointing to global table by parent scope
        functionSymbol = parentTable.getSymbolInheritance(toText(ctx.ID()));
        if (functionSymbol === 'error') {
            functionTable = new SymbolTable(toText(ctx.ID()), {
                type: 'function',
                defineValue: toText(ctx)
            }, parentTable);

            // creation for function symbol that is a way for access to function table, pointing to
            // function table by child scope
            functionSymbol = new Symbol(toText(ctx.ID()), {
                type: 'function',
                defineValue: toText(ctx)
            }, parentTable.getNewOffset(), functionTable)

            // add function symbol to type table
            let result = parentTable.addSymbol(functionSymbol, ctx);
            if (result === 'error') {
                let e = new SemanticTypeDeclaredError(payloadCreator(ctx, this.state, `identifier ${symbol.id} has already been declared before`));
                errors.push(e);
            }
        } else {
            functionTable = functionSymbol.getChildScope();
        }
        ctx.table = functionTable;
        this.state.push(cursorCreator('fundef', ctx));
    }

    exitFun_def(ctx) {
        this.state.pop();
    }

    enterBlock(ctx) {
        if (this.state.top().name === 'fundef') {
            let ctxP = ctx.parentCtx;
            let returnableArgsTypes, mainArgsTypes = null;
            if (ctxP.ASSIGN()) {
                returnableArgsTypes = ctxP.getChild(1).typeObj;
                mainArgsTypes = ctxP.getChild(7).typeObj;
            } else {
                returnableArgsTypes = [];
                mainArgsTypes = ctxP.getChild(3).typeObj;
            }
            if (mainArgsTypes === undefined) {
                mainArgsTypes = [];
            }
            let functionTable = ctxP.table;
            //TODO: BUG: when place '.' instead of ',' it throw mainArgs is undefined!

            // add return symbols to function table
            returnableArgsTypes.forEach(typeObj => {
                let argSymbol = new Symbol(typeObj.id, {
                    type: typeObj.type,
                    value: typeObj.value,
                    return: true
                }, functionTable.getNewOffset(), null);
                let result = functionTable.addSymbol(argSymbol, ctxP);
                if(result === 'error'){
                  let e = new SemanticTypeDeclaredError(payloadCreator(ctxP, this.state,`identifier ${symbol.id} has already been declared before`));
                  errors.push(e);
                }
            });

            // add arguments symbols to function table
            mainArgsTypes.forEach(typeObj => {
                let argSymbol = new Symbol(typeObj.id, {
                    type: typeObj.type,
                    value: typeObj.value,
                    return: false
                }, functionTable.getNewOffset(), null);
                let result = functionTable.addSymbol(argSymbol, ctxP);
                if(result === 'error'){
                  let e = new SemanticTypeDeclaredError(payloadCreator(ctxP, this.state,`identifier ${symbol.id} has already been declared before`));
                  errors.push(e);
                }
            });
            ctx.table = functionTable;
        }

    }

    enterStmtAssign(ctx) {
        ctx.table = ctx.parentCtx.table
        this.state.push(cursorCreator('stmt', ctx));
    }
    exitStmtAssign(ctx) {
        this.state.pop();
    }
    
    enterVariable(ctx){
        ctx.table = ctx.parentCtx.table
    }
    exitVariable(ctx){
        for(let ref of ctx.ref()){
            let symbol = ref.symbol;
            if(symbol === 'error'){
                let e = new SemanticNotDeclaredReferenceError(payloadCreator(ctx, this.state, `reference ${id} not declared before`));
                errors.push(e)
            }
        }
    }

    enterAssign(ctx) {
        this.state.push(cursorCreator('assign', ctx));
        ctx.table = ctx.parentCtx.table;
    }

    exitAssign(ctx) {
        if (ctx.children.length === 3) {
            relopType(ctx.variable().typeObj.type, ctx.expr().typeObj.type, ctx, this.state);
        }
        // else {
        //
        // }
        this.state.pop()
    }

    enterCond_stmtIF(ctx) {
    }

    exitCond_stmtIF(ctx) {
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx, this.state);
    }

    enterCond_stmtSWITCH(ctx) {
    }

    exitCond_stmtSWITCH(ctx) {
        let valueType = ctx.variable().typeObj.type;
        relopType(valueType, 'int', ctx, this.state);
    }

    enterLoop_stmtFOR(ctx) {
        ctx.table = ctx.parentCtx.table
        this.state.push(cursorCreator('forloop', ctx));
    }

    exitLoop_stmtFOR(ctx) {
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx, this.state);
        this.state.pop();
    }

    enterLoop_stmtWHILE(ctx) {
        this.state.push(cursorCreator('whileloop', ctx));
    }

    exitLoop_stmtWHILE(ctx) {
        let valueType = ctx.expr().typeObj.type;
        relopType(valueType, 'bool', ctx, this.state);
        this.state.pop();
    }

    enterStmtLoop_stmt(ctx){
        ctx.table = ctx.parentCtx.table
    }

    exitStmtBREAK(ctx) {
        if (this.state.top().name !== 'forloop' || this.state.top().name !== 'whileloop') {
            let e = new SemanticScopeError(payloadCreator(ctx, this.state,`break must be used inside loop`))
            errors.push(e);
        }
    }

    exitStmtCONTINUE(ctx) {
        if (this.state.top().name !== 'forloop' || this.state.top().name !== 'whileloop') {
          let e = new SemanticScopeError(payloadCreator(ctx, this.state,`continue must be used inside loop`))
          errors.push(e);
        }
    }

    exitStmtDESTRUCT(ctx) {
        let type = ctx.ID.typeObj.type;
        if (type.typeObj.type !== 'userType')
            throw new SemanticDestructError(payloadCreator(ctx, this.state,`destruct can be used with userTypes`));
        //todo array
        // else if (type === 'array')
        // if ((ctx.children.length - 3) / 2 !== arrayDimension)
        //     throw new typeError(`type Error: type mismatch`);
    }

    enterFunc_callREAD(ctx){
        ctx.table = ctx.parentCtx.table;
    }
    exitFunc_callREAD(ctx){
        ctx.typeObj = {
            type: 'function'
        }
    }

    enterFunc_callWRITE(ctx){
        ctx.table = ctx.parentCtx.table;
    }
    exitFunc_callWRITE(ctx){

    }
    // #region funcs and stmts

    // #endregion

    // #endregion def

    // #endregion
}

module.exports = Listener;
