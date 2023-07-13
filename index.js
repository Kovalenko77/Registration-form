// - навесить слушателей на каждый инпут
// - создать одну функцию, которая будет креэйтить 
// ключ (имя ключа - id) и записывать в него значение
// - візіваем єту функцию для аждого инпута
let inputEmaleElem = document.getElementById('email');
inputEmaleElem.value = localStorage.getItem('email');

function saveInputValue(id) {
    let elem = document.getElementById(id);
    localStorage.setItem(id, elem.value);
    console.log('elem.value',elem.value);
}