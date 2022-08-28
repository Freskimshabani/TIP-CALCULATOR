var PeopleNr = document.querySelector('.people--number');

var Bill = document.querySelector('.bill--amount');

var Five = document.querySelector('.tip--percentage--button').value = 0.05;

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
    validInput();
    let tipPerc = Bill.value * Five;
    let result = tipPerc / PeopleNr.value;
    var rounded = Math.round((result + Number.EPSILON) * 100) / 100;
    document.querySelector('.tip--output--amount').innerHTML = "$" + rounded;
    document.querySelector('.tip--output--total').innerHTML = "$" + tipPerc;
    console.log(result);  
}
function resetBttn(){
    Bill.value= null;
    PeopleNr.value = null;
    document.querySelector('.tip--output--amount').innerHTML = "$0.00";
    document.querySelector('.tip--output--total').innerHTML = "$0.00";
}

if (Bill.after.value == ""||PeopleNr.after.value == ""){
    validInput();
}