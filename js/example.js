class Example {
    frame = document.querySelector('.frame__body');
    form = null;
    formInput = null;
    createArrayButton = null;
    deleteArrayButton = null;
    shuffleArrayButton = null;
    numberListVeiw = null;
    messageVlew = null;

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
        this.frame.innerHTML = viewExample;
        this.renderNavList();
    }

    afteRender() {
        this.form = document.querySelector('.example__form');
        this.formInput = document.querySelector('.example__form__input');
        this.createArrayButton = document.querySelector('.example__form__buttons__create');
        this.shuffleArrayButton = document.querySelector('.example__form__buttons__shuffle');
        this.numberListVeiw = document.querySelector('.example__view__list');
        this.messageVlew = document.querySelector('.example__view__text');
        this.deleteArrayButton = document.querySelector('.example__form__buttons__delete');

        this.formInput.addEventListener('focus', () => this.createArrayButton.classList.remove('example-block-item'));
        this.form.addEventListener('submit', (e) => this.submit(e));
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

                <button class="example__form__buttons__shuffle example-block-item"
                type="submit"    
                data-type="shuffle">
                shuffle
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

    renderNavList() {
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
            this.numberListVeiw.appendChild(li);
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

    removeClass(nodes, className) {
        nodes.forEach((node) => node.classList.remove(className));
    }

    removeAllChild(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    submit(e) {
        e.preventDefault();
        const submitter = e.submitter;
        const submitterType = submitter.dataset.type;

        if (submitterType === 'create') {
            this.formInput.classList.add('example-block-item');
            this.deleteArrayButton.classList.remove('example-block-item');
            this.shuffleArrayButton.classList.remove('example-block-item');
            submitter.classList.add('example-block-item');
            this.messageVlew.style.display = 'none';
            this.numberListVeiw.style.display = 'flex';

            const value = +(this.formInput.value);
            this.formInput.blur();
            this.result = this.createArray(value);
            this.renderViewArray(this.result);
        }

        if (submitterType === 'delete') {
            this.formInput.classList.remove('example-block-item');
            this.createArrayButton.classList.add('example-block-item');
            this.shuffleArrayButton.classList.add('example-block-item');
            submitter.classList.add('example-block-item');
            this.messageVlew.style.display = 'block';
            this.numberListVeiw.style.display = 'none';
            this.formInput.value = '';

            this.result = [];
            this.removeAllChild(this.numberListVeiw);
        }

        if (submitterType === 'shuffle') {
            this.shuffle(this.result);
            this.removeAllChild(this.numberListVeiw);
            this.renderViewArray(this.result);
        }
    }
}

const example = new Example();