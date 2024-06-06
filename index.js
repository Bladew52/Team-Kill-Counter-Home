let tully = document.getElementById("tullybutton")
let tyler = document.getElementById("tylerbutton")
let random = document.getElementById("randombutton")
let tullyCount = document.getElementById("tullybox")
let tylerCount = document.getElementById("tylerbox")
let randomCount = document.getElementById("randombox")
let tullyCounter = 0
let tylerCounter = 0
let randomCounter = 0

function alarm() {
    alert("Why did you do it man. You're better than this. This bloodshed is needless.")
}
tully.addEventListener("click", function() {
  tullyCounter ++; 
   tullyCount.textContent = tullyCounter
   localStorage.setItem('counts', JSON.stringify(countersArray));
});
tyler.addEventListener("click", function() {
  tylerCounter ++; 
   tylerCount.textContent = tylerCounter
   localStorage.setItem('counts', JSON.stringify(countersArray));
});
random.addEventListener("click", function() {
  randomCounter ++; 
   randomCount.textContent = randomCounter
   localStorage.setItem('counts', JSON.stringify(countersArray));
});
const countersArray = [tullyCounter, tylerCounter, randomCounter];
localStorage.setItem('counts', JSON.stringify(countersArray));
const counterData = JSON.parse(localStorage.getItem('counts'))
console.log(counterData)
alarm()