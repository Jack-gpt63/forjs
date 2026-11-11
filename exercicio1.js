let value = parseFloat(Number(prompt("Qual o valor da conta?")))
let person = Number(prompt("Quantas pessoas vão dividir a conta?"))
let tip = prompt("Haverá os 10%? (responda com s ou n)")

if (tip === "s") {
    value += value * 0.10  
    console.log(value / person)
} else {
    console.log(value / person)
}