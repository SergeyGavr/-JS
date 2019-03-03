'use strict';

let tab = document.querySelectorAll('.info-header-tab'),
    info = document.querySelector('.info-header'),
    tabContent = document.querySelectorAll('.info-tabcontent');

function hideTabContent(a) { // скрываем контент таба
    for (let i = a; i < tabContent.length; i++) {
        tabContent[i].classList.remove('show'); //удалить класс
        tabContent[i].classList.add('hide'); //добавить класс
    }
}

hideTabContent(1); // скрываем все табы, начиная со второго

function showTabContent(b) {
    if (tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide');
        tabContent[b].classList.add('show');
    } // если элемент скрыт, делаем его видимым
}

info.addEventListener('click', function(event) {
    let target = event.target;
    //  если мы кликнули на табу...
    if (target && target.classList.contains('info-header-tab')) {
        for (let i = 0; i < tab.length; i++) {
            if (target == tab[i]) {
                //сначала скрываем все табы
                hideTabContent(0);
                // затем отображажаем элемент, по которому кликнули 
                showTabContent(i); 
                break;
            }
        }
    }
});
