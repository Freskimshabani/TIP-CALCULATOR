var PeopleNr = document.querySelector('.people--number');

var Bill = document.querySelector('.bill--amount');

var Five = document.querySelector('.tip--percentage--button').value = 0.05;
var Ten = document.querySelector('tip--percentage--button').value = 0.1;
var Fifteen = document.querySelector('tip--percentage--button').value = 0.15;
var TwentyFive = document.querySelector('tip--percentage--button').value = 0.25;
var Fifty = document.querySelector('tip--percentage--button').value = 0.5;
var Custom = document.querySelector('tip--percentage--button').value;


function validInput(){
    if(Bill.value == null ,Bill.value == 0){
        document.querySelector('.bill--error').innerHTML = "Cannot be 0!"
        Bill.classList.add('error');
    } else if(Bill.value <= 0){
        document.querySelector('.bill--error').innerHTML = "Cannot be negative!"
        Bill.classList.add('error');
    } else{
        document.querySelector('.bill--error').innerHTML = null;
        Bill.classList.remove('error');
    };
    if(PeopleNr.value == null, PeopleNr.value == 0){
        document.querySelector('.people--error').innerHTML = "Cannot be 0!"
        PeopleNr.classList.add('error');
    } else if(PeopleNr.value <= 0){
        document.querySelector('.people--error').innerHTML = "Cannot be negative!"
        PeopleNr.classList.add('error');

    } else{
        document.querySelector('.people--error').innerHTML = null;
        PeopleNr.classList.remove('error');

    };
}

function tipAmount(){
    let tipPerc = Bill.value * Five;
    let result = tipPerc / PeopleNr.value;
    document.querySelector('.tip--output--amount').innerHTML = result;
    document.querySelector('.tip--output--total').innerHTML = tipPerc;
    console.log(result);
}

function calcFunction(){
    if(validInput == false){
        return tipAmount()
    } else{}
}
