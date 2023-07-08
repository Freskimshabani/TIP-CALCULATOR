const billInputField = document.getElementById('bill__input');
const peopleInputField = document.getElementById('people__input');

const tipPercentButtons = document.querySelectorAll('.percent__button');
const customTipPercentButton = document.querySelector('.custom__button');

let peopleError = document.getElementById('people__error');
let billError = document.getElementById('bill__error');

const tipAmountDisplay = document.getElementById('tip__amount');
const tipTotalDisplay = document.getElementById('tip__total');

function isInputEmpty() {
    let billValue = document.getElementById('bill__input').value;
    let peopleValue = document.getElementById('people__input').value;

    if (billValue == '') {
        billInputField.classList.add('input__style--error');
        billError.textContent = 'Cannot be 0!';
    } else if (billValue < 1.00) {
        billInputField.classList.add('input__style--error');
        billError.textContent = 'Must be at least $1.00!';
    }
    else {
        billInputField.classList.remove('input__style--error');
        billError.textContent = '';
    }

    if (peopleValue == '') {
        peopleInputField.classList.add('input__style--error');
        peopleError.textContent = 'Cannot be 0!';
    } else if (peopleValue < 1) {
        peopleInputField.classList.add('input__style--error');
        peopleError.textContent = 'Must be at least 1!';
    } else {
        peopleInputField.classList.remove('input__style--error');
        peopleError.textContent = '';
    }
}

tipPercentButtons.forEach(button => {
    button.addEventListener('dblclick', function () {
        const buttonID = this.id;
        let tipPercentage;


        switch (buttonID) {
            case '5__percent':
                tipPercentage = 5;
                break;
            case '10__percent':
                tipPercentage = 10;
                break;
            case '15__percent':
                tipPercentage = 15;
                break;
            case '25__percent':
                tipPercentage = 25;
                break;
            case '50__percent':
                tipPercentage = 50;
                break;
            case 'custom__percent':
                let customTipPercentValue = parseInt(customTipPercentButton.value);
                tipPercentage = customTipPercentValue;
                break;
        }

        console.log(tipPercentage);
        calculateTip(tipPercentage);
    });
});

function calculateTip(tipPercentage) {
    let billValue = parseFloat(billInputField.value);
    let peopleValue = parseInt(peopleInputField.value);
    let tip = billValue * (tipPercentage / 100);

    let tipPerPerson = (tip / peopleValue).toFixed(2);
    let total = ((billValue + tip) / peopleValue).toFixed(2);

    tipAmountDisplay.textContent = "$" + tipPerPerson;
    tipTotalDisplay.textContent = "$" + total;
}
