const result = document.querySelector('.result')
const humanScore = document.querySelector('#human-score')
const machineScore = document.querySelector('#machine-score')

let humanScoreNumber = 0
let machineScoreNumber = 0

const playHuman = (humanChoice) => {

    playTheGame( humanChoice, playMachine ())
    
}
const playMachine = () => {
    const choices = ['Pedra', 'Papel', 'Tesoura']
    const randomNumber = Math.floor(Math.random() * 3)

    return choices[randomNumber]
}   

const playTheGame = (human, machine) => {

    console.log('Humano: ' + human + 'Maquina: ' + machine )

    if(human === machine){
        result.innerHTML = "Deu empate!"
    }
    else if ((human === 'Papel' && machine === 'Pedra')||
     (human === 'Tesoura' && machine === 'Papel')
     || (human ==='Pedra' && machine === 'tesoura')){
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML= "Você Ganhou!"
    }
    else{
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML="Você Perdeu!"
    }
}   