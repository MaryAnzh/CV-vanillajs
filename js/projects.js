class Projects {
    slider_HTMLElem = document.querySelector('.cv__main__projects__wrap__slider-wrap__slider');
    sliderItem__ = document.querySelector('.cv__main__projects__wrap__slider-wrap__slider__item');
    projectsList_HTMLElem = document.querySelector('.cv__main__projects__wrap__list-wrap__list');
    leftSloderArroy_HTMLElem = document.querySelector('#leftSliderArroy');
    rightSloderArroy_HTMLElem = document.querySelector('#rightSliderArroy');

    projects = [
        {
            name: 'project-management-app',
            src: 'project-management-app.png',
        },
        {
            name: 'project-management-app',
            src: 'project-management-app-2.png',
        },
        {
            name: 'project-management-app',
            src: 'project-management-app.png',
        },
        {
            name: 'project-management-app',
            src: 'project-management-app-2.png',
        },
        {
            name: 'project-management-app',
            src: 'project-management-app.png',
        },
    ];

    projectsLenth = this.projects.length;
    miniSliderScreenWidth = 1150;
    windowInnerWidth = window.innerWidth;
    currwntViewItem = this.windowInnerWidth > this.miniSliderScreenWidth ? 2 : 1; a

    shiftCount = 0;
    currentShift = 0;

    constructor() {
        this.currentShowList = [
            this.projects[0],
            this.projects[1],
        ];

        //rendering
        this.createProjectsList();
        this.createSliderItem();

        //EventListener
        this.leftSloderArroy_HTMLElem.addEventListener('click', (e) => this.shiftSliderItemOnClick(e));
        this.rightSloderArroy_HTMLElem.addEventListener('click', (e) => this.shiftSliderItemOnClick(e));
        window.addEventListener('resize', (e) => this.updateSloderView(e));
    }

    createSliderItem() {
        this.projects.forEach((elem, index) => {
            const div = document.createElement('div');
            div.classList.add('cv__main__projects__wrap__slider-wrap__slider__item');
            const htmlElem =
                `<div class="cv__main__projects__wrap__slider-wrap__slider__item__item-view">
                <div class="img-wrqp">
                  <div class="item-number">${index + 1}</div>
                  <img
                    class="cv__main__projects__wrap__slider-wrap__slider__item__item-view__img"
                    src="/assets/projects/${elem.src}"
                    alt="${elem.name}">
                </div>
                <p class="cv__main__projects__wrap__slider-wrap__slider__item__item-view__title">${elem.name}</p>
            </div>`;
            div.innerHTML = htmlElem;
            this.slider_HTMLElem.appendChild(div);
        });
    }

    createProjectsList() {
        this.projects.forEach((proj) => {
            const li = document.createElement('li');
            li.textContent = proj.name;
            this.projectsList_HTMLElem.appendChild(li);
        });
    }

    updateSloderView() {
        this.windowInnerWidth = window.innerWidth;
        this.currwntViewItem = this.windowInnerWidth > this.miniSliderScreenWidth ? 2 : 1;

        const viewItem = this.currwntViewItem;
        const min = 0;
        const max = this.projectsLenth - viewItem;
        const items = document.querySelectorAll('.cv__main__projects__wrap__slider-wrap__slider__item');

        if (this.shiftCount === min) {
            this.rightSloderArroy_HTMLElem.classList.add('arrow-block');
        }
        if (this.shiftCount === max) {
            this.leftSloderArroy_HTMLElem.classList.add('arrow-block');
        }
        if (this.shiftCount === min + 1) {
            this.rightSloderArroy_HTMLElem.classList.remove('arrow-block');
        }
        if (this.shiftCount === max - 1) {
            this.leftSloderArroy_HTMLElem.classList.remove('arrow-block');
        }
        if (this.shiftCount > max) {
            items.forEach((elem) => {
                elem.style.transform = `translateX(${this.currentShift + 100}%)`;
            });
            this.shiftCount--;
            this.currentShift += 100;
        }
    }

    shiftSliderItemOnClick(e) {
        const arrow = e.target;
        const type = arrow.dataset.type;

        switch (type) {
            case 'left':
                this.shiftCount++;
                this.currentShift -= 100;
                break;

            case 'right':
                this.shiftCount--;
                this.currentShift += 100;
                break;

            default:
                break;
        }

        const items = document.querySelectorAll('.cv__main__projects__wrap__slider-wrap__slider__item');
        items.forEach((elem) => {
            elem.style.transform = `translateX(${this.currentShift}%)`;
        });
        this.updateSloderView();
    }
}

const projects = new Projects();