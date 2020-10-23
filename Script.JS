const currencyEl_1 = document.getElementById('currency-one');
const amountEl_1 = document.getElementById('amount-one');
const currencyEl_2 = document.getElementById('currency-two');
const amountEl_2 = document.getElementById('amount-two');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

//Fetch exchange rate and update DOM
function calc () {

const currency1 = currencyEl_1.value;
const currency2 = currencyEl_2.value;

    fetch(`https://v6.exchangerate-api.com/v6/ba9321d6b356d519d24244f3/latest/${currency1}`).then(res =>res.json()).then(data => {
        const rate = data.conversion_rates[currency2];
        rateEl.innerText = `1 ${currency1} = ${rate} ${currency2}`;

        amountEl_2.value = (amountEl_1.value * rate).toFixed(2);
    })
}

//Event Listeners
currencyEl_1.addEventListener('change', calc);
amountEl_1.addEventListener('input', calc);
currencyEl_2.addEventListener('change', calc);
amountEl_2.addEventListener('input', calc);

swap.addEventListener('click', () => {
    const temp = currencyEl_1.value;
    currencyEl_1.value = currencyEl_2.value;
    currencyEl_2.value = temp;
    calc();
})
calc();



