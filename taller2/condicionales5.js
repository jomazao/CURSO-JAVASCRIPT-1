//Crear un programa que solicite 2 números, y una operación a realizar, y muestre el resultado de la operación en pantalla

//prompt("digitie")
let num1= prompt("Digite un numero")
let num2 = prompt("Digite otro numero")
let operacion = prompt ("Digite la operacion a realizar")
let resultado
if (operacion=="+"){
    resultado=parseFloat(num1) + parseFloat(num2)
}else if (operacion == "-"){
    resultado=num1 - num2
}else if (operacion=="*"){
    resultado=num1 * num2
}else if (operacion=="/"){
    resultado=num1 / num2
}
if (resultado == null){
    alert("Operacion no valida")
}else{
    alert("El resultado de la operacion es: "+resultado)
}