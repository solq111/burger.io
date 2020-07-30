let users = [
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
]

/* Mukodik a meat lover-ra
function calcAmount() {
    let price = 990;
    let quantityInput = document.querySelector("input.burgerQuantity");
    let showAmount = document.querySelector("span.show-amount");
    let payable = parseInt(quantityInput.value) * price;
    showAmount.innerHTML = payable;
} */

function calcAmount() {
    let price = 990;
    let quantityInput = document.querySelectorAll("input.burgerQuantity");
    let number = 0;
    for (let i = 0; i < quantityInput.length; i++) {
        number = number + parseInt((quantityInput[i].value));
        let value = number * price;
        let showAmount = document.querySelector("span.show-amount");
        showAmount.innerHTML = value;}}
        ;
        
       // if (isNaN(quantityInput)){quantityInput=0};