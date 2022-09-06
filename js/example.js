class Example {
    frame = document.querySelector('.frame__body');
    form = null;
    formInput = null;
    createArrayButton = null;
    deleteArrayButton = null;
    shuffleArrayButton = null;
    numberListVeiw = null;
    messageVlew = null;
    functionButtons = null;

    currentInputValue = 0;

    arrayFunctions = {
        sort: ['to max', 'to min'],
        filter: ['even', 'odd'],
        reduce: ['sum'],
        reset: ['reset'],
    };

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
           ${this.formRender()}
        <div class="example__fun">
            <ul class="example__fun__list"></ul>
        </div>
    </div>`;
        this.frame.innerHTML = viewExample;
        this.functionsArrayRender();
    }

    afteRender() {
        this.form = document.querySelector('.example__form');
        this.formInput = document.querySelector('.example__form__input');
        this.createArrayButton = document.querySelector('.example__form__buttons__create');
        this.shuffleArrayButton = document.querySelector('.example__form__buttons__shuffle');
        this.numberListVeiw = document.querySelector('.example__view__list');
        this.messageVlew = document.querySelector('.example__view__text');
        this.deleteArrayButton = document.querySelector('.example__form__buttons__delete');
        this.functionButtons = document.querySelectorAll('.example__fun__list__list-item__buttons__button');

        this.formInput.addEventListener('focus', () => this.createArrayButton.classList.remove('example-block-item'));
        this.form.addEventListener('submit', (e) => this.submit(e));
        this.functionButtons.forEach((button) => button.addEventListener('click', (e) => this.changeArrayOnClick(e)));
    }

    formRender() {
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

    functionsButtonsRender(array) {
        return array.reduce((prev, curr) => {
            const data = curr.split(' ');
            return prev + `<button 
          class="example__fun__list__list-item__buttons__button example-block-item"
          data-type="${data.join('')}">
            ${curr}
        </button>`;
        }, ``)
    };

    functionsArrayRender() {
        const functionsButtonsList = document.querySelector('.example__fun__list');
        for (let list in this.arrayFunctions) {
            const li = document.createElement('li');
            li.classList.add('example__fun__list__list-item');
            li.textContent = list;
            const view = `
            <p class="example__fun__list__list-item__title">${list}:</p>
            <ul class="example__fun__list__list-item__buttons">
              ${this.functionsButtonsRender(this.arrayFunctions[list])}
            </ul>
            `;
            li.innerHTML = view;
            functionsButtonsList.appendChild(li);
        };
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

    changeClass(nodes, className, type) {
        if (type === 'remove') {
            nodes.forEach((node) => node.classList.remove(className));
        }
        if (type === 'add') {
            nodes.forEach((node) => node.classList.add(className));
        }
    }

    removeAllChild(element) {
        while (element.firstChild) {
            element.removeChild(element.firstChild);
        }
    }

    shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    toMax(array) {
        array.sort((a, b) => a - b);
    }

    toMin(array) {
        array.sort((a, b) => b - a);
    }

    submit(e) {
        e.preventDefault();
        const submitter = e.submitter;
        const submitterType = submitter.dataset.type;

        if (submitterType === 'create') {
            this.formInput.classList.add('example-block-item');
            this.deleteArrayButton.classList.remove('example-block-item');
            this.shuffleArrayButton.classList.remove('example-block-item');
            this.changeClass(this.functionButtons, 'example-block-item', 'remove'); submitter.classList.add('example-block-item');
            submitter.classList.add('example-block-item');
            this.messageVlew.style.display = 'none';
            this.numberListVeiw.style.display = 'flex';

            const value = +(this.formInput.value);
            this.formInput.blur();
            this.result = this.createArray(value);
            this.renderViewArray(this.result);
            this.currentInputValue = value;
        }

        if (submitterType === 'delete') {
            this.formInput.classList.remove('example-block-item');
            this.createArrayButton.classList.add('example-block-item');
            this.shuffleArrayButton.classList.add('example-block-item');
            this.changeClass(this.functionButtons, 'example-block-item', 'add'); submitter.classList.add('example-block-item');
            this.messageVlew.style.display = 'block';
            this.numberListVeiw.style.display = 'none';
            this.formInput.value = '';

            this.result = [];
            this.removeAllChild(this.numberListVeiw);
            this.currentInputValue = 0;
        }

        if (submitterType === 'shuffle') {
            this.shuffle(this.result);
            this.removeAllChild(this.numberListVeiw);
            this.renderViewArray(this.result);
        }
    }

    changeArrayOnClick(e) {
        const button = e.target;
        const type = button.dataset.type;

        switch (type) {

            case 'tomax':
                this.toMax(this.result);
                break;
            case 'tomin':
                this.toMin(this.result);
                break;
            case 'even':
                const even = this.result.filter((num) => num % 2 === 0);
                this.result = even;
                break;
            case 'odd':
                const odd = this.result.filter((num) => num % 2 !== 0);
                this.result = odd;
                break;
            case 'sum':
                const sum = this.result.reduce((curr, sum) => curr + sum, 0);
                this.result = [sum];
            case 'reset':
                this.result = this.createArray(this.currentInputValue);
                this.changeClass(this.functionButtons, 'example-block-item', 'remove');
                break;
            default:
                break;
        }
        this.removeAllChild(this.numberListVeiw);
        if (this.result.length === 0) {
            this.result.push(`No result`);
            this.functionButtons.forEach((button) => {
                if (button.dataset.type !== 'reset') {
                    button.classList.add('example-block-item');
                }
            })
        }
        this.renderViewArray(this.result);
    }
}

const example = new Example();