let balance = parseFloat(localStorage.getItem("balance")) || 0;

let balances = document.getElementById("balances");


if (balances){
    balances.innerText = '$${balance}';
}

console.log(document.getElementById("balances"));

console.log(balance);

console.log(balanceDisplay.innerText);