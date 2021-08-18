function getpin() {
    const pin = Math.round(Math.random() * 10000)
    const pinstr = String(pin)
    if (pinstr.length == 4) {
        return pin
    } else {
        return getpin()
    }
}
function generatePin() {
    const pin = getpin()
    document.getElementById("displayPin").value = pin
    
}

document.getElementById("key-pad").addEventListener("click", function (even) {
    const number = even.target.innerText
    const calcInput = document.getElementById("type-number");
    if (isNaN(number)) {
        if (number == "C") {
            calcInput.value = "";
        }
    } else {
        
       
        const previousNumber = calcInput.value
        const newNumber = previousNumber + number;
        calcInput.value = newNumber;
    }
});


function varifypin() {
    const pin = document.getElementById("displayPin").value;
    const typeNumber = document.getElementById("type-number").value;
    const successMessage = document.getElementById("notify-success")
    const failMessage = document.getElementById("notify-fail")
    if (pin == typeNumber) {
        successMessage.style.display = "block"
        failMessage.style.display = "none"
    } else {
        successMessage.style.display = "none"
        failMessage.style.display = "block"
    }
}