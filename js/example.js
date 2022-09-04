class Example {
    frame_HTML = document.querySelector('.frame__body');
    form__HTML = null;
    formInput_HTMLElem = null;
    createArroyButton_HTMLElem = null;
    deleteArroyButton_HTMLElem = null;
    formFieldError_HTMLElem = null;


    navList = [
        'create array',
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
            <p class="example__form__error__value">Enter currect value</p>
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
        const exampleView_HTML = document.querySelector('.example__view__list');
        array.forEach((num) => {
            const li = document.createElement('li');
            li.classList.add('example__view__list__list-item');
            li.textContent = num;
            exampleView_HTML.appendChild(li);
        });
    }

    createArrow(number) {
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

    submit(e) {
        e.preventDefault();

        const value = this.formInput_HTMLElem.value;
        const submitter = e.submitter;
        console.log(submitter.dataset.type);

        submitter.classList.add('example-block-item');
        this.formInput_HTMLElem.classList.add('example-block-item');
        console.log(value);

        // 
        // 
        // const input = e.target[0];

        // console.log(e.target.children[0]);
    }
}

const example = new Example();