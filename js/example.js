class Example {
    frame_HTML = document.querySelector('.frame__body');
    form__HTML = null;
    formInput_HTMLElem = null;
    createArroyButton_HTMLElem = null;
    deleteArroyButton_HTMLElem = null;
    viewList_HTMLElem = null;
    viewText_HTMLElem = null;
    formFieldError_HTMLElem = null;


    navList = [
        '  ',
    ];

    result = [];

    constructor() {
        this.render();
        this.afteRender();
    }

    render() {
        const viewExample = `
        <div class="example">
        <div class="example__view">
            <p class="example__view__text">
            Enter number from 2 to 9
            </p>
            <ul class="example__view__list"></ul>
        </div>
        ${this.formView()}
        <div class="example__nav">
            <ul class="example__nav__list"></ul>
        </div>
    </div>`;
        this.frame_HTML.innerHTML = viewExample;
        this.rebderNavList();
    }

    afteRender() {
        this.form__HTML = document.querySelector('.example__form');
        this.formInput_HTMLElem = document.querySelector('.example__form__input');
        this.createArroyButton_HTMLElem = document.querySelector('.example__form__buttons__create');
        this.viewList_HTMLElem = document.querySelector('.example__view__list');
        this.viewText_HTMLElem = document.querySelector('.example__view__text');
        this.deleteArroyButton_HTMLElem = document.querySelector('.example__form__buttons__delete');

        this.formInput_HTMLElem.addEventListener('focus', () => this.createArroyButton_HTMLElem.classList.remove('example-block-item'));
        this.form__HTML.addEventListener('submit', (e) => this.submit(e));
    }

    formView() {
        const form = `
        <form class="example__form">
        <input class="example__form__input"
            type="text"
            required 
            pattern="[2-9]"
            maxlength="1">
            <div class="example__form__error">
            <p class="example__form__error__value">Enter correct value</p>
            </div>
        <div class="example__form__buttons">
            <button class="example__form__buttons__create example-block-item"
            type="submit"    
            data-type="create"
                type="button">
                  create
                </button>
            <button class="example__form__buttons__delete example-block-item"
                type="submit"    
                data-type="delete">
                  delete
             </button>
        </div>
    </form>
        `;
        return form;
    }

    rebderNavList() {
        const exampleNav_HTML = document.querySelector('.example__nav__list');
        this.navList.forEach((list) => {
            const li = document.createElement('li');
            li.classList.add('example__nav__list__list-item');
            li.textContent = list;

            exampleNav_HTML.appendChild(li);
        });
    }

    renderViewArray(array) {
        array.forEach((num) => {
            const li = document.createElement('li');
            li.classList.add('example__view__list__list-item');
            li.textContent = num;
            this.viewList_HTMLElem.appendChild(li);
        });
    }

    createArray(number) {
        let count = 0;
        const array = [];
        while (count < number) {
            array.push(++count);
        }
        return array;
    }

    removeBlockClass(HTMLNodes) {
        HTMLNodes.forEach((node) => node.classList.remove('example-block-item'));
    }

    removeAllChild(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    submit(e) {
        e.preventDefault();
        const submitter = e.submitter;
        const submitterType = submitter.dataset.type;

        if (submitterType === 'create') {
            this.formInput_HTMLElem.classList.add('example-block-item');
            this.deleteArroyButton_HTMLElem.classList.remove('example-block-item');
            submitter.classList.add('example-block-item');
            this.viewText_HTMLElem.style.display = 'none';
            this.viewList_HTMLElem.style.display = 'flex';

            const value = +(this.formInput_HTMLElem.value);
            this.result = this.createArray(value);
            this.renderViewArray(this.result);
        }

        if (submitterType === 'delete') {
            this.formInput_HTMLElem.classList.remove('example-block-item');
            this.createArroyButton_HTMLElem.classList.add('example-block-item');
            submitter.classList.add('example-block-item');
            this.viewText_HTMLElem.style.display = 'block';
            this.viewList_HTMLElem.style.display = 'none';
            this.formInput_HTMLElem.value = '';

            this.result = [];
            this.removeAllChild(this.viewList_HTMLElem);
        }

    }
}

const example = new Example();