let btnGuess = document.getElementById('btn-guess');
let btnAgain = document.getElementById('play-again');
let outputMessage = document.getElementById('message');
let allContent = document.querySelector('.content');

let number = Math.floor(Math.random() * 15) + 1; // random number between 1 and 0 multiply by 15

btnGuess.addEventListener('click', function () {
  let userInput = document.getElementById('input-number').value;
  if (userInput > number) {
    outputMessage.innerHTML = 'Broj je previsok, probaj manji!';
  } else if (userInput < number) {
    outputMessage.innerHTML = 'Broj je mali, probaj neki veći!';
  }
  if (userInput == number) {
    outputMessage.innerHTML = `Broj je tačan! ✔🎉 Zamislila sam broj ${number}`;
    btnAgain.classList.remove('hidden');
    allContent.classList.add('hidden');
  }
  console.log(number);
});

btnAgain.addEventListener('click', function () {
  window.location.reload();
});
