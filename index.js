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
    const defaultLanguage = 'en';
    changeLanguage(restoredLang || defaultLanguage);
    const timer = setInterval(startTimer, 1000);

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

function startTimer() {
    let totalSeconds = 0;
    let restoredTime = localStorage.getItem('totalSeconds');
    countTimer(restoredTime || totalSeconds);
}

function countTimer(time) {
    ++time;
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor((time - hours * 3600) / 60);
    let seconds = time - (hours * 3600 + minutes * 60);
    console.log('hour', hours)
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
    document.getElementById('timer').innerHTML = `${hours} : ${minutes} : ${seconds}`;
    saveTotalSecondsValue(time);
}

function saveTotalSecondsValue(time) {
    localStorage.setItem('totalSeconds', time);
}

return {
    saveInputValue: saveInputValue,
    onChangeLanguage: onChangeLanguage
}

})();

