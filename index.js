// Method 1: Inline handler function (called from HTML)
window.handleInline = function () {
  console.log("Inline event handling");
};

// Method 2: onclick property
const method2Btn = document.querySelector(".method2");
method2Btn.onclick = function () {
  console.log("onclick property");
};

// Method 3: addEventListener method
const method3Btn = document.querySelector(".method3");
method3Btn.addEventListener("click", function () {
  console.log("addEventListener method");
});

// Part 2: Event Object Exploration
const eventInfoPara = document.querySelector(".event-info");
eventInfoPara.addEventListener("click", function (event) {
  console.log(event); // Log entire event object

  // Show specific event properties
  eventInfoPara.innerHTML = `
    <strong>Event Details:</strong><br>
    Type: ${event.type}<br>
    Target: ${event.target.tagName}<br>
    X: ${event.clientX}<br>
    Y: ${event.clientY}
  `;
});

