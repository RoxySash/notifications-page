const readBtn = document.getElementById("readBtn");
const openMessage = document.getElementById("openMessage");
const dropdownMessage = document.getElementById("dropdownMessage");

const messageCount = document.getElementById("messageCount");
const message = document.querySelectorAll(".message");
const redDot = document.querySelectorAll(".red-dot");

let count = 7;
messageCount.innerHTML = count;

dropdownMessage.addEventListener("click", () => {
  if (openMessage.style.display === "none") {
    openMessage.style.display = "block";
  } else {
    openMessage.style.display = "none";
  }
});

function updateCount() {
  if (message.classList.contains("visited")) {
    count--;
    messageCount.innerHTML = count;
  }
}

readBtn.addEventListener("click", () => {
  message.forEach((element) => {
    element.style.backgroundColor = "white";
  });

  redDot.forEach((element) => {
    element.style.display = "none";
  });

  count = 0;
  messageCount.innerHTML = count;
});
