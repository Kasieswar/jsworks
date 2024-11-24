let balance = parseFloat(localStorage.getItem("balance")) || 0;

console.log("Current balance:",balance);
document.getElementById("balances").innerText = `Current Balance: $${balance}`;



function credit(){
    let amount = parseFloat(document.getElementById("amount").value);

    if(amount > 0){
        balance += amount;
        saveBalance();

        updateDisplay('$${amount} credited successfully.');
    }

    else{
        updateDisplay("Please enter a valid amount");
        
    }
}

function saveBalance(){
    localStorage.setItem("balance", balance);
}

function updateDisplay(message){
    document.getElementById("balances").innerText = 'Current Balance: $${balance}';
    document.getElementById("message").innerText = message;
}

function goBalance(){
    window.location.href = "accountdet.html";
}