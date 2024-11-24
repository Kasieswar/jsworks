function acc() {
    let value = +prompt("Enter 4 digits Pin   hint: 9032")
    const pin = 9032
    
    const valid = value === pin

    if (valid) {
        alert("Access granted.");
        window.location.href="accountdet.html"
    } 
    else {
        alert("Incorrect Pin. Please try again.");

    }
    
}

function accone() {
    let value = +prompt("Enter 4 digits Pin   hint: 9032")
    const pin = 9032
    
    const valid = value === pin

    if (valid) {
        alert("Access granted.");
        window.location.href="credit.html"
    } 
    else {
        alert("Incorrect Pin. Please try again.");

    }
    
}

function acctwo() {
    let value = +prompt("Enter 4 digits Pin   hint: 9032")
    const pin = 9032
    
    const valid = value === pin

    if (valid) {
        alert("Access granted.");
        window.location.href="credit.html"
    } 
    else {
        alert("Incorrect Pin. Please try again.");

        
    }
    
}


// Retrieve the bank balance from localStorage
let bankBalance = parseFloat(localStorage.getItem('bankBalance')) || 0.00;

// Display the current balance
document.getElementById("current-balance").textContent = bankBalance.toFixed(2);
