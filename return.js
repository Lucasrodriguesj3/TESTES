const cart = [10, 255, 25, 758, 58, 35, 145]
let finalValuedesc = 0
let finalvalue = 0
let desc = 0

function calculoDesconto(price, desconto) {
    const result = (price * desconto) / 100
    return result
}

cart.forEach(value => {
    if (value > 30) {
        const desconto = calculoDesconto(value, 10)
        finalValuedesc += value - desconto
    } else {

        finalValuedesc += value
    }
});

cart.forEach(element => {
    finalvalue += element

});

const diferenca = finalvalue - finalValuedesc


console.log(`O valor da compra foi de R$  ${finalvalue.toFixed(2)}, mas com desconto de R$  ${diferenca.toFixed(2)} o valor finalcom desconto é de R$ ${finalValuedesc.toFixed(2)}`)
