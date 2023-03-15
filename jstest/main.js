console.log("this js is running (main.js)")
var runButton = document.getElementById("run");
runButton.addEventListener("click", clicked);
function clicked() {
    runButton.innerHTML = "YAY :)"
    console.log("clicked");
}
