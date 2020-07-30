//select elem kitoltese
let toppings = [
    "bacon",
    "onion",
    "egg",
    "tomato",
    "cucumber"];

let toppingsSelect = document.querySelector("select#top-input.form-control");
let index = 0;
while (index < toppings.length) {
    let option = document.createElement("option");
    option.value = index;
    option.innerHTML = toppings[index];
    toppingsSelect.appendChild(option);
    index++;
}

let alertCloseButton = document.querySelectorAll(".close[data-dismiss='alert']");
for (let i = 0; i < alertCloseButton.length; i++) {
    alertCloseButton[i].addEventListener("click", function (ev) {
        this.parentElement.style.display = "none";
    })
}

function calcToppings() {
    let priceToppings = 250;
    let toppingAmountInput = document.querySelector("input#toppingsAmount");
    let toppingsAmountNumber = parseInt(toppingAmountInput.value);

    let showAmount = document.querySelector("span.show-amount");
    showAmount.innerHTML = parseInt(toppingsAmountNumber) * priceToppings;;
};

/* function calcToppings() {
    let price = 10;
    let amountInput = document.querySelector("input#toppingsAmount");
    let amountNumber = parseInt(amountInput.value);
    amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

    showSumPrice(price, amountNumber);
    function showSumPrice(price, amountNumber) {
    let showAmount = document.querySelector("span.show-amount");
    if (amountNumber > 10) {alert("Maximum purchase 10")}
    else if (amountNumber < 1) {alert("Minimum purchase 1")}
    else {let amount = parseInt(amountNumber) * price;
    showAmount.innerHTML = amount;}
    }} */