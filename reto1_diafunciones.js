function calculadora(str, num1, num2){
    var resultado
    if (str == "sum"){
        resultado = num1 + num2
    }
    else if (str == "subs"){
        resultado = num1 - num2
    }
    else if (str == "mult"){
        resultado = num1 * num2
    }
    else if (str == "div"){
        resultado = num1 / num2
    }
    return resultado
}

console.log(calculadora("sum", 8, 4))
console.log(calculadora("subs", 8, 4))
console.log(calculadora("mult", 8, 4))
console.log(calculadora("div", 8, 4))
console.log(calculadora("sdfghjk", 8, 4))