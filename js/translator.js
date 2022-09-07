//Класс перевода приложения
import dictionary from "../assets/translator/dictionary.js";

const enElem = document.querySelector('#en');
const ruElem = document.querySelector('#ru');

class Translator {
    lang = 'en';
    listItemForTranslate = document.querySelectorAll('.translator');
    dictionary = dictionary;
    langCheckBoxes = document.querySelectorAll('.cv__header__top__lang__check-box');
    langRadioElem = document.querySelectorAll('.cv__main__main-info__languages__language');

    constructor() {
        this.render();
        this.afterRender();
        ;
    }

    render() { }

    afterRender() {
        this.langCheckBoxes.forEach((checkBox) => checkBox.addEventListener('click', (e) => this.changeLanguageOnClick(e)));
    }

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
        this.langCheckBoxes.forEach(el => el.style.backgroundImage = 'none');
        elem.style.backgroundImage = 'url(/assets/icons/point.svg)';
        this.translate();
    }
}

const translator = new Translator();

translator.translate();