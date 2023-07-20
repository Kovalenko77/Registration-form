
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

let languageLabelContent = {
    'en': {
        'label-language': 'Language',
        'label-email':'Your email',
        'label-password': 'Your password',
        'label-country': 'Your country',
        'label-notifications': 'Receive notifications about promotions',
        'label-ua': 'Ua',
        'label-en': 'En',
        'label-Ukraine' : 'Ukraine',
        'label-Belarus': 'Belarus',
        'label-Poland': 'Poland',
        'label-Spain': 'Spain',
        'label-submit': 'Submit'
    },
    'ua': {
        'label-language': 'Мова',
        'label-email':'Ваша почтова скриня',
        'label-password': 'Ваш пароль',
        'label-country': 'Ваша країна',
        'label-notifications': 'Отримувати повідомлення про акціЇ',
        'label-ua': 'Укр',
        'label-en': 'Англ',
        'label-Ukraine' : 'Україна',
        'label-Belarus': 'Білорусь',
        'label-Poland': 'Польща',
        'label-Spain': 'Іспанія',
        'label-submit': 'Відправити'
    }
}

changeLanguage();
function changeLanguage() {
    let languageValue = document.getElementById('select-language').value
    let labelEls = document.querySelectorAll('[translate]');
    for (let i = 0; i < labelEls.length; i++ )  { 
        let translationKey = labelEls[i].getAttribute('translate');
        let translationValue = languageLabelContent[languageValue][translationKey];
        labelEls[i].textContent = translationValue;
    }
}    
