const url = "https://api.frankfurter.dev/v1/latest?base=USD&symbols=EUR";

async function showRate() {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    document.getElementById("price").textContent = `1 USD = ${data.rates.EUR} EUR`;
    document.getElementById("date").textContent = "As of " + data.date;
}

showRate();
