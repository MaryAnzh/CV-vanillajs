class Projects {
    slider_HTMLElem = document.querySelector('.cv__main__projects__wrap__slider-wrap__slider');
    projectsList_HTMLElem = document.querySelector('.cv__main__projects__wrap__list-wrap__list');

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

    constructor() {
        this.currentShowList = [
            this.projects[0],
            this.projects[1],
        ];
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
        this.slider_HTMLElem.innerHTML = htmlNodes;
    }

    createProjectsList() {
        this.projects.forEach((proj) => {
            const li = document.createElement('li');
            li.textContent = proj.name;
            this.projectsList_HTMLElem.appendChild(li);
        });
    }
}

const projects = new Projects();
projects.createSliderItem();
projects.createProjectsList();