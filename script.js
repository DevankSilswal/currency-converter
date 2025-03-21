const rates = {
    USD: 1,
    INR: 83,
    EUR: 0.92,
    GBP: 0.78,
    JPY: 150
};

const amountInput = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const result = document.getElementById("result");

function convert() {
    const amount = parseFloat(amountInput.value);
    if (!amount || amount <= 0) {
        result.textContent = "Please enter a valid amount!";
        result.style.color = "#e74c3c";
        return;
    }

    const fromRate = rates[fromCurrency.value];
    const toRate = rates[toCurrency.value];
    const converted = (amount / fromRate) * toRate;

    result.textContent = `${amount} ${fromCurrency.value} = ${converted.toFixed(2)} ${toCurrency.value}`;
    result.style.color = "#27ae60";
}

function swapCurrencies() {
    const temp = fromCurrency.value;
    fromCurrency.value = toCurrency.value;
    toCurrency.value = temp;
    if (amountInput.value) convert();
}
