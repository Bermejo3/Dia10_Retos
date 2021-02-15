function calculadora(operacion, num1, num2, num3){
    var resultado
    if (operacion === "sum"){
        resultado = num1 + num2 + num3
    }
    else if (operacion == "subs"){
        resultado = num1 - num2
    }
    else if (operacion == "mult"){
        resultado = num1 * num2
    }
    else if (operacion == "div"){
        resultado = num1 / num2
    }
    return resultado
}

console.log(calculadora("sum", 8, 4))
console.log(calculadora("subs", 8, 4))
console.log(calculadora("mult", 8, 4))
console.log(calculadora("div", 8, 4))
console.log(calculadora("sdfghjk", 8, 4))