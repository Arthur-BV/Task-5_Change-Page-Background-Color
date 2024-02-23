var toggle = true;
const textArea = document.querySelector("#textArea");
const toggleButton = document.querySelector("#toggleButton");

toggleButton.addEventListener("click", function () {
    if (toggle) {
        toggleButton.textContent = "Show";
        textArea.style.display = "none";
        toggle = false;
    } else {
        toggleButton.textContent = "Hide";
        textArea.style.display = "block";
        toggle = true;
    }
});

function changeBGColor(color) {
    color = color.trim();
    document.body.style.backgroundColor = color;
}
