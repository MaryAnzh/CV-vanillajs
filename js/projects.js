class Projects {
    slider_HTMLElem = document.querySelector('.cv__main__projects__wrap__slider-wrap__slider');
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
    ];

    projectsLenth = this.projects.length;

    sliderWidth = 50 * this.projectsLenth;
    shiftCount = 0;
    shiftCountMin = 0;
    shiftCountMax = this.projectsLenth - 2;
    shiftSize = 200 / this.projectsLenth;
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
                `<div class="cv__main__projects__wrap__slider-wrap__slider__item">
            <img
                class="cv__main__projects__wrap__slider-wrap__slider__item__img"
                src="/assets/projects/${elem.src}"
                alt="${elem.name}">
            <p class="cv__main__projects__wrap__slider-wrap__slider__item__title">${elem.name}</p>
        </div>`;
            htmlNodes += htmlElem;
        });
        this.slider_HTMLElem.style.width = `${this.sliderWidth}%`;
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

        if (type === 'left') {
            this.shiftCount++;
            this.currentShift -= this.shiftSize;
            console.log('shiftCount');
            console.log(this.shiftCount);
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
            this.currentShift += this.shiftSize;

            if (this.shiftCount === this.shiftCountMin) {
                this.rightSloderArroy_HTMLElem.classList.add('arrow-block');
            }
            if (this.shiftCount === this.shiftCountMax - 1) {
                this.leftSloderArroy_HTMLElem.classList.remove('arrow-block');
            }
        }

        this.slider_HTMLElem.style.marginLeft = `${this.currentShift}%`

    }

}

const projects = new Projects();