// calculator functionality

const display = document.getElementById("display");

// need 3 functions

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = JSON.parse(display.value); // eval() handles expressions, but security risk, so working on alternate
    }
    catch(error) {
        display.value = "Error";
    }
}
function backSpace() {
    display.value = display.value.slice(0, -1);
}