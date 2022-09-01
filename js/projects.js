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
    currwntViewItem = this.windowInnerWidth > this.miniSliderScreenWidth ? 2 : 1;

    shiftCountMin = 0;
    shiftCountMax = this.projectsLenth - this.currwntViewItem;

    shiftCount = 0;
    currentShift = 0;


    constructor() {
        this.currentShowList = [
            this.projects[0],
            this.projects[1],
        ];
        this.createProjectsList();
        this.createSliderItem();

        this.leftSloderArroy_HTMLElem.addEventListener('click', (e) => this.shiftSliderItemOnClick(e));
        this.rightSloderArroy_HTMLElem.addEventListener('click', (e) => this.shiftSliderItemOnClick(e));
    }

    createSliderItem() {
        let htmlNodes = '';
        this.projects.forEach((elem) => {
            const htmlElem =
                `<div class="cv__main__projects__wrap__slider-wrap__slider__item"></div>`;
            // <div class="cv__main__projects__wrap__slider-wrap__slider__item__item-view">
            //     <img
            //     class="cv__main__projects__wrap__slider-wrap__slider__item__item-view__img"
            //     src="/assets/projects/${elem.src}"
            //     alt="${elem.name}">
            //     <p class="cv__main__projects__wrap__slider-wrap__slider__item__item-view__title">${elem.name}</p>
            // </div>
            htmlNodes += htmlElem;
        });

        this.slider_HTMLElem.innerHTML = htmlNodes;
    }

    createProjectsList() {
        this.projects.forEach((proj) => {
            const li = document.createElement('li');
            li.textContent = proj.name;
            this.projectsList_HTMLElem.appendChild(li);
        });
    }

    shiftSliderItemOnClick(e) {
        const arrow = e.target;
        const type = arrow.dataset.type;

        const items = document.querySelectorAll('.cv__main__projects__wrap__slider-wrap__slider__item');
        const itemWidth = items[0].clientWidth;

        console.log(itemWidth);
        if (type === 'left') {
            this.shiftCount++;
            this.currentShift -= itemWidth;

            if (this.shiftCount === this.shiftCountMax) {
                this.leftSloderArroy_HTMLElem.classList.add('arrow-block');
            }
            if (this.shiftCount === this.shiftCountMin + 1) {
                console.log('отработал');
                this.rightSloderArroy_HTMLElem.classList.remove('arrow-block');
            }
        }
        if (type === 'right') {
            this.shiftCount--;
            this.currentShift += itemWidth;

            if (this.shiftCount === this.shiftCountMin) {
                this.rightSloderArroy_HTMLElem.classList.add('arrow-block');
            }
            if (this.shiftCount === this.shiftCountMax - 1) {
                this.leftSloderArroy_HTMLElem.classList.remove('arrow-block');
            }
        }

        console.log('this.currentShift');
        console.log(this.currentShift);
        items.forEach((elem) => {
            elem.style.transform = `translate(${this.currentShift}px, 0px)`;
        });
    }
}

const projects = new Projects();