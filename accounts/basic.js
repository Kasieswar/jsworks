// Handle the form submission
document.getElementById("transaction-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const amount = parseFloat(document.getElementById("amount").value);
    const transactionType = document.getElementById("transaction-type").value;
    const resultDiv = document.getElementById("result");

    // Check if amount is a valid number
    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = "<p class='error'>Please enter a valid amount greater than 0.</p>";
        return;
    }

    // Process credit or debit transaction
    if (transactionType === "credit") {
        resultDiv.innerHTML = `<p class='success'>You have credited $${amount.toFixed(2)} successfully!</p>`;
    } else if (transactionType === "debit") {
        resultDiv.innerHTML = `<p class='success'>You have debited $${amount.toFixed(2)} successfully!</p>`;
    }
});
