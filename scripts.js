const textZone = document.querySelector(".textZone_text");
const testinput = document.querySelector(".typearea");
const startbtn = document.querySelector(".start");
const time = document.querySelector(".testZone__inputs--time");
const wpm = document.querySelector(".testZone--wpm");
let wordsRight = 0;
let wordsWrong = 0;
let i = 0;
let timeLeft = 60;
let count;
//this starts the clock and genatates test text
function startGame() {
  time.innerHTML = `${timeLeft}sec`;
  count = setInterval(countDown, 1000);
  textZone.innerHTML = `<p> ${testARR.join(" ")}</p>`;
  setTimeout(ScoreGame, 60000);
}
//this is just a count down timer
function countDown() {
  timeLeft--;
  time.innerHTML = `${timeLeft}sec`;
}
//this scores the game after thre clock is up
function ScoreGame() {
  wpm.innerHTML = `<p>Your at ${wordsRight - wordsWrong} words per min`;
  clearInterval(count);
}
//this only runs if the space bar is pressed and submits a word for scoring
function submitWord(e) {
  if (e.keyCode == 32) {
    if (this.value.trim() == testARR[i]) {
      console.log(1);
      i++;
      wordsRight++;
      this.value = "";
    } else {
      let wrongWord = testARR[i];
      testARR.splice(i, 1, `<span class="bad">${wrongWord}</span>`);
      textZone.innerHTML = `<p> ${testARR.join(" ")}</p>`;
      i++;
      wordsWrong++;
      this.value = "";
    }
  }
}
startbtn.addEventListener("click", startGame);
testinput.addEventListener("keyup", submitWord);
