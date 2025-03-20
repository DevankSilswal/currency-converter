function convert() {
    // Get input values
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;
    const result = document.getElementById("result");

    // Exchange rates (relative to 1 USD, approximate values)
    const rates = {
        USD: 1,       // Base currency
        INR: 83,      // 1 USD = 83 INR
        EUR: 0.92,    // 1 USD = 0.92 EUR
        GBP: 0.78,    // 1 USD = 0.78 GBP
        JPY: 150      // 1 USD = 150 JPY
    };

    // Validation
    if (isNaN(amount) || amount <= 0) {
        result.textContent = "Please enter a valid amount!";
        return;
    }

    // Conversion logic
    let amountInUSD = amount / rates[fromCurrency]; // Convert to USD first
    let convertedAmount = amountInUSD * rates[toCurrency]; // Then to target currency

    // Display result
    result.textContent = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
}