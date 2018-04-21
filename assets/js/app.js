// console.log('JS Loaded');


var radioNational = document.getElementById("radio-national");
var radioInternational = document.getElementById("radio-international");

radioNational.addEventListener('OnRadioStateChange', national);
radioInternational.addEventListener('OnRadioStateChange', international);

function national() {
    alert ("The " + radio.value + " radio is selected.");
    console.log('clicked national');
};

function international() {
    alert ("The " + radio.value + " radio is selected.");
    console.log('clicked international');
}
