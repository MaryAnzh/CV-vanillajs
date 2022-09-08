import dictionary from "../assets/translator/dictionary.js";

class Translator {
    listItemForTranslate = document.querySelectorAll('.translator');
    dictionary = dictionary;

    checkBoxes = document.querySelectorAll('.cv__header__top__lang__check-box');
    checkers = document.querySelectorAll('.cv__header__top__lang__check-box__check');

    constructor() {
        this.render();
        this.afterRender();
        ;
    }

    render() { }

    afterRender() {
        const lang = 'en';
        this.selectLang(lang)
        this.translate(lang);
        this.checkBoxes.forEach((checkBox) => checkBox.addEventListener('click', (e) => this.changeLanguageOnClick(e)));
    }

    translate(lang) {
        this.listItemForTranslate.forEach(element => {
            const translateKey = (element.dataset.translate).split('.');
            const elemText = this.dictionary[translateKey[0]][translateKey[1]][lang];
            element.textContent = elemText;
        });
    }

    changeLanguageOnClick(e) {
        const elem = e.target;
        const lang = elem.dataset.lang;
        this.checkers.forEach((el) => el.style.display = 'none');

        this.selectLang(lang);
        this.translate(lang);
    }

    selectLang(lang) {
        const arr = Array.from(this.checkers);
        const chackerArr = arr.filter(elem => elem.dataset.lang === lang);
        const chacker = chackerArr[0];
        chacker.style.display = 'block';
    }
}

const translator = new Translator();