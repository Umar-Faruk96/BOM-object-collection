// Window Object Model (BOM)

// Window Object
const newTabButton = document.getElementById("newTabButton");
newTabButton.addEventListener("click", () => {
  window.open(window.location.href, "_blank");
});

const closeTabButton = document.getElementById("closeTabButton");
closeTabButton.addEventListener("click", () => {
  window.close();
});

const coordinates = document.getElementById("coordinates");

window.addEventListener("click", (event) => {
  coordinates.innerHTML = `<pre style="margin: 0; padding: 1em;">Clicked Coordinates: X is: <code>${event.clientX},</code> Y is: <code>${event.clientY}.</code></pre>`;
});

// Navigator Object
const navigatorButton = document.getElementById("navigatorButton");
const navigatorContainer = document.getElementById("navigatorContainer");

navigatorButton.addEventListener("click", () => {
  navigatorContainer.innerHTML = `<pre style="margin: 0; padding: 1em;">Your browser is <code>${
    navigator.userAgent
  }.</code>The language is <code>${
    navigator.language
  }.</code>Online Status is <code>${
    navigator.onLine ? "Online" : "Offline"
  }.</code></pre>`;
});

// Location Object
const urlContainer = document.getElementById("urlContainer");
const urlButton = document.getElementById("urlButton");

urlButton.addEventListener("click", () => {
  urlContainer.innerHTML = `<pre style="margin: 0; padding: 1em;">You're now on the <code>${window.location.href}</code> page.</pre>`;
});

const refreshButton = document.getElementById("refreshButton");
refreshButton.addEventListener("click", () => {
  window.location.reload();
});

// History Object
const historyContainer = document.getElementById("historyContainer");
const historyButton = document.getElementById("historyButton");

historyButton.addEventListener("click", () => {
  historyContainer.innerHTML = `<pre style="margin: 0; padding: 1em;">See Your browser history. <code>${
    window.history.length ?? 0
  } page.</code></pre>`;
});

const backButton = document.getElementById("backButton");
backButton.addEventListener("click", () => {
  window.history.back();
});

const forwardButton = document.getElementById("forwardButton");
forwardButton.addEventListener("click", () => {
  window.history.forward();
});

const goButton = document.getElementById("goButton");
goButton.addEventListener("click", () => {
  const page = window.prompt() ?? 0;
  window.history.go(page);
});

// Screen Object
const screenContainer = document.getElementById("screenContainer");
const screenButton = document.getElementById("screenButton");

screenButton.addEventListener("click", () => {
  screenContainer.innerHTML = `<pre style="margin: 0; padding: 1em;">Your Screen Height is <code>${screen.height}.</code>Screen Width is <code>${screen.width}.</code>Available Height is <code>${screen.availHeight}.</code>Available Width is <code>${screen.availWidth}.</code>Screen Color Depth is <code>${screen.colorDepth}.</code>Screen Pixel Depth is <code>${screen.pixelDepth}.</code></pre>`;
});
