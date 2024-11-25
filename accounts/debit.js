let balance = localStorage.getItem('updateBlnc')

document.getElementById('debit').addEventListener('click', function() {
    let debitamt = document.getElementById('amount').value;
    let parseDebit = parseInt(debitamt) 
    const debitRes = balance - parseDebit

    alert(debitRes)

    localStorage.setItem('updateBlnc', debitRes)
})