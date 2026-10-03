const currencies = ["CAD", "EUR", "GBP", "JPY"];
const url = `https://api.frankfurter.dev/v1/latest?base=USD&symbols=${currencies.join(",")}`;

async function showRates() {
    const response = await fetch(url);
    const data = await response.json();

    const list = document.getElementById("rates");

    for (const code of currencies) {
        const item = document.createElement("li");
        item.innerHTML = `<span>${code}</span><span>${data.rates[code].toFixed(2)}</span>`;
        list.appendChild(item);
    }

    document.getElementById("date").textContent = "As of " + data.date;
}

showRates();