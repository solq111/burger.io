let users = [
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
    {surename: "Nagy", firstname: "Peter", age: 33},
]

function calcAmount() {
    let price = 990;
    let quantityInput = document.querySelector("input.burgerQuantity");
    let showAmount = document.querySelector("span.show-amount");
    let payable = parseInt(quantityInput.value) * price;
    showAmount.innerHTML = payable;
}


let items = ["Bottle", 4, true];
        items.push("Juice");
        console.log(items);

