class Example {
    frame_HTML = document.querySelector('.frame__body');
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
            <ul class="example__view__list">
              
            </ul>
        </div>
        <div class="example__nav">
            <ul class="example__nav__list"></ul>
        </div>
    </div>`;
        this.frame_HTML.innerHTML = viewExample;
        this.rebderNavList();
    }

    afteRender() {

    }

    rebderNavList() {
        const exampleNav_HTML = document.querySelector('.example__nav__list');
        this.navList.forEach((list) => {
            const li = document.createElement('li');
            li.classList.add('example__view__list__list-item');
            li.textContent = list;

            exampleNav_HTML.appendChild(li);
        });
    }

    renderViewArray(array) {
        const exampleView_HTML = document.querySelector('.example__view__list');
        array.forEach((num) => {
            const li = document.createElement('li');
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
}

const example = new Example();