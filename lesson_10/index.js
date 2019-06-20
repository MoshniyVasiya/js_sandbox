
const from = document.getElementById('from');
const to = document.getElementById('to');
const showButton = document.getElementById('show_button');
const sell = document.getElementById('sell');
const buy = document.getElementById('buy');
const calcButton = document.getElementById('calc_button');
let select1 = document.getElementById('select1');
let select2 = document.getElementById('select2');


// converter

fetch('https://api.exchangeratesapi.io/latest')
    .then(response => response.json())
    .then(data => {

    //   console.log(data.rates);
      
        
      data.rates['EUR'] = 1;
      
      calcButton.addEventListener('click', () => { 
        let sellVal = sell.value;
        let rate = data.rates[select1.value];
        let rate2 = data.rates[select2.value];
        buy.value = (rate2 * sellVal / rate).toFixed(3);

        // console.log(sellVal);
        // console.log(rate2)
        // console.log(buy.value)
    });

    });





// Exchange LIST
showButton.addEventListener('click', () => {    
    let fromResult = from.value;
    let toResult = to.value;
    console.log(fromResult, toResult);
    
});

fetch('https://api.exchangeratesapi.io/2010-01-12');