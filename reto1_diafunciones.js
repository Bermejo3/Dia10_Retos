function calculadora(oper, num1, num2){
    var resultado
    if (oper === "sum"){
        resultado = num1 + num2
    }
    else if (oper == "subs"){
        resultado = num1 - num2
    }
    else if (oper == "mult"){
        resultado = num1 * num2
    }
    else if (oper == "div"){
        resultado = num1 / num2
    }
    return resultado
}

console.log(calculadora("sum", 8, 4))
console.log(calculadora("subs", 8, 4))
console.log(calculadora("mult", 8, 4))
console.log(calculadora("div", 8, 4))
console.log(calculadora("sdfghjk", 8, 4))