// exercicio1

// let value = parseFloat(Number(prompt("Qual o valor da conta?")))
// let person = Number(prompt("Quantas pessoas vão dividir a conta?"))
// let tip = prompt("Haverá os 10%? (responda com s ou n)")

// if (tip === "s") {
//     value += value * 0.10  
//     console.log(value / person)
// } else {
//     console.log(value / person)
// }

// Exercicio2 

// let bilhete = Number(prompt("Qual é o saldo do Bilhete Único?"))
// let tarifa = 5

// if (bilhete > 0) {
//     let viagens = (bilhete / tarifa)
//     let sobra = bilhete - (viagens * tarifa)

//     console.log(`Você pode fazer ${viagens} viagem(ns).`)
//     console.log(`Sobra: R$ ${sobra.toFixed(2)}`)
// } else {
//     console.log("Digite um saldo válido.")
// }

// Exercicio3

// let loadarq = Number(prompt("Qual é o tamanho do arquivo (Em GB)?"))
// let velocidade = Number(prompt("Qual é a velocidade da internet (Em Mbps)?"))

// if (loadarq > 0 && velocidade > 0) {
//     let tempoSegundos = (loadarq * 8192) / velocidade
//     let minutos = Math.floor(tempoSegundos / 60)
//     let segundos = Math.round(tempoSegundos % 60)

//     if (segundos === 60) {
//         minutos++
//         segundos = 0
//     }

//     console.log(`Tempo estimado: ${minutos} minuto(s) e ${segundos} segundo(s).`)
// } else {
//     console.log("Digite valores válidos para o tamanho e a velocidade.")
// }

// Exercicio4

// let valorCompra = Number(prompt("Qual é o valor da compra?"))
// let valorPagar = Number(prompt("Qual o valor pago"))
// let troco = valorPagar - valorCompra

// let notas100 = Math.floor(troco / 100);
// troco = troco % 100

// let notas50 = Math.floor(troco / 50)
// troco = troco % 50

// let notas20 = Math.floor(troco / 20)
// troco = troco % 20

// let notas10 = Math.floor(troco / 10)
// troco = troco % 10

// let notas5 = Math.floor(troco / 5)
// troco = troco % 5

// let notas2 = Math.floor(troco / 2)
// troco = troco % 2

// let moedas1 = troco

// console.log(`Notas de R$ 100: ${notas100}`)
// console.log(`Notas de R$ 50: ${notas50}`)
// console.log(`Notas de R$ 20: ${notas20}`)
// console.log(`Notas de R$ 10: ${notas10}`)
// console.log(`Notas de R$ 5: ${notas5}`)
// console.log(`Notas de R$ 2: ${notas2}`)
// console.log(`Moedas de R$ 1: ${moedas1}`)

// Exercicio 5