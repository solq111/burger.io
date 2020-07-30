let numericArray = [1, 3, 2, 6, 5, 3, 4, 6, 7];
let find = 6;
let found = false;
for (let i = 0; i < numericArray.length && !found; i++) {
  if (numericArray[i] == find) {
    found = true;
  }
}
console.log(found);

function calcTotal() {
let quantityInput = [document.querySelector("input.burgerQuantity")];
let sum=0;
for(let i=0; i<quantityInput.length; i++) {
  i = parseInt(i.value); sum+=quantityInput[i];
let price = 990;
let payable = sum * price;
let showTotal = document.querySelector("span.showTotal");
showTotal.innerHTML = payable;
}}
calcTotal()

function calcAmount() {
let price = 10;
let amountInput = document.querySelector("input[name='amount-input']");
let amountNumber = parseInt(amountInput.value);
amountNumber = isNaN(amountNumber) ? 0 : amountNumber;

showSumPrice(price, amountNumber);
function showSumPrice(price, amountNumber) {
let showAmount = document.querySelector("span.show-amount");
if (amountNumber > 10) {alert("Maximum purchase 10")}
else if (amountNumber < 1) {alert("Minimum purchase 1")}
else {let amount = parseInt(amountNumber) * price;
showAmount.innerHTML = amount;}
}






function calcFullAmount() {
let price1 = 990;
let amountInput1 = document.querySelector("input[name='menu-amount-v']");
let amountNumber1 = parseInt(amountInput1.value);
let showAmount = document.querySelector("span.show-amount1");

amount1 = parseInt(amountNumber1) * price1;
showAmount.innerHTML = amount1;}}

let varOne=10, varTwo=20;
function changeValues(varOne, varTwo){
    varOne=100;
    varTwo=200;
    console.log(varOne, varTwo);
}
changeValues(varOne, varTwo);
console.log(varOne, varTwo);

let users=["tom", "joe", "kate"]
users[1]

function validateForm() {
    let pricePerPiece = 990;
let amountInput = document.querySelector("form#order input[name = amount]");
let priceField = document.querySelector("form#order .message strong");
let amount = parseInt(amountInput.value);
let totalAmount = amount * pricePerPiece;
priceField.innerHTML=totalAmount;
}






