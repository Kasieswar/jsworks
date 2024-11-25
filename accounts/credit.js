let balance = 5000

document.getElementById('credit').addEventListener('click', function() {
    let creditamt = document.getElementById('amount').value;
    let parseCredit = parseInt(creditamt) 
    const creditRes = balance +parseCredit

    alert(creditRes)

    localStorage.setItem('updateBlnc', creditRes)
})


function acctwo() {
    let value = +prompt("Enter 4 digits Pin   hint: 9032")
    const pin = 9032
    
    const valid = value === pin

    if (valid) {
        alert("Access granted.");
        window.location.href="debit.html"
    } 
    else {
        alert("Incorrect Pin. Please try again.");
}
    
}