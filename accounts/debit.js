let balance = localStorage.getItem('updateBlnc')

document.getElementById('debit').addEventListener('click', function() {
    let debitamt = document.getElementById('amount').value;
    let parseDebit = parseInt(debitamt) 
    const debitRes = balance - parseDebit

    alert(debitRes)

    localStorage.setItem('updateBlnc', debitRes)
})


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