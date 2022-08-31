class Projects {
    slider_HTMLElem = document.querySelector('.cv__main__projects__wrap__slider-wrap__slider');
    sliderItems = [
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

    currentShowList = [];

    constructor() {
        this.currentShowList = [
            this.sliderItems[0],
            this.sliderItems[1],
        ];
    }

    createSliderItem() {
        let htmlNodes = '';
        this.sliderItems.forEach((elem) => {
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
        this.slider_HTMLElem.innerHTML = htmlNodes;
    }
}

const projects = new Projects();
projects.createSliderItem();