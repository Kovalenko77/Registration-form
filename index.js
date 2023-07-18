
let inputEmaleElem = document.getElementById('email');
inputEmaleElem.value = localStorage.getItem('email');
let selectCountryElem = document.getElementById('select-country');
selectCountryElem.value = localStorage.getItem('select-country');
let formCheckboxElem = document.getElementById('notifications');
const fromLS = localStorage.getItem('notifications');
formCheckboxElem.checked = JSON.parse(fromLS);

function saveInputValue(id,type) {
    if(type === 'checkbox'){
        let elem = document.getElementById(id);
        localStorage.setItem(id, elem.checked);
        return;
    }
    console.log('vhod');
    let elem = document.getElementById(id);
    localStorage.setItem(id, elem.value);
}

