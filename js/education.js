class Education {
    universityIcon__HTMLElem = document.querySelector('#universityIcon');
    coursesList__HTMLElem = document.querySelector('.cv__main__education__wrap__info__course__course-info');

    universityIconSVG =
        `<g>
	<path d="M76.44,211.6h-9.89c-4.45,0-8.06-3.61-8.06-8.06v-98.89c0-4.45,3.61-8.06,8.06-8.06h9.89c4.45,0,8.06,3.61,8.06,8.06v98.89
		C84.5,207.99,80.89,211.6,76.44,211.6z"/>
</g>
<g>
	<path d="M32.94,211.6h-9.89c-4.45,0-8.06-3.61-8.06-8.06v-98.89c0-4.45,3.61-8.06,8.06-8.06h9.89c4.45,0,8.06,3.61,8.06,8.06v98.89
		C41,207.99,37.39,211.6,32.94,211.6z"/>
</g>
<g>
	<path d="M119.94,211.6h-9.89c-4.45,0-8.06-3.61-8.06-8.06v-98.89c0-4.45,3.61-8.06,8.06-8.06h9.89c4.45,0,8.06,3.61,8.06,8.06
		v98.89C128,207.99,124.39,211.6,119.94,211.6z"/>
</g>
<g>
	<path d="M163.44,211.6h-9.89c-4.45,0-8.06-3.61-8.06-8.06v-98.89c0-4.45,3.61-8.06,8.06-8.06h9.89c4.45,0,8.06,3.61,8.06,8.06
		v98.89C171.5,207.99,167.89,211.6,163.44,211.6z"/>
</g>
<g>
	<path d="M206.94,211.6h-9.89c-4.45,0-8.06-3.61-8.06-8.06v-98.89c0-4.45,3.61-8.06,8.06-8.06h9.89c4.45,0,8.06,3.61,8.06,8.06
		v98.89C215,207.99,211.39,211.6,206.94,211.6z"/>
</g>
<rect x="10" y="209.6" width="210" height="21"/>
<rect x="10" y="75.6" width="210" height="21"/>
<path d="M225,70.19H5v-22C41.32,32.13,78.68,16.06,115,0c37.02,16.06,72.98,32.13,110,48.19C225,55.52,225,62.86,225,70.19z"/>
         <rect y="224.6" width="230" height="23"/>`;

    courses = [
        {
            name: 'JavaScript/Front-end 2021Q3',
            certificate: 'certificate',
            position: '201',
            score: '3920.8',
            graduation: '03/2022',
        },
        {
            name: 'Angular 2022Q1',
            certificate: 'certificate',
            position: '80',
            score: '1031.4',
            graduation: '05/2022',
        },
    ];

    constructor() {
        this.renderSVG();
        this.renderCourse();
    }

    renderSVG() {
        this.universityIcon__HTMLElem.innerHTML = this.universityIconSVG;
    }

    renderCourse() {
        this.courses.forEach((cours) => {
            const ul = document.createElement('ul');
            const list = `
            <li>${cours.name}</li>
            <li>${cours.certificate}</li>
            <li>${cours.graduation}</li>
            <li>position: ${cours.position}</li>
            <li>score: ${cours.score}</li>`
            ul.innerHTML = list;
            this.coursesList__HTMLElem.appendChild(ul);
        });

    }
}

const education = new Education();