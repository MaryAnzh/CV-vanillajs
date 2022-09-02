class Projects {
    slider_HTMLElem = document.querySelector('.cv__main__projects__wrap__slider-wrap__slider');
    sliderItem__ = document.querySelector('.cv__main__projects__wrap__slider-wrap__slider__item');
    projectsList_HTMLElem = document.querySelector('.cv__main__projects__wrap__list-wrap__list');
    leftSloderArroy_HTMLElem = document.querySelector('#leftSliderArroy');
    rightSloderArroy_HTMLElem = document.querySelector('#rightSliderArroy');

    projects = [
        {
            name: 'project-management-app (Angular)',
            src: 'project-management-app-2.png',
            urlDeploy: 'maryanzh.github.io/angular-project-management-app-individual/',
            urlRepo: 'https://github.com/MaryAnzh/angular-project-management-app-individual',
        },
        {
            name: 'YouTube-client-app (Angular)',
            src: 'YouTube-client-app.png',
            urlDeploy: '',
            urlRepo: 'https://github.com/MaryAnzh/angular--YouTube-client-app',
        },
        {
            name: 'christmas-task (js, ts, webpack)',
            src: 'christmas-task.png',
            urlDeploy: 'https://maryanzh.github.io/christmas-task/',
            urlRepo: 'https://github.com/MaryAnzh/christmas-task',            
        },
        {
            name: 'Project-management-app-presentation for team task (Angular + Reveal.js)',
            src: 'Project-management-app-presentation.png',
            urlDeploy: 'https://maryanzh.github.io/Project-management-app-presentation/',
            urlRepo: 'https://github.com/MaryAnzh/Project-management-app-presentation/settings/pages',    
        },
        {
            name: 'cssMemSlider (HTML + CSS)',
            src: 'cssMemSlider.png',
            urlDeploy: 'https://maryanzh.github.io/cssMemSlider/cssMemSlider/',
            urlRepo: 'https://github.com/MaryAnzh/cssMemSlider',    
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
        this.renderProjectsList();
        this.renderSliderItem();

        //EventListener
        this.leftSloderArroy_HTMLElem.addEventListener('click', (e) => this.shiftSliderItemOnClick(e));
        this.rightSloderArroy_HTMLElem.addEventListener('click', (e) => this.shiftSliderItemOnClick(e));
        window.addEventListener('resize', (e) => this.updateSloderView(e));
    }

    renderSliderItem() {
        this.projects.forEach((elem, index) => {
            const div = document.createElement('div');
            div.classList.add('cv__main__projects__wrap__slider-wrap__slider__item');
            const htmlElem =
                `<div class="cv__main__projects__wrap__slider-wrap__slider__item__item-view">
                <div class="img-wrqp">
                  <div class="item-number">${index + 1}</div>
                  <img
                    class="cv__main__projects__wrap__slider-wrap__slider__item__item-view__img"
                    src="assets/projects/${elem.src}"
                    alt="${elem.name}">
                </div>
                <p class="cv__main__projects__wrap__slider-wrap__slider__item__item-view__title">${elem.name}</p>
            </div>`;
            div.innerHTML = htmlElem;
            this.slider_HTMLElem.appendChild(div);
        });
    }

    renderProjectsList() {
        this.projects.forEach((proj) => {
            const li = document.createElement('li');
            const deploy = proj.urlDeploy !== '' ? `--> <a href="${proj.urlDeploy}" target="_blank"> Deploy </a>` : ''; const liContent = `
            <p>${proj.name} ${deploy} --> <a href="${proj.urlRepo}" target="_blank"> Repo </a></p>
            `;
            li.innerHTML = liContent;
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