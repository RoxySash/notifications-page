const readBtn = document.getElementById("readBtn");
const openMessage = document.getElementById("openMessage");
const dropdownMessage = document.getElementById("dropdownMessage");

const messageCount = document.getElementById("messageCount");
const messages = document.querySelectorAll(".message");
const redDot = document.querySelectorAll(".red-dot");

let count = 7;
messageCount.textContent = count;

dropdownMessage.addEventListener("click", () => {
  if (openMessage.style.display === "none") {
    openMessage.style.display = "block";
  } else {
    openMessage.style.display = "none";
  }

  dropdownMessage.style.backgroundColor = "white";
  const dot = dropdownMessage.querySelector(".red-dot");

  if (dot) {
    dot.style.display = "none";
  }
});

readBtn.addEventListener("click", () => {
  messages.forEach((element) => {
    element.style.backgroundColor = "white";
  });

  redDot.forEach((element) => {
    element.style.display = "none";
  });

  count = 0;
  messageCount.textContent = count;
});

function updateCount() {
  messageCount.textContent = count;
}

messages.forEach((msg) => {
  msg.addEventListener("click", () => {
    if (msg.dataset.read === "true") return;

    msg.dataset.read = "true";

    count--;
    updateCount();
    msg.style.backgroundColor = "white";

    const dot = msg.querySelector(".red-dot");

    if (dot) {
      dot.style.display = "none";
    }
  });
});
