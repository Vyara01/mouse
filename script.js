let counterHunger = 0;
let counterEnergy = 0;
let counterMood = 0;
let counterSeberazvitie = 0;
let timer1 = null;
let timer2 = null;
let timer3 = null;
let timer4 = null;

function increaseBarHunger() {
    if (counterHunger < 100) counterHunger += 10; // increase by 10%
    startDecreasingHunger();
    updateBar();
  }
function increaseBarEnergy() {
    if (counterEnergy < 100) counterEnergy += 30; // increase by 10%
    startDecreasingEnergy();
    updateBar();
  }
function increaseBarMood() {
    if (counterMood < 100) counterMood += 30; // increase by 10%
    startDecreasingMood();
    updateBar();
  }
function increaseBarSeberazvitie() {
    if (counterSeberazvitie < 100) counterSeberazvitie += 30; // increase by 10%
    startDecreasingSeberazvitie();
    updateBar();
  }

function decreaseBarHunger() {
  if (counterHunger > 0) counterHunger -= 10; // decrease by 10%
  updateBar();
}
function decreaseBarEnergy() {
  if (counterEnergy > 0) counterEnergy -= 10; // decrease by 10%
  updateBar();
}
function decreaseBarMood() {
  if (counterMood > 0) counterMood -= 10; // decrease by 10%
  updateBar();
}
function decreaseBarSeberazvitie() {
  if (counterSeberazvitie > 0) counterSeberazvitie -= 10; // decrease by 10%
  updateBar();
}

function updateBar() {
  const bar1 = document.getElementById("fillBarHunger");
  bar1.style.width = counterHunger + "%";   // set the width dynamically
  //bar.textContent = counter + "%";   // update text inside
  const bar2 = document.getElementById("fillBarEnergy");
  bar2.style.width = counterEnergy + "%";   // set the width dynamically
  //bar.textContent = counter + "%";   // update text inside
  const bar3 = document.getElementById("fillBarMood");
  bar3.style.width = counterMood + "%";   // set the width dynamically
  //bar.textContent = counter + "%";   // update text inside
  const bar4 = document.getElementById("fillBarSeberazvitie");
  bar4.style.width = counterSeberazvitie + "%";   // set the width dynamically
  //bar.textContent = counter + "%";   // update text inside
}

function startDecreasingHunger() {

  if (timer1) return; // don’t start multiple timers
  timer1 = setInterval(() => {

    if (counterHunger > 0) {
      counterHunger -= 10; // decrease slowly
      updateBar();
    } else {
      clearInterval(timer1); // stop when reaches 0
      timer1 = null;
    }
  }, 5000); // decrease every 3 seconds
}
function startDecreasingEnergy() {

  if (timer2) return; // don’t start multiple timers
  timer2 = setInterval(() => {

    if (counterEnergy > 0) {
      counterEnergy -= 10; // decrease slowly
      updateBar();
    } else {
      clearInterval(timer2); // stop when reaches 0
      timer2 = null;
    }
  }, 5000); // decrease every 3 seconds
}
function startDecreasingMood() {

  if (timer3) return; // don’t start multiple timers
  timer3 = setInterval(() => {

    if (counterMood > 0) {
      counterMood -= 10; // decrease slowly
      updateBar();
    } else {
      clearInterval(timer3); // stop when reaches 0
      timer3 = null;
    }
  }, 5000); // decrease every 3 seconds
}
function startDecreasingSeberazvitie() {

  if (timer4) return; // don’t start multiple timers
  timer4 = setInterval(() => {

    if (counterSeberazvitie > 0) {
      counterSeberazvitie -= 10; // decrease slowly
      updateBar();
    } else {
      clearInterval(timer4); // stop when reaches 0
      timer4 = null;
    }
  }, 5000); // decrease every 3 seconds
}


function krilataFrazaPopUp(){
  //popup krilata fraza
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
  console.log("Popup function triggered");
}

window.krilataFrazaPopUp = krilataFrazaPopUp;