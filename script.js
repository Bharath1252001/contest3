var counterElement = document.getElementById("counterText");

var incrementBtn = document.getElementById("increment");
var decrementBtn = document.getElementById("decrement");
var resetBtn = document.getElementById("reset");

var counter = counterElement.innerText;

function increment() {
  counter++;
  console.log(counter);
  counterElement.innerText = counter;
}

function decrement() {
    if(counter<0){
        console.log('Error:cannot go  below 0');
        
    }
  counter--;
  console.log(counter);
  counterElement.innerText = counter;
}

function reset() {
  counter = 0;
  console.log(counter);
  counterElement.innerText = counter;
}

incrementBtn.onclick = increment;
decrementBtn.onclick = decrement;
resetBtn.onclick = reset;
