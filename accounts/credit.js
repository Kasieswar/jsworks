let balance = 5000

document.getElementById('credit').addEventListener('click', function() {
    let creditamt = document.getElementById('amount').value;
    let parseCredit = parseInt(creditamt) 
    const creditRes = balance +parseCredit

    alert(creditRes)

    localStorage.setItem('updateBlnc', creditRes)
})