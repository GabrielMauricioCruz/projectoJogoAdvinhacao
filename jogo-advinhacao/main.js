

/* Variáveis */
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

/* função Callback */
function handleTryClick(event){
  event.preventDefault() /* Não faça o padrão desse evento. No caso seria, não envie o formulário. */

  const inputNumber = document.querySelector("#inputNumber")

  if(Number(inputNumber) == randomNumber){
    screen1.classList.add("hide")
    screen2.classList.remove("hide")

    document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas`
  }
  inputNumber.value = ""
  xAttempts++
}


//Eventos

const btnTry = document.querySelector("#btnTry") /* Pegar o botão Tentar */
const btnReset = document.querySelector("#btnReset")/* Pegar o botão resetar  */

/* ------------Agora registrar os eventos------------- */
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function(){

  screen1.classList.remove("hide")
  screen2.classList.add("hide")
  xAttempts = 1
})