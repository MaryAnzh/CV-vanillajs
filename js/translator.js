//Класс перевода приложения
import dictionary from "../assets/translator/dictionary.js";

const enElem = document.querySelector('#en');
const ruElem = document.querySelector('#ru');

class Translator {
    lang = 'en';
    listItemForTranslate = document.querySelectorAll('.translator');
    dictionary = dictionary;
    langRadioElem = document.querySelectorAll('.cv__header__wrap__languages__language');

    constructor() { }

    translate() {
        this.listItemForTranslate.forEach(element => {
            const translateKey = (element.dataset.translat).split('.');
            const elemText = this.dictionary[translateKey[0]][translateKey[1]][this.lang];
            element.textContent = elemText;
        });
    }

    changeLanguageOnClick(e) {
        const elem = e.target;
        this.lang = elem.dataset.lang;
        this.langRadioElem.forEach(elem => elem.classList.remove('active'));
        elem.classList.add('active');
        this.translate();
    }
}

const translator = new Translator();

enElem.addEventListener('click', (e) => translator.changeLanguageOnClick(e));
ruElem.addEventListener('click', (e) => translator.changeLanguageOnClick(e));

translator.translate();
