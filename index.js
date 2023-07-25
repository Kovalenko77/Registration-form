const LANGUAGE_LABEL_CONTENT = {
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

const store = (() => {

init();

function init() {
    const inputEmailElem = document.getElementById('email');
    inputEmailElem.value = localStorage.getItem('email');
    const selectCountryElem = document.getElementById('select-country');
    selectCountryElem.value = localStorage.getItem('select-country');
    const formCheckboxElem = document.getElementById('notifications');
    const restoredNotificationsCheckboxValue = localStorage.getItem('notifications');
    formCheckboxElem.checked = JSON.parse(restoredNotificationsCheckboxValue);
    const restoredLang = localStorage.getItem('select-language');
    changeLanguage(restoredLang);
}

function changeLanguage(lang) {
    translateContent(lang);
    saveLanguage(lang);
    setValueForLangSelects(lang);
}

function translateContent(lang) {
    const labelEls = document.querySelectorAll('[translate]');
    for (let i = 0; i < labelEls.length; i++ )  { 
        const translationKey = labelEls[i].getAttribute('translate');
        const translationValue = LANGUAGE_LABEL_CONTENT[lang][translationKey];
        labelEls[i].textContent = translationValue;
    }
}

function saveLanguage(lang) {
    localStorage.setItem('select-language', lang);
}

function setValueForLangSelects(languageValue) {
    const allLangElems = document.getElementsByClassName('lang-select');
    for (let i = 0; i < allLangElems.length; i++) {
        allLangElems[i].value = languageValue;
    }
}

function saveInputValue(event) {
    const currentFormElement = event.target;
    let value = currentFormElement.type === 'checkbox' ? currentFormElement.checked : currentFormElement.value;
    localStorage.setItem(currentFormElement.id, value);
}

function onChangeLanguage(event) {
    const selectLangElem = event.target;
    const languageValue = selectLangElem.value;
    changeLanguage(languageValue);
}

return {
    saveInputValue: saveInputValue,
    onChangeLanguage: onChangeLanguage
}
})();
console.log(store)

const timerVar = setInterval(countTimer, 1000);
let totalSeconds = 0;
function countTimer() {
    ++totalSeconds;
    let hour = Math.floor(totalSeconds / 3600);
    let minute = Math.floor((totalSeconds - hour * 3600) / 60);
    let seconds = totalSeconds - (hour * 3600 + minute * 60);
    if(hour < 10) {
        hour = '0' + hour;
    }
    if(minute < 10) {
        minute = '0' + minute;
    }
    if(seconds < 10) {
        seconds = '0' + seconds;
    }
    document.getElementById('timer').innerHTML = `${hour} : ${minute} : ${seconds}`;
}