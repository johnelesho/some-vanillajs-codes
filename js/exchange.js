const amt1 = document.querySelector('#amount1'),
    amt2 = document.querySelector('#amount2'),
    currency1 = document.querySelector('#currency1'),
    currency2 = document.querySelector("#currency2");


fetch("https://api.exchangeratesapi.io/latest")
    .then(response => {
        return response.json();
    })
    .then(data => {

        // console.log(currency_rates)
        currencies = Object.keys(data.rates)
        currencies.map(currency => {
            const option = document.createElement('option');
            option.value = currency;
            option.innerText = currency;

            currency1.appendChild(option);
            // currency2.appendChild(option);

        })
        currencies.map((currency) => {
          const option = document.createElement("option");
          option.value = currency;
          option.innerText = currency;

          currency2.appendChild(option);
          // currency2.appendChild(option);
        });

    })


function calculateExchange(e) {

    fetch(`https://api.exchangeratesapi.io/latest?base=${currency1.value}`)
      .then((response) => {
        return response.json();
      })
        .then((json) => {
          amt2.value = amt1.value * json.rates[currency2.value];
      });
    // console.log(baseValue)
    // console.log(currency_rates[currency1.value])
    // console.log(currency_rates[currency2.value])

}
amt1.oninput = calculateExchange;

currency1.onchange = calculateExchange;
currency2.onchange = calculateExchange;

// console.log(amt1, amt2, currency1, currency2)