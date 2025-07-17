const DURATION = 10; // 10 seconds
let remainingTime = DURATION; // Countdown starting from 10
let timer = null; // Variable to store the interval

// ITERATION 1: Add event listener to the start button

// Your code goes here ...
const btn = document.querySelector("#start-btn");
btn.addEventListener("click", (e) => {
  let timeoutInterval = setInterval(
    () => startCountdown(timeoutInterval),
    1000
  );
});

// ITERATION 2: Start Countdown
function startCountdown(timeoutInterval) {
  console.log("startCountdown called!");
  const timeElement = document.querySelector("#time");
  //reduce remaining time by 1 , for every setInterval
  //update the dom with the remaining time
  // if(remainingTime <0) Clear interval
  // Your code goes here ...
  if (remainingTime <= 0) {
    clearInterval(timeoutInterval);
    remainingTime = DURATION;
    timeElement.innerText = remainingTime;
    showToast();
    return;
  }
  remainingTime--;

  timeElement.innerText = remainingTime;
}

// ITERATION 3: Show Toast
function showToast(message) {
  console.log("showToast called!");

  toggleToast();

  // Your code goes here ...

  // BONUS: ITERATION 4: TOAST CLOSE BUTTON

  // Your code goes here ...
  let toastCloseButton = document.querySelector("#close-toast");
  toastCloseButton.addEventListener("click", onClickClose);
}

function onClickClose() {
  toggleToast();
  let toastCloseButton = document.querySelector("#close-toast");
  toastCloseButton.removeEventListener("click", toggleToast);
}

function toggleToast() {
  let toastId = document.querySelector("#toast");
  toastId.classList.toggle("toast");
}
