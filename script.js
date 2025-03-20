// Exchange rates (relative to 1 USD, approximate values)
const rates = {
    USD: 1,       // Base currency
    INR: 83,      // 1 USD = 83 INR
    EUR: 0.92,    // 1 USD = 0.92 EUR
    GBP: 0.78,    // 1 USD = 0.78 GBP
    JPY: 150      // 1 USD = 150 JPY
};

// Get DOM elements
const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

// Debounce function to limit frequent updates
function debounce(func, delay) {
    let timeout;
    return function (...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

// Core conversion logic
function convert() {
    const amount = parseFloat(amountInput.value);
    const from = fromCurrency.value;
    const to = toCurrency.value;

    result.style.opacity = "0"; // Fade out before update

    if (isNaN(amount) || amount <= 0) {
        result.textContent = "Please enter a valid amount!";
        result.style.color = "#d32f2f"; // Red for error
        result.style.opacity = "1";
        return;
    }

    const amountInUSD = amount / rates[from];
    const convertedAmount = amountInUSD * rates[to];

    result.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
    result.style.color = "#1b5e20"; // Green for success
    result.style.opacity = "1"; // Fade in
}

// Swap currencies
function swapCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    convert(); // Re-run conversion after swap
}

// Real-time conversion with debounce
const debouncedConvert = debounce(convert, 300); // 300ms delay
amountInput.addEventListener("input", debouncedConvert);
fromCurrency.addEventListener("change", convert);
toCurrency.addEventListener("change", convert);

// Initial conversion on page load (if amount is entered)
if (amountInput.value) convert();
